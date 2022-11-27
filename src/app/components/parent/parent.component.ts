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
  
  public nombre: String = "";
  public dni: String = "";
  public estadoCivil: String = "";

  process(name: HTMLInputElement, dni: HTMLInputElement, civilState: HTMLInputElement) {
    this.nombre = name.value
    this.dni = dni.value
    this.estadoCivil = civilState.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
