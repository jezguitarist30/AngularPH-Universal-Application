import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MissionVisionComponent implements OnInit {

  title: string;
  content: string;

  constructor(meta: Meta, title: Title) {

    this.title = 'Mission and Vission';
    this.content = 'This is our mission and vision';

    title.setTitle(this.title);

    meta.updateTag({ name: 'description', content: this.content });
    meta.updateTag({ property: 'og:title', content: this.title });
    meta.updateTag({ property: 'og:description', content: this.content });
    meta.updateTag({ property: 'og:image', content: 'http://latinaswhotravel.com/wp-content/uploads/2017/07/Latinas-Who-Travel-Meet-ups-and-Events.jpg' });
    meta.updateTag({ property: 'og:image', content: 'http://www.northamptonshiregrowthhub.co.uk/wp-content/uploads/2017/08/UpcomingEvents.jpg' });
    
  }

  ngOnInit() {
  }

}
