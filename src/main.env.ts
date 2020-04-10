/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */

import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

import { AppModule } from './app/app.module';
import singleSpaAngular from 'single-spa-angular';
import { GlobalConstants } from './app/shared/utils/utils.const';

enableProdMode();

const ngLifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps: any) => {
    GlobalConstants.singleSpaProps = singleSpaProps;
    return platformBrowserDynamic().bootstrapModule(AppModule);
  },
  template: '<app-root />',
  Router,
  NgZone: NgZone,
});

export const bootstrap = (props: any) => ngLifecycles.bootstrap(props);
export const mount = (props: any) => ngLifecycles.mount(props);
export const unmount = (props: any) => ngLifecycles.unmount(props);