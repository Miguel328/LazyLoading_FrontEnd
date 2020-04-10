/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */


import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public loading: boolean = false;
    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    setTimeout(()=> {
                        this.loading = false;
                    }, 2000);
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}