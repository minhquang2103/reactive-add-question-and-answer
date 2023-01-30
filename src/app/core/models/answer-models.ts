import { Question } from "./question-models";

export interface Answer {
    paragraph: string;
    checkboxAnswer: CheckboxAnswer[];
}

export interface AnswerList {
    answer: Answer,
    question: Question
}

export interface CheckboxAnswer {
    name: string;
    selected: boolean;
}