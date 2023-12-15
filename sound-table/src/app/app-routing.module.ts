import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SoundsComponent} from "./sounds/sounds.component";

const routes: Routes = [
  {
    path: '',
    component: SoundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
