import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPH';

  constructor(meta: Meta, title: Title) {

    const pageTitle = 'AngularPH';

    title.setTitle(pageTitle);

    meta.addTags([
      { name: 'author', content: 'Jez Reel' },
      { name: 'keywords', content: 'angular, seo, angular universal, angularPH' },
      { property: 'fb:app_id', content: '2082702508626630' },
      { property: 'og:title', content: pageTitle },
      { property: 'og:site_name', content: 'AngularPH' },
      { property: 'og:image', content: 'https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.0-9/22449860_10215250497439436_2887478617234800950_n.jpg?oh=28b72465eefa56d25afa8f8212ed8cba&oe=5AABB00F' }
    ]);

  }

}
