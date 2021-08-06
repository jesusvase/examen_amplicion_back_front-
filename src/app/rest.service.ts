import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

//const endpoint = 'https://localhost:44358/api/';
const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}

getStudents(): Observable<any> {
  /* return this.http.get(endpoint + 'Student/GetStudentsAngular').pipe(
    map(this.extractData),
    catchError(this.handleError<any>('getStudents'))
  );*/
      return this.http.get(endpoint + 'student/students').pipe(
        map(this.extractData),
        catchError(this.handleError<any>('list students'))
        );
}

addStudent (student): Observable<any> {
  console.log(student);
  /*return this.http.post<any>(endpoint + 'Student/PostStudent/', JSON.stringify(student), httpOptions).pipe(
    tap((student) => console.log('added student')),
    catchError(this.handleError<any>('addStudent'))
  );*/

   return this.http.post<any>(endpoint + 'student/add/', JSON.stringify(student), httpOptions).pipe(
     tap((student) => console.log('added student')),
     catchError(this.handleError<any>('addStudent'))
   );
}
updateStudent (student): Observable<any> {
  /*return this.http.put(endpoint + 'Student/PutStudent/'+student.id, JSON.stringify(student), httpOptions).pipe(
    tap((student) => console.log('updated student')),
    catchError(this.handleError<any>('updateStudent'))
  );*/

    return this.http.put(endpoint + 'student/update/' + student.id, JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('updated student')),
      catchError(this.handleError<any>('updateStudent'))
    );
}
deleteStudent(id): Observable<any> {
 /*return this.http.delete<any>(endpoint + 'student/DeleteStudent/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deletestudents'))
    );*/
    return this.http.delete<any>(endpoint + 'student/delete/'+ id, httpOptions).pipe(
      tap((id) => console.log('deleted student id=${id}')),
      catchError(this.handleError<any>('deleteStudent'))
    );
}
getStudent(id): Observable<any> {
   /* return this.http.get(endpoint + 'Student/GetStudent/' + id).pipe(
    map(this.extractData),
    catchError(this.handleError<any>('getStudentById'))
    );*/

      return this.http.get(endpoint + 'student/students/' + id).pipe(
        map(this.extractData),
        catchError(this.handleError<any>('student by id'))
        );
}


getMajors(): Observable<any> {
  /* return this.http.get(endpoint + 'Student/GetStudentsAngular').pipe(
    map(this.extractData),
    catchError(this.handleError<any>('getStudents'))
  );*/
      return this.http.get(endpoint + 'major/getAllMajors').pipe(
        map(this.extractData),
        catchError(this.handleError<any>('list Majors'))
        );
}

addMajor (major): Observable<any> {
  console.log(major)  /*return this.http.post<any>(endpoint + 'Student/PostStudent/', JSON.stringify(student), httpOptions).pipe(
    );
  /*return this.http.post<any>(endpoint + 'Student/PostStudent/', JSON.stringify(student), httpOptions).pipe(
    tap((student) => console.log('added student')),
    catchError(this.handleError<any>('addStudent'))
  );*/

   return this.http.post<any>(endpoint + 'major/saveMajor/', JSON.stringify(major), httpOptions).pipe(
     tap((major) => console.log('added Major')),
     catchError(this.handleError<any>('addMajor'))
   );
}
updateMajor (major): Observable<any> {
  /*return this.http.put(endpoint + 'Student/PutStudent/'+student.id, JSON.stringify(student), httpOptions).pipe(
    tap((student) => console.log('updated student')),
    catchError(this.handleError<any>('updateStudent'))
  );*/

    return this.http.put(endpoint + 'major/updateMajor/', JSON.stringify(major), httpOptions).pipe(
      tap((major) => console.log('updated Major')),
      catchError(this.handleError<any>('updateMajor'))
    );
}
deleteMajor(id): Observable<any> {
 /*return this.http.delete<any>(endpoint + 'student/DeleteStudent/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deletestudents'))
    );*/
    return this.http.delete<any>(endpoint + 'major/deleteMajorSP/'+ id, httpOptions).pipe(
      tap((id) => console.log('deleted student id=${id}')),
      catchError(this.handleError<any>('deleteMajor'))
    );
}
getMajor(id): Observable<any> {
   /* return this.http.get(endpoint + 'Student/GetStudent/' + id).pipe(
    map(this.extractData),
    catchError(this.handleError<any>('getStudentById'))
    );*/

      return this.http.get(endpoint + 'major/getMajor/' + id).pipe(
        map(this.extractData),
        catchError(this.handleError<any>('Major by id'))
        );
}




private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}