import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//rutas
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';


const ROUTES:Routes = [
  {path: 'template' , component: TemplateComponent},
  {path: 'reactive' , component: ReactiveComponent},
  { path: '**', redirectTo: 'reactive', pathMatch : 'full' },  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
