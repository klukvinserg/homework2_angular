import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';


const routes: Routes = [
  {path: '', component: AboutCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
