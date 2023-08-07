import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TermsnconditionComponent } from './termsncondition/termsncondition.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'homepage',
    pathMatch: 'full' 
  },

  {
    path: 'termsncondition',
    component: TermsnconditionComponent
  }, 

  {
  path: 'homepage',
  component: HomepageComponent,
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
