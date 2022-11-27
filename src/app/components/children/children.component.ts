import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() dato1: Number = 0;
  @Input() dato2: String = "";
  

  @Output() notify: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {}

}