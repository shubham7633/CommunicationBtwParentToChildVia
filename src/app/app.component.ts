import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-overview';

  data  = "test data"

  childData = "parent data"
  updateData(item: string){
    this.childData = item
  }
}

