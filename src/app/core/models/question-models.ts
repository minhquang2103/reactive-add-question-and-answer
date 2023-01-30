export interface Question {
    questionTypeArray: IQuestionType[];
    question: string;
    isAllowOtherAnswer: boolean;
    checkboxAnswerOptionArray: [];
}

export enum QuestionType {
    Paragraph = "Paragraph",
    Checkbox = "Checkbox"
}

export interface IQuestionType {
    name: QuestionType.Paragraph | QuestionType.Checkbox;
    selected: boolean;
    required: boolean
}