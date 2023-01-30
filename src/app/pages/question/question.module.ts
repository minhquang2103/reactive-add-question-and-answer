import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    FormBuilder
  ]
})
export class QuestionModule { }
