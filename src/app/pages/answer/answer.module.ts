import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerRoutingModule } from './answer-routing.module';



@NgModule({
  declarations: [
    AnswerComponent,
    AnswerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnswerRoutingModule
  ]
})
export class AnswerModule { }
