import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pantalla2',
    loadChildren: () => import('./pantalla2/pantalla2.module').then( m => m.Pantalla2PageModule)
  },
  {
    path: 'pantalla3',
    loadChildren: () => import('./pantalla3/pantalla3.module').then( m => m.Pantalla3PageModule)
  },
  {
    path: 'pantalla4',
    loadChildren: () => import('./pantalla4/pantalla4.module').then( m => m.Pantalla4PageModule)
  },
  {
    path: 'pantalla5',
    loadChildren: () => import('./pantalla5/pantalla5.module').then( m => m.Pantalla5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
