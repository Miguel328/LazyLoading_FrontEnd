/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */

import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsInterceptor, UtilsErrorInterceptor } from '../shared/utils/utils.interceptor';
import { RouterModule } from '@angular/router';
import { UtilsGuard } from '../shared/utils/utils.guard';
import { UnauthorizedRouteComponent } from '../shared/components/common/unauthorized/unauthorized.component';
import { NotFoundRouteComponent } from '../shared/components/common/notfound/notfound.component';
import { MODULES_ROUTE } from './modules-routing.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: "", 
        redirectTo: "app/lazy-loading/calculate",
        pathMatch: "full"
      },
      { 
        path: 'app', 
        children: MODULES_ROUTE,
        canActivate: [UtilsGuard]
      },
      { 
        path: 'unauthorized', 
        component: UnauthorizedRouteComponent 
      },
      { 
        path: '**', 
        component: NotFoundRouteComponent 
      }  
    ],
    {
      useHash: true
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    { provide: HTTP_INTERCEPTORS, useClass: UtilsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UtilsErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [RouterModule]
})

export class ModulesModule {}