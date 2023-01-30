import { Injectable } from '@angular/core';
import { WindowRef, WindowService } from '@progress/kendo-angular-dialog';
import { Observable } from 'rxjs';
import { AnswerComponent } from 'src/app/pages/answer/answer.component';
import { QuestionComponent } from 'src/app/pages/question/question.component';
import { Question } from '../models/question-models';
import { QuestionConfigs } from '../models/shared-models';
import { WindowContainer } from '../utilities/util';

@Injectable({
  providedIn: 'root'
})
/**
 * These component should already be loaded into memory in order to be called dynamically
 */
export class WindowSharedService {

  constructor(
    private windowService: WindowService
  ) {

  }

  openAddQuestion$(configs: QuestionConfigs, title: string = "Add a New Question") {
    const windowRef: WindowRef = this.windowService.open({
      title: title,
      content: QuestionComponent,
      width: 600,
      // height: 500,
      appendTo: WindowContainer.container,
    });
    const component: QuestionComponent = windowRef.content.instance;
    component.configs = configs;
    // component.windowRef = windowRef;
    return windowRef.result
  }

  openAnswert$(configs: QuestionConfigs, question: Question,  title: string = "Answer") {
    const windowRef: WindowRef = this.windowService.open({
      title: title,
      content: AnswerComponent,
      width: 500,
      // height: 400,
      appendTo: WindowContainer.container,
    });
    const component: AnswerComponent = windowRef.content.instance;
    component.configs = configs;
    component.questionForm = question;
    // component.windowRef = windowRef;
    return windowRef.result
  }
}
