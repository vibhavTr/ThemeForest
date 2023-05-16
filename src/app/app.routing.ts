import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: '', pathMatch: 'full', redirectTo: 'example' },
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'dashboards/project',
  },
  {
    path: '',
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

  //Admin routes

  {
    path: '',
    children: [
      {
        path: 'dashboards',
        children: [
          {
            path: 'project',
            loadChildren: () =>
              import(
                './modules/auth/sign-in/admin/dashboards/project/project.module'
              ).then((m) => m.ProjectModule),
          },
        ],
      },
    ],
  },
];
