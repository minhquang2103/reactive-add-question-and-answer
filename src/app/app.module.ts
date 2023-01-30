import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { KendoUiModule } from './shared-modules/kendo-ui/kendo-ui.module';
import { HomeModule } from './pages/home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionModule } from './pages/question/question.module';
import { AnswerModule } from './pages/answer/answer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    KendoUiModule,
    HomeModule,
    QuestionModule,
    AnswerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
