import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'bankslocation',
    loadChildren: () => import('./pages/bankslocation/bankslocation.module').then( m => m.BankslocationPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'addnewnote',
    loadChildren: () => import('./pages/addnewnote/addnewnote.module').then( m => m.AddnewnotePageModule)
  },
  {
    path: 'viewnote',
    loadChildren: () => import('./pages/viewnote/viewnote.module').then( m => m.ViewnotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
