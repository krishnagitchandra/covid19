import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelplineComponent } from './helpline/helpline.component';
import { HomeComponent } from './home/home.component';
import { PrecautionsComponent } from './precautions/precautions.component';

const routes: Routes = [
  {path :'home',component :HomeComponent},
  {path :'precautions', component :PrecautionsComponent},
  {path : 'helpline',component :HelplineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
