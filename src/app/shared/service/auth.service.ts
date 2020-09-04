import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { catchError, retry, tap, delay, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // gotoPage(page: string, preserveParams = true) {
  //   const navigationExtras: NavigationExtras = {
  //     queryParamsHandling: preserveParams ? 'merge' : '', preserveFragment: preserveParams
  //   };

  //   this.router.navigate([page], navigationExtras);
  // }

  // gotoHomePage() {
  //   this.router.navigate([this.homeUrl]);
  // }

  public checkLogin(login: string) {
    // simulate http.get()
    return of({ isLoginAvailable: login !== 'test'}).pipe(delay(4000));
  }

  checkEmail(email: string): Observable<boolean> {
    const emails = this.getTextFile('assets/files/user-mail.json');
    return emails.pipe(
      delay(5000),
      map(res => JSON.parse(res)),
      map(users => users.filter(user => user.email === email)),
      map(users => !users.length)
    );
  }

  getTextFile(filename: string) {
    // important: The types of the observe and response options are string unions, rather than plain strings.
    const options = {
      responseType: 'text' as const,
    };

    // The Observable returned by get() is of type Observable<string> because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    // return this.http.get(filename, { responseType: 'text' }) or
    return this.http.get(filename, options)
      .pipe(
        tap(
          data => {
            // console.info(filename, data);
            return data;
          },
          error => console.error(error)
        )
      );
  }
}

/*
There are two ways to make a service a singleton in Angular:
  - Set the providedIn property of the @Injectable() to "root".
  - Include the service in the AppModule or in a module that is only imported by the AppModule

Beginning with Angular 6.0, the preferred way to create a singleton service is to set providedIn to root on the service's @Injectable() decorator.
 This tells Angular to provide the service in the application root.
 @Injectable({
  providedIn: 'root'
})
*/

/*
Communicating with backend services using HTTP:
 Angular provides a simplified client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.
 Implements an HTTP client API for Angular apps that relies on the XMLHttpRequest interface exposed by browsers.
 Includes testability features, typed request and response objects, request and response interception, observable APIs, and streamlined error handling.

 Before you can use HttpClient, you need to import the Angular HttpClientModule. Most apps do so in the root AppModule.
 The HttpClient service makes use of observables for all transactions. You must import the RxJS observable and operator symbols that appear in the example snippets.

Requesting data from a server:
 Use the HTTPClient.get() method to fetch data from a server.
 The aynchronous method sends an HTTP request, and returns an Observable that emits the requested data when the response is received.
 The return type varies based on the observe and responseType values that you pass to the call.
 The get() method takes two arguments; the endpoint URL from which to fetch, and an options object that you can use to configure the request.

 options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
 }

 Important options include the observe and responseType properties:
    - The observe option specifies how much of the response to return.
    - The responseType option specifies the format in which to return data.
 These are the default values for those options: {observe: 'body', responseType: 'json'}.


 important: The types of the observe and response options are string unions, rather than plain strings.
 options: {
    ...
    observe?: 'body' | 'events' | 'response',
    ...
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    ...
  }

  This can cause confusion. For example:
    // this works
    client.get('/foo', {responseType: 'text'})

    // but this does NOT work
    const options = {
      responseType: 'text',
    };
    client.get('/foo', options)

  In the second case, TypeScript infers the type of options to be {responseType: string}.
  The type is too wide to pass to HttpClient.get which is expecting the type of responseType to be one of the specific strings.
  HttpClient is typed explicitly this way so that the compiler can report the correct return type based on the options you provided.
  Use as const to let TypeScript know that you really do mean to use a constant string type:
  const options = {
    responseType: 'text' as const,
  };
  client.get('/foo', options);

 Use the params property to configure a request with HTTP URL parameters, and the reportProgress option to listen for progress events when transferring large amounts of data.

Requesting a typed response:
 You can structure your HttpClient request to declare the type of the response object, to make consuming the output easier and more obvious.
 Specifying the response type acts as a type assertion at compile time.

 This is a build-time check and doesn't guarantee that the server will actually respond with an object of this type.
 It is up to the server to ensure that the type specified by the server API is returned.

 To specify the response object type, first define an interface with the required properties.
 Use an interface rather than a class, because the response is a plain object that cannot be automatically converted to an instance of a class.

 When you pass an interface as a type parameter to the HttpClient.get() method, you can use the RxJS map operator to transform the response data as needed by the UI.
 You can then pass the transformed data to the async pipe.

 this.configService.getConfig()
    // clone the data object, using its known Config shape
    .subscribe((data: Config) => this.config = { ...data });

 the following subscribe callback receives data as an Object, and then type-casts it in order to access the properties:
  .subscribe(data => this.config = {
    heroesUrl: (data as any).heroesUrl,
    textfile:  (data as any).textfile,
 });
 */

/*
Reading the full response:
In the previous example, the call to HttpClient.get() did not specify any options. By default, it returned the JSON data contained in the response body.
Tell HttpClient that you want the full response with the observe option of the get() method:

getConfigResponse(): Observable<HttpResponse<Config>> {
 return this.http.get<Config>(this.configUrl, { observe: 'response' });
}

this.configService.getConfigResponse()
   // resp is of type `HttpResponse<Config>`
   .subscribe(resp => {
     // display its headers
     const keys = resp.headers.keys();
     this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

     // access the body directly, which is typed as `Config`.
     this.config = { ... resp.body };
   });

Requesting non-JSON data
Not all APIs return JSON data. In this next example, a DownloaderService method reads a text file from the server and logs the file contents,
before returning those contents to the caller as an Observable<string>.

getTextFile(filename: string) {
 // The Observable returned by get() is of type Observable<string>
 // because a text response was specified.
 // There's no need to pass a <string> type parameter to get().
 return this.http.get(filename, {responseType: 'text'})
   .pipe(
     tap( // Log the result or error
       data => this.log(filename, data),
       error => this.logError(filename, error)
     )
   );
}
HttpClient.get() returns a string rather than the default JSON because of the responseType option.
The RxJS tap operator (as in "wiretap") lets the code inspect both success and error values passing through the observable without disturbing them.
*/

/* Always subscribe!
 An HttpClient method does not begin its HTTP request until you call subscribe() on the observable returned by that method.
 This is true for all HttpClient methods. The AsyncPipe subscribes (and unsubscribes) for you automatically.
 All observables returned from HttpClient methods are cold by design. Execution of the HTTP request is deferred,
 allowing you to extend the observable with additional operations such as tap and catchError before anything actually happens.
 Calling subscribe(...) triggers execution of the observable and causes HttpClient to compose and send the HTTP request to the server.
 You can think of these observables as blueprints for actual HTTP requests.
 In fact, each subscribe() initiates a separate, independent execution of the observable. Subscribing twice results in two HTTP requests.
*/
