import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  contactdetails: any = {};
  contactstatus: boolean = true;
  editcontact: boolean = false;
  addcontact: boolean = false;
  contactform: any = {};
  addcontactform: any = {};
  clonecontactform:any={};
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  ngOnInit() {
    this.load();
  }
  load() {
    if (localStorage.getItem('contactdata') === null || localStorage.getItem('contactdata') == undefined) {
      console.log('No contact Found... Creating...');
      let con = [
        {
          id: 1,
           cname: 'Name', 
           email: 'example@gmail.com', 
           phone: '0000000000', comments: 'about', gender: '1', status: 'inactive'
        },{
          
        }
      ];
      localStorage.setItem('contactdata', JSON.stringify(con));
      this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
      return
    }
    else{
      this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
    }
  }

}