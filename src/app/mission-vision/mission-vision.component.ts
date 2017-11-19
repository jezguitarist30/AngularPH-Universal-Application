import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MissionVisionComponent implements OnInit {

  title: string;
  content: string;

  constructor() {

    this.title = 'Mission and Vission';
    this.content = 'This is our mission and vision';

  }

  ngOnInit() {
  }

}
