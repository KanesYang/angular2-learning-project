import { Component, DoCheck } from "@angular/core";
import { Map, List } from 'immutable';


class ChangeDetector {
  private _oldState;

  constructor(input) {
    this._oldState = input;
  }

  isStateChanged(input) {
    return (this._oldState != input);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  movies = [
    // Map({ title: 'm1' }),
    // Map({ title: 'm2' }),
    // Map({ title: 'm3' })
  ];
  title = 'Hello World';


  constructor() {
    // var input = 'apple';
    // var cd = new ChangeDetector(input);
    // input = input.toUpperCase();
    // console.log(cd.isStateChanged(input));
    // setTimeout(() => { }, 3000);

    // //map
    // var movie = Map({ title: 'm1', genre: 1 });
    // var title = movie.get('title');
    // movie = movie.set('title', 'new Title');
    // console.log(movie.toJS());

    // //list
    // var list = [
    //   Map({ title: 'm1' }),
    //   Map({ title: 'm2' }),
    //   Map({ title: 'm3' })
    // ];
    let movies = [];
    for (var i = 0; i < 10000; i++)
      this.movies.push({
        title: 'm ' + i,
        prop1: 1,
        prop2: 1,
        prop3: 1,
        prop4: 1,
        prop5: 1,
        prop6: 1,
        prop7: 1,
        prop8: 1,
        prop9: 1,
        prop10: 1,
      });
  }

  ngDoCheck() {
    console.log('AppCom-docheck')
  }

  onClick() {
    // this.movies[0].title = 'Update';
    //replace with a new object
    // this.movies[0] = { title: 'UPdate2' };

    // var movie = this.movies[0];
    // movie.set('title', 'Updated version');


    var movie = this.movies[0];
    this.movies[0] = movie.set('title', 'UPDATED');

  }

  changeTitle() {
    this.title = 'UPDATED TITLE';
  }
}
