import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageStronaComponent } from './one-page-strona/one-page-strona.component';
import { PageNotFoundComponent } from './strony/page-not-found/page-not-found.component';
import { Page500Component } from './page500/page500.component';

const routes: Routes = [
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent,
  },
  {
    path: 'page500',
    component: Page500Component,
  },
  {
    path: '',
    component: OnePageStronaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
