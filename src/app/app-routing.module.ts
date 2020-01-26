import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { PageNotFound, PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
