/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import {  } from '../../../constants';

@Injectable()
export class SharedService {
    
    constructor(private http: HttpClient) {   
        
    }
}