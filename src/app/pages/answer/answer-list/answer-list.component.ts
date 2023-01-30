import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Answer, AnswerList } from 'src/app/core/models/answer-models';
import { BackendService } from 'src/app/core/services/backend.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  answers$: Observable<AnswerList[]>;

  constructor(
    private backEndService: BackendService,
    private router: Router
  ) { 

  }

  ngOnInit() {
    this.answers$ = this.backEndService.answers$();
    this.answers$.subscribe((res) => console.log(res))
  }

  onBackToFormBuilder() {
    this.router.navigate([""])
  }

}
