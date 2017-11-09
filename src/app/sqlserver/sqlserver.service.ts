import { Injectable } from '@angular/core';
import { User } from './sqlserver.model';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class SqlserverService {

  constructor(private httpClient: HttpClient,
    private http: Http) { }

  debug = false;
  
  resultHttpClient;

  private user: User[];

  getUserWithGetProperty() 
  {
    this.httpClient.get("/api/user/")
      .map(this.mapToUser)
      .do(data => {
        this.user = data;
        return data;
      })
      .subscribe(); 
      
    return this.user;
  }
  
  private mapToUser(rawMessages): Array<User> {
    if (rawMessages['content']) {
      rawMessages = rawMessages['content'];
    }
    return rawMessages.map(it => new User(it));
  }
  
  private extractData(res: Response) {
    const body = res.json();
    if (body){
      return body.data || body;
    } else {
      return {}
    }
  }

  public unSecuredGet(url): Observable<any> {
    return this.http.get(this.getBaseUrl() + "api" + url)
      .map(this.extractData);

  }
  
  private getBaseUrl(){
    return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
  }
}
