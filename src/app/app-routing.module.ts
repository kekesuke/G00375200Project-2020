import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'eurotopound',
    loadChildren: () => import('./eurotopound/eurotopound.module').then( m => m.EurotopoundPageModule)
  },
  {
    path: 'poundtoeuro',
    loadChildren: () => import('./poundtoeuro/poundtoeuro.module').then( m => m.PoundtoeuroPageModule)
  },
  {
    path: 'eurotousd',
    loadChildren: () => import('./eurotousd/eurotousd.module').then( m => m.EurotousdPageModule)
  },
  {
    path: 'usdtoeuro',
    loadChildren: () => import('./usdtoeuro/usdtoeuro.module').then( m => m.UsdtoeuroPageModule)
  },
  {
    path: 'morecurrency',
    loadChildren: () => import('./morecurrency/morecurrency.module').then( m => m.MorecurrencyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
