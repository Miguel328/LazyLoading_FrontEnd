import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CalculateService } from './calculate.service';
import { CalculateTrips } from '../../../../shared/models/calculateTrips.model';
import { Bag } from '../../../../shared/models/bag';
import { Element } from '../../../../shared/models/element';

@Component({
    selector: 'calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {  

    public form: FormGroup;
    public error: string;

    constructor(private formBuilder: FormBuilder, private service: CalculateService) { 

    }

    public ngOnInit() {
        this.form = this.formBuilder.group({
            dni: ['', Validators.required],
            file: [null, Validators.required]
        });
    }

    public submit(): void {
        this.error = undefined;
        if(this.form.invalid){
            this.error = "Se debe ingresar un # de identificación y seleccionar un archivo.";
        }
        else {
            this.service.calculateTrips(this.form.get("dni").value, this.form.get("file").value).subscribe(
                (result: any[]) => {
                    let lines: string[] = [];
                    result.forEach((data: any) => {
                        let trips : CalculateTrips = new CalculateTrips({
                            Day: data.calculateTrips.day,
                            Trips: data.calculateTrips.trips,
                            Bags: []
                        });

                        data.calculateTrips.bags.forEach((bag: any) => {
                            let elements: Element[] = [];
                            bag.elements.forEach((element: any) => {
                                elements = [...elements, new Element({
                                    Weight: element.weight.value
                                })];
                            });

                            trips.Bags = [...trips.Bags, new Bag({
                                TotalElements: bag.totalElements.value,
                                Elements: elements
                            })]
                        });
                        console.log(trips);
                        lines = [...lines, trips.Case];
                    });

                    this.downloadFile(lines);
                },
                (error) => {
                    this.error = error;
                }
            );
        }
    }

    public loadFile(event: any): void{
        if(event.files.length > 0){
            let file : File = event.files[0];
            this.form.get("file").setValue(file);
        }
        else {
            this.form.get("file").setValue(null);
        }
    }

    public downloadFile(lines: string[]): void {
        const blob = new Blob([lines.join('\n')], { type: 'application/octet-stream' });
        var a = document.createElement("a");
        var url = URL.createObjectURL(blob);
        a.href = url;
        a.download = "prueba_output.txt";
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}