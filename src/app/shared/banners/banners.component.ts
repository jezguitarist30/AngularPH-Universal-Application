import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BannersComponent implements OnInit {
  
  @Input() slides: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit() {
  }

}
