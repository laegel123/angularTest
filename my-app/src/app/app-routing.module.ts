import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stopwatch',
    pathMatch: 'full'
  },
  {
    path: 'stopwatch',
    redirectTo: 'stopwatch',
    pathMatch: 'full'
  },
  {
    path: 'clock',
    redirectTo: 'clock',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
