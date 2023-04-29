import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http'
import { Router } from '@angular/router';
import { GlobalVariable } from '../AngularConfig/global'
import { Observable,of,catchError,map,tap } from 'rxjs';
import { CommonToastrService } from '../CommonService/CommonToastrService';
import { ToastrService } from 'ngx-toastr';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }) 
  };

@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient, private router: Router, public toastr: CommonToastrService) 
    {
    }
   public Get(url: string, params: any): Observable<any> {
       
        return  this.httpClient.get<any>(url, { params }).pipe(
            map(res => res),
            tap((obj: any) => {
            }),
            catchError(this.handleError())
           
          );
      
      }
   
      Post(url: string, data: any): Observable<any> {
        return this.httpClient.post<any>(url, data, httpOptions)
          .pipe(
            map(res => res),
            tap((obj: any) => {
            }),
            catchError(this.handleError())
          );
      }

   
    // public Get1(url: string, data: any): Promise<any> {

    //     let headers = this.CreateAuthorizationHeader();
    //     return this.http.get(url, { headers: headers, search: data, withCredentials: true })
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(error => this.handleError(error));
    // }

    // public Post(url: string, data: any): Promise<any> {
    //     let headers = this.CreateAuthorizationHeader();
    //     return this.http
    //         .post(url, data, { headers: headers })
    //         .toPromise()
    //         .then(e => e)
    //         .catch(error => this.handleError(error));
    // }


    // public Put(url: string, data: any): Promise<any> {
    //     let headers = this.CreateAuthorizationHeader();
    //     return this.http
    //         .put(url, JSON.stringify(data), { headers: headers })
    //         .toPromise()
    //         .then(e => e)
    //         .catch(error => this.handleError(error));
    // }

    // public Delete(url: string, data: any): Promise<any> {

    //     let headers = this.CreateAuthorizationHeader();

    //     return this.http.get(url, { headers: headers, search: data, withCredentials: true })
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(error => this.handleError(error));
    // }

    public ExportDataDownload(ApiUrl: string, FilePath: string): void {
        var url = ApiUrl + '/api/Download/DownloadFile?FilePath=' + FilePath;
        //window.open(url);
        window.location.href = url;
    }

    public CreateAuthorizationHeader(): HttpHeaders {
            let headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' });
            if (localStorage.getItem("Token") !== null)
                headers.set("Authorization", "Bearer " + localStorage.getItem("Token"));
           
            return headers;
            }
    
           
            private handleError<T>(operation = 'operation', result?: T) {
                return (error: any): Observable<T> => {
                  return of(result as T);
                };
              }


}

