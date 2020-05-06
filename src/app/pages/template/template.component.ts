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
    correo: "diego@gmail.com",
    pais: '',
    genero: 'M'
  }

  paises:any[] = [];

  constructor(private pais:PaisService) { }

  ngOnInit(): void {
    this.pais.getPaises().subscribe(paises =>{
      this.paises = paises;
      //console.log(this.paises);
      this.paises.unshift({
        nombre: '[Seleccione una opnción]',
        codigo: '',        
      })
    })
  }

  guardar(forma:NgForm){
    console.log(forma);
    console.log(forma.value);

    if(forma.invalid){
      Object.values(forma.controls).forEach(control =>{
        control.markAsTouched();
      });
      return ;
    }

  }

}
