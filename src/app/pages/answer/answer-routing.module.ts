import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerListComponent } from './answer-list/answer-list.component';

const routes: Routes = [

  {
    path: "",
    component: AnswerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
