import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './globals';

@Injectable()

export class IndicadoresServices {
    public url: string;

    constructor (
        public _http:HttpClient
    ){
        this.url = GLOBAL.url
    }

 listIndicadores(){
    return this._http.get(this.url);
}

detailsIndicador(typeIndicador:any){
    return this._http.get(this.url+'/'+typeIndicador);
}

}