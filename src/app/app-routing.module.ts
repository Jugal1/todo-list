import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Session1Component } from './session1/session1.component';
import { Session11Component } from './session11/session11.component';
import { Session2Component } from './session2/session2.component';
import { Session3Component } from './session3/session3.component';
import { Session5Component } from './session5/session5.component';
import { Session6Component } from './session6/session6.component';
import { Session7Component } from './session7/session7.component';
import { Session9Component } from './session9/session9.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'session1', component:Session1Component},
  {path: 'session2', component:Session2Component},
  {path: 'session3', component:Session3Component},
  {path: 'session5', component:Session5Component},
  {path: 'session6', component:Session6Component},
  {path: 'session7', component:Session7Component},
  {path: 'session9', component:Session9Component},
  {path: 'session11', component:Session11Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
