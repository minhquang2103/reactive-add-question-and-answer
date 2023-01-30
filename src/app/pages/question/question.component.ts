import { Component, OnInit } from '@angular/core';
import { WindowRef } from '@progress/kendo-angular-dialog';
import { QuestionConfigs } from 'src/app/core/models/shared-models';
import { AbstractControl, FormBuilder, FormGroup, FormControl, ValidationErrors, ValidatorFn, Validators, FormArray } from '@angular/forms';
import { QuestionType } from 'src/app/core/models/question-models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  configs: QuestionConfigs;

  form: FormGroup;
  constructor(
    private windowRef: WindowRef,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initForm()
  }

  get questionTypeArray(): FormArray {
    return this.form.get('questionTypeArray') as FormArray
  }

  get checkboxAnswerOptionArray(): FormArray {
    return this.form.get('checkboxAnswerOptionArray') as FormArray
  }

  get isCheckboxQuestion(): boolean {
    return this.questionTypeArray.controls.findIndex(r => r.value['selected'] && r.value['name'] === QuestionType.Checkbox) > -1
  }

  get isParagraphQuestion(): boolean {
    return this.questionTypeArray.controls.findIndex(r => r.value['selected'] && r.value['name'] === QuestionType.Paragraph) > -1
  }

  onAddAnotherAnswer() {
    if (this.checkboxAnswerOptionArray.controls.length === 5) return
    this.checkboxAnswerOptionArray.push(
      this.formBuilder.group({
        answer: ""
      })
    )
  }

  private initForm() {
    this.form = this.formBuilder.group({
      isAllowOtherAnswer: new FormControl(),
      question: new FormControl(""),
      questionTypeArray: this.formBuilder.array([
        this.formBuilder.group({
          name: QuestionType.Paragraph,
          selected: true,
          required: false
        }),
        this.formBuilder.group({
          name: QuestionType.Checkbox,
          selected: true,
          required: false
        })
      ]),

      checkboxAnswerOptionArray: this.formBuilder.array([
        this.formBuilder.group({
          answer: ""
        }),
      ])
    })

    console.warn(this.form);
  }

  onSubmit() {
    let formValues = this.form.getRawValue();
    this.windowRef.close(formValues)
  }
}
