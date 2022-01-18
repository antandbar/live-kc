import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-control-tareas',
  templateUrl: './control-tareas.component.html',
  styleUrls: ['./control-tareas.component.css']
})
export class ControlTareasComponent implements OnInit {
  aTareas: Array<string> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.aTareas = [];
  }

  addTareas(tarea:string) {
    this.aTareas?.push(tarea);
    console.dir(this.aTareas);
  }
  deleteTareas() {

  }

}
