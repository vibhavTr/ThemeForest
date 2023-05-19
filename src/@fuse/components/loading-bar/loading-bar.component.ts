import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoadingService } from 'src/@fuse/services';

@Component({
  selector: 'fuse-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit {
  @Input() autoMode: boolean;
  mode: any;
  progress: number = 0;
  show: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _fuseLoadingService: LoadingService) {}

  ngOnInit(): void {
    this._fuseLoadingService.mode$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.mode = value;
      });
    this._fuseLoadingService.progress$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.progress = value;
      });

    this._fuseLoadingService.show$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.show = value;
      });
  }
}
