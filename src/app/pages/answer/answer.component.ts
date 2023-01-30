import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WindowRef } from '@progress/kendo-angular-dialog';
import { Answer } from 'src/app/core/models/answer-models';
import { Question, QuestionType } from 'src/app/core/models/question-models';
import { AnswerConfigs } from 'src/app/core/models/shared-models';
import { BackendService } from 'src/app/core/services/backend.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  configs: AnswerConfigs;
  questionForm: Question;

  form: FormGroup;

  constructor(
    private backEndService: BackendService,
    private formBuilder: FormBuilder,
    private windowRef: WindowRef
  ) {

  }

  get isCheckbox(): boolean {
    return this.questionForm.questionTypeArray.findIndex(r => r.name === QuestionType.Checkbox && r.selected) > -1;
  }

  get isParagraph(): boolean {
    return this.questionForm.questionTypeArray.findIndex(r => r.name === QuestionType.Paragraph && r.selected) > -1;
  }

  get checkboxAnswer(): FormArray {
    return this.form.get('checkboxAnswer') as FormArray
  }

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    const formBuilderCheckboxArr = this.questionForm.checkboxAnswerOptionArray.map((r: { answer: string }) => this.formBuilder.group({
      name: r.answer,
      selected: false,
    }))

    this.form = this.formBuilder.group({
      paragraph: new FormControl()
    })

    if (this.isCheckbox) {
      this.form.addControl("checkboxAnswer", this.formBuilder.array(formBuilderCheckboxArr))
    }

    console.warn(this.form);

  }

  onReviewMyAnswer() {
    this.onSubmit()
  }

  onAddNewQuestion() {
    this.onSubmit()
  }

  private onSubmit() {
    let form: Answer = this.form.getRawValue();
    form.checkboxAnswer = form.checkboxAnswer.filter(r => r.selected);
    this.windowRef.close({ answer: form, question: this.questionForm })
  }

}
