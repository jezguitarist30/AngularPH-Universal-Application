import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventComponent implements OnInit {

  title: string;
  content: string;

  constructor(meta: Meta, title: Title) {

    this.title = 'Events';
    this.content = 'List of Events';

    title.setTitle(this.title);

    meta.updateTag({ name: 'description', content: this.content });
    meta.updateTag({ property: 'og:title', content: this.title });
    meta.updateTag({ property: 'og:description', content: this.content });
    meta.updateTag({ property: 'og:image', content: 'https://www.webhostingpad.com/images/contact-us.jpg' });

  }

  ngOnInit() {
  }

}
