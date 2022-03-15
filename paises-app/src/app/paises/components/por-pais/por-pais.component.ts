import { Component, Input, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: []
})
export class PorPaisComponent implements OnInit{

@Input()paises: Countries[]=[];

termino:string="";
exiteError:boolean=false;



constructor(private servicio:PaisService){}

buscar(dato:string){
  console.log(this.termino);
  this.termino=dato;

  this.exiteError=false;

  this.servicio.buscarPais(this.termino).subscribe(
    resp=>{
      console.log(resp);
      this.paises=resp;
    },(err)=>{
      console.log(err);
      this.exiteError=true;
    }
  );
}
ngOnInit(): void {
}
}



