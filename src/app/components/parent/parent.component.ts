import { Component, OnInit } from '@angular/core';

interface User {
  name: String;
  ID: String;
  civilState: String;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  usuario: User = {
    name: "",
    ID: "",
    civilState: ""
  }

  public nombrePadre: String = "";
  public dniPadre: String = "";
  public estadoCivilPadre: String = "";
  public resultPadre: String = ""


  process(name: HTMLInputElement, dni: HTMLInputElement, civilState: HTMLSelectElement) {
    this.nombrePadre = name.value;
    this.dniPadre = dni.value;
    this.estadoCivilPadre = civilState.value;



    this.usuario.name = this.nombrePadre
    this.usuario.ID = this.dniPadre
    this.usuario.civilState = this.estadoCivilPadre
    this.resultPadre = JSON.stringify(this.usuario)

    console.log(JSON.stringify(this.usuario));

    return false;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
