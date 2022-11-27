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
  // Declaramos la variable en el componente padre y el valor
  public parrafo: String = "Lorem ipsum dolor"
  public variableDeclaradaEnPadre: string = "Esta variable se declaro en padre y se paso al hijo"

  constructor() { }

  ngOnInit(): void {
  }

}
