import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClonecontactComponent } from './clonecontact/clonecontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: EditcontactComponent,
  },
  {
    path: 'new',
    component: NewcontactComponent,
  },
  {
    path: 'clone/:id',
    component: ClonecontactComponent,
  },
  {
    path: 'list',
    component: ListcontactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
