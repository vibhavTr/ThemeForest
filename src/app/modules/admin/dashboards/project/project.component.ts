import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(private _router: Router) {}
  selectedProject: string = 'ACME Corp. Backend App';
  ngOnInit(): void {}

  signOut() {
    this._router.navigate(['sign-out']);
  }
}
