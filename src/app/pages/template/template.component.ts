import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: "Diego",
    apellido: "Gomez",
    correo: "diego@gmail.com"
  }

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
    this.pais.getPaises().subscribe(paises =>{
      console.log(paises);
    })
  }

  guardar(forma:NgForm){
   // console.log(forma);
    console.log(forma.value);

    if(forma.invalid){
      Object.values(forma.controls).forEach(control =>{
        control.markAsTouched();
      })
    }

  }

}
