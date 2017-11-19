import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventComponent implements OnInit {

  title: string;
  content: string;

  constructor() {

    this.title = 'Events';
    this.content = 'List of Events';

  }

  ngOnInit() {
  }

}
