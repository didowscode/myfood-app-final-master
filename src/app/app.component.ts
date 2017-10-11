import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mf-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do MyFood App!'

  constructor() { }

  ngOnInit() {
  }

}
