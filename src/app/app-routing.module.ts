import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products-page/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/details-page/details-page.module').then(
        (m) => m.DetailsPageModule
      ),
  },
  {
    path: 'unauthorized',
    loadChildren: () =>
      import('./pages/unauthorized-page/unauthorized-page.module').then(
        (m) => m.UnauthorizedPageModule
      ),
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./pages/admin-page/admin-page.module').then(
        (m) => m.AdminPageModule
      ),
  },
  { path: 'register', loadChildren: () => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
