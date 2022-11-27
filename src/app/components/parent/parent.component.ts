import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // send data to children component
  public dato1: Number = 10;
  public dato2: String = "Segundo dato desde parent";

  constructor() { }

  ngOnInit(): void {
  }

}
