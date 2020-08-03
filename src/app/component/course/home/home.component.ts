import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, finalize , map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('/api/courses')
      .pipe(
        map((response: Response) => console.log(response)),
        finalize(() => console.log('get courses completed'))).subscribe(() => console.log('end'));
  }

}
