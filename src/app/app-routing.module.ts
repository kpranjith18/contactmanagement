import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
const contactModule = () => import('./contact/contact.module').then(x => x.ContactModule);
const routes: Routes = [

  {
    path: 'details/:id',
    component: ContactDetailComponent,
  },

  { path: 'contact', loadChildren: contactModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
