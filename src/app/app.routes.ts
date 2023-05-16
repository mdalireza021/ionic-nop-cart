import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'account',
    loadComponent: () => import('./pages/account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'more',
    loadComponent: () => import('./pages/more/more.page').then( m => m.MorePage)
  },
  
];
