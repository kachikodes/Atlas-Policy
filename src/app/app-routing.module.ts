import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TermsnconditionComponent } from './termsncondition/termsncondition.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'landingpage',
    pathMatch: 'full' 
  },

  {
    path: 'landingpage',
    component: LandingpageComponent
  },

  {
    path: 'termsncondition',
    component: TermsnconditionComponent
  }, 

  {
  path: 'homepage',
  component: HomepageComponent
  }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
