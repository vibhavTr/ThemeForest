import { Route } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/project' },

  // Redirect signed-in user to the '/dashboards/project'
  //
  // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'dashboards/project',
  },

  // Auth routes for guests
  {
    path: '',
    canMatch: [NoAuthGuard],
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
    ],
  },

  //Routing for authentication user
  {
    path: '',
    canMatch: [AuthGuard],
    children: [
      {
        path: 'sign-out',
        loadChildren: () =>
          import('./modules/auth/sign-out/sign-out.module').then(
            (m) => m.SignOutModule
          ),
      },
    ],
  },

  //Admin routes
  {
    path: '',
    component: LayoutComponent,
    canMatch: [AuthGuard],
    children: [
      {
        path: 'dashboards',
        children: [
          {
            path: 'project',
            loadChildren: () =>
              import('./modules/admin/dashboards/project/project.module').then(
                (m) => m.ProjectModule
              ),
          },
        ],
      },
    ],
  },
];
