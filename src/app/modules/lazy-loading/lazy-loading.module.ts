import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { CalculateComponent } from './components/calculate/calculate.component';
import { CalculateService } from './components/calculate/calculate.service';

@NgModule({
  imports: [
    LazyLoadingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule
  ],
  declarations: [ 
    CalculateComponent
  ],
  exports: [
    CalculateComponent
  ],
  entryComponents: [
    CalculateComponent
  ],
  providers: [
    CalculateService
  ]
})

export class LazyLoadingModule { 
  constructor() {
    
  }
}