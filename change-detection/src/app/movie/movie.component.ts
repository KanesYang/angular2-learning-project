import { Component, Input, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //OnPush
})
export class MovieComponent implements DoCheck{
  @Input() movie;

  ngDoCheck() {
    console.log('MovieCom-docheck')
  }
}
