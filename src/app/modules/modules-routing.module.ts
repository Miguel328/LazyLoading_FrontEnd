/**
 * AUTOR: Miguel A. Hernandez Z.
 * FECHA: 18/11/2019
 */

 
import { UtilsGuard } from '../shared/utils/utils.guard';

const lazyLoadingModule = () => import('./lazy-loading/lazy-loading.module').then(mod => mod.LazyLoadingModule);

export const MODULES_ROUTE = [
    { 
        path: 'lazy-loading',
        canActivate: [UtilsGuard],
        loadChildren: lazyLoadingModule
    }
];