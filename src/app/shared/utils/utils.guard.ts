/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */


import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalConstants } from "./utils.const";

@Injectable()
export class UtilsGuard implements CanActivate {
    constructor (private router: Router) { }

    public canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
        // let helper = new JwtHelperService();
        // let token: string = GlobalConstants.token().replace("Bearer ", "").replace("bearer ", "");
        // if(typeof token !== "undefined" && token !== "" && token !== null) {           
        //     if(helper.isTokenExpired(token)) {
        //         this.router.navigate(['seguridad/unauthorized']);
        //         return false;
        //     }
        //     else {
        //         return true;
        //     }
        // }
        // else {
        //     this.router.navigate(['seguridad/unauthorized']);
        //     return false;
        // }
    }
}