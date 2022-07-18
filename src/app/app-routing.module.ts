import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const contactModule = () => import('./contact/contact.module').then(x => x.ContactModule);
const routes: Routes = [


  { path: 'contact', loadChildren: contactModule },
  { path: '', loadChildren: contactModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
