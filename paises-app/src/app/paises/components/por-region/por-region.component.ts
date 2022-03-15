import { Component, Input, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: []
})
export class PorRegionComponent implements OnInit {

  @Input()paises: Countries[]=[];

  termino:string="";
  exiteError:boolean=false;

  constructor(private servicio:PaisService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  buscar(dato:string){
    console.log(this.termino);
    this.termino=dato;

    this.exiteError=false;

    this.servicio.buscarRegion(this.termino).subscribe(
      resp=>{
        console.log(resp);
        this.paises=resp;
      },(err)=>{
        console.log(err);
        this.exiteError=true;
      }
    );
  }
}
