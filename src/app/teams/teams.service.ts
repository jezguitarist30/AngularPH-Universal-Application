import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class Member {
  public id: number;
  public name: string;
  public position: string;
  public bio: string;
}

@Injectable()
export class TeamsService {

  members: Array<Member> = new Array<Member>();

  constructor(private _http: Http) {

    this.members.push(
      {
        id: 1, name: "CJ Felix", position: "Community Leader",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`
      },
      {
        id: 2, name: "Jez Reel", position: "Community Leader",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`
      },
      {
        id: 3, name: "Jethro", position: "Community Leader",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`
      },
      {
        id: 4, name: "Zach", position: "Community Leader",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`
      },
      {
        id: 5, name: "Jonas", position: "Community Leader",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.`
      },
    );

  }

  getAll(): Observable<Array<Member>> {
      return Observable.of(this.members);
  }

  getMemberInfo(id): any {
     return this._http.get('https://jsonplaceholder.typicode.com/users/' + id).map(res => res.json());
  }

}
