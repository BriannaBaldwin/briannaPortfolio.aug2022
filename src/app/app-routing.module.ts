import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [];
// https://angular.io/guide/route-animations
// https://tamalsen.dev/

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
