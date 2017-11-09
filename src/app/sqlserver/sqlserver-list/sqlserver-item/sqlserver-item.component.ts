import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../sqlserver.model';

@Component({
  selector: 'app-sqlserver-item',
  templateUrl: './sqlserver-item.component.html',
  styleUrls: ['./sqlserver-item.component.css']
})
export class SqlserverItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
