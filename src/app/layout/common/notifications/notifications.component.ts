import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { NotificationsService } from './notifications.service';
import { TemplatePortal } from '@angular/cdk/portal';

export interface Notification {
  id: string;
  icon?: string;
  image?: string;
  title?: string;
  description?: string;
  time: string;
  link?: string;
  useRouter?: boolean;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @ViewChild('notificationsOrigin') private _notificationsOrigin: MatButton;
  @ViewChild('notificationsPanel')
  private _notificationsPanel: TemplateRef<any>;

  notifications: Notification[];
  unreadCount: number = 0;
  private _overlayRef: OverlayRef;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private _notificationsService: NotificationsService
  ) {}
  ngOnInit(): void {
    this._notificationsService.notifications$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((notifications: Notification[]) => {
        // Load the notifications
        this.notifications = notifications;

        // Calculate the unread count
        this._calculateUnreadCount();

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }
  /**
   * Open the notifications panel
   */
  openPanel(): void {
    // Return if the notifications panel or its origin is not defined
    if (!this._notificationsPanel || !this._notificationsOrigin) {
      return;
    }

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Attach the portal to the overlay
    this._overlayRef.attach(
      new TemplatePortal(this._notificationsPanel, this._viewContainerRef)
    );
  }

  /**
   * Close the notifications panel
   */
  closePanel(): void {
    this._overlayRef.detach();
  }

  /**
   * Mark all notifications as read
   */
  markAllAsRead(): void {
    // Mark all as read
    this._notificationsService.markAllAsRead().subscribe();
  }

  /**
   * Toggle read status of the given notification
   */
  toggleRead(notification: Notification): void {
    // Toggle the read status
    notification.read = !notification.read;

    // Update the notification
    this._notificationsService
      .update(notification.id, notification)
      .subscribe();
  }

  /**
   * Delete the given notification
   */
  delete(notification: Notification): void {
    // Delete the notification
    this._notificationsService.delete(notification.id).subscribe();
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'fuse-backdrop-on-mobile',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(
          this._notificationsOrigin._elementRef.nativeElement
        )
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ]),
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef.detach();
    });
  }
  /**
   * Calculate the unread count
   *
   * @private
   */
  private _calculateUnreadCount(): void {
    let count = 0;

    if (this.notifications && this.notifications.length) {
      count = this.notifications.filter(
        (notification) => !notification.read
      ).length;
    }

    this.unreadCount = count;
  }
}
