import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CrudtComponent } from './crud.component';
import { LayoutComponent } from './Layout.component';
const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ContactComponent },
            { path: 'add', component: CrudtComponent },
            { path: 'edit/:id', component: CrudtComponent },
            { path: 'clone/:id', component: CrudtComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }