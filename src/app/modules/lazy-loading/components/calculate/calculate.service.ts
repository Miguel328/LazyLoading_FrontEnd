import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { URL_BASE_API } from '../../../../../constants';

@Injectable()
export class CalculateService {
    
    constructor(private http: HttpClient) {   
        
    }

    public calculateTrips(dni: string, file: File): Observable<any[]> {
        let formData = new FormData();
        formData.append("File", file);
        formData.append("Dni", dni);
        return this.http.post<any[]>(URL_BASE_API + 'Move/Calculate', formData);
    }
}