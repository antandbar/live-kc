import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tareas', loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) },
  { path: 'contactos', loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule) },
  { path: 'libros', loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
