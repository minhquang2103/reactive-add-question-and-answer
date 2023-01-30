import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowCloseResult } from '@progress/kendo-angular-dialog';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { BackendService } from 'src/app/core/services/backend.service';
import { WindowSharedService } from 'src/app/core/services/window-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private backendService: BackendService,
    private windowSharedService: WindowSharedService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  onAddQuestion() {
    this.windowSharedService.openAddQuestion$(null).pipe(
      concatMap(res => {
        if (res instanceof WindowCloseResult) return of()
        console.log(res);
        return this.windowSharedService.openAnswert$(null, res)
      }),
      concatMap(res => {
        if (res instanceof WindowCloseResult) return of()
        console.log("Answer:", res);
        return this.backendService.newAnswer$(res)
      }),
      tap(() => {
        this.router.navigate(["answer"])
      })
    ).subscribe()
  }

}
