import { Component, OnInit } from '@angular/core';
import { User } from '../sqlserver.model';
import { Subscription } from "rxjs/Rx";
import { SqlserverService } from '../sqlserver.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-sqlserver-list',
  templateUrl: './sqlserver-list.component.html',
  styleUrls: ['./sqlserver-list.component.css']
})
export class SqlserverListComponent implements OnInit {

  constructor(private sqlserverService: SqlserverService,
    private httpClient: HttpClient,
    private http: Http) { }

    public paramSub: Subscription;
    public messageSub: Subscription;

    public users: User[];
  
  data: string[];
  dataJson: User[];
  dataString: string;

  ngOnInit() {
  }

  getAllUsers() {
    this.messageSub = this.sqlserverService.unSecuredGet("/user/")
      .subscribe(
        message => {
          console.log(message);
          if (message['content']) {
            message = message['content'];
          }

          this.users = message.map(it => new User(it));
          console.log(this.users);
        }
      );
  }

}
