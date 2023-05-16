import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../pages/categories/categories.page').then((m) => m.CategoriesPage),
      },
      {
        path: 'favourite',
        loadComponent: () =>
          import('../pages/favourite/favourite.page').then((m) => m.FavouritePage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../pages/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../pages/cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('../pages/account/account.page').then((m) => m.AccountPage),
      },
      {
        path: 'more',
        loadComponent: () =>
          import('../pages/more/more.page').then((m) => m.MorePage),
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
