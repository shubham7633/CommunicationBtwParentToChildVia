import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero

  @Output()updateDataEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

}