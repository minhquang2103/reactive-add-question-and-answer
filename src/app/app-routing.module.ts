import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule),
  },
  {
    path: 'answer',
    loadChildren: () => import("./pages/answer/answer.module").then(m => m.AnswerModule)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
