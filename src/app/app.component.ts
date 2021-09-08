import {Component} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map, scan, throttleTime} from "rxjs/operators";

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event: any) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(count));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'githubBattle';
}
