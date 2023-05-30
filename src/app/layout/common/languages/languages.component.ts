import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { NavigationService } from 'src/@fuse/components/navigation/navigation.service';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  availableLangs: AvailableLangs;
  activeLang: string;
  flagCodes: any;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseNavigationService: NavigationService
  ) {}
  ngOnInit(): void {}
}
