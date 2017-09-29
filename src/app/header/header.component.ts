import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {zz

  constructor() { }

  ngOnInit() {
  }

  // @Output() featureSelected = new EventEmitter<string>();

  OnSelected(feature: string) {
    // this.featureSelected.emit(feature);
  }

}
