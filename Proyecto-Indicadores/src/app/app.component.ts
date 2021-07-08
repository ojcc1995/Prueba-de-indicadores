import { Component } from '@angular/core';
import { IndicadoresServices } from './services/indicadoresServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IndicadoresServices]

})
export class AppComponent {
  title = 'Proyecto-Indicadores';
  indicadores: any;
  dataAmountIndicadores: any;
  dataSumaryindicador: any;

  constructor(
    public _indi: IndicadoresServices

  )
  {

  
  }
  
  ngOnInit(){
    this._indi.listIndicadores().subscribe(
       (res:any)=>{
        
        this.indicadores = Object.values(res);
        console.log('res>',this.indicadores);
      },
      (error)=>{
        console.log('ERROR>',error)
      }
    )
  }

  getDetailsIndicadores(type:any){
    this._indi.detailsIndicador(type).subscribe(
      (res:any)=>{
        console.log('res>',res);
        this.dataAmountIndicadores = res;
      },
      (error)=>{
        console.log('error>',error);
      }
    )
  }

  sumaryIndicador(datos:any){
    this.dataSumaryindicador=datos;
  }
}
