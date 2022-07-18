import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ContactComponent,Deleteconfirm } from './contact.component';
import { CrudtComponent } from './crud.component';
import { ContactRoutingModule } from './contact-routing.module';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Layout.component';
@NgModule({
  declarations: [
 ContactComponent,CrudtComponent,LayoutComponent,Deleteconfirm
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,MatRadioModule,MatButtonToggleModule
  ],
  providers: [],
})
export class ContactModule { }
