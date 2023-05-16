import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FuseAlertAppearance, FuseAlertType } from './alert.types';

@Component({
  selector: 'fuse-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() appearance: FuseAlertAppearance = 'soft'
  @Input() showIcon: boolean = true;
  @Input() type: FuseAlertType = 'primary'
  @Input() dismissible: boolean = false;
  @Input() dismissed: boolean = false;
  constructor() { }

  @HostBinding('class') get classList(): any {
    return {
      'fuse-alert-appearance-border': this.appearance === 'border',
      'fuse-alert-appearance-outline': this.appearance === 'outline',
    }
  }

  ngOnInit(): void {
    console.log('apperance',this.appearance)
  }

  dismiss(): void
    {
        // Return if the alert is already dismissed
        if ( this.dismissed )
        {
            return;
        }

        // Dismiss the alert
        // this._toggleDismiss(true);
    }
}
