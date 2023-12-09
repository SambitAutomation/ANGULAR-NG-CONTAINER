import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-NG-CONTAINER';

  toggle: boolean = true;

  onClick(){
    this.toggle = !this.toggle;
  }
}
