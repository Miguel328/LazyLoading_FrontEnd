/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 01/04/2020
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundRouteComponent } from './shared/components/common/notfound/notfound.component';
import { UtilsGuard } from './shared/utils/utils.guard';
import { UnauthorizedRouteComponent } from './shared/components/common/unauthorized/unauthorized.component';
import { ModulesModule } from './modules/modules.module';

import '../assets/styles';

@NgModule({
    declarations: [ 
        AppComponent,
        NotFoundRouteComponent,
        UnauthorizedRouteComponent
    ],
    imports: [ 
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ModulesModule
    ],
    providers: [ 
        UtilsGuard
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}