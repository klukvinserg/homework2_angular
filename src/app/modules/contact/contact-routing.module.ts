import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSiteComponent } from './contact-site/contact-site.component';


const routes: Routes = [
  {path: '', component: ContactSiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
