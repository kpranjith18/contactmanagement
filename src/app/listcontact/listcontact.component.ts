import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit {

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
          id: 1, cname: 'Name', email: 'example@gmail.com', phone: '0000000000', comments: 'about', gender: '1', status: 'inactive'
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

  openDialog(id: any) {
    this.dialog.open(Viewcontact, {
      data: {
        id: id
      },
    });
  }
  delete(id: any) {
    const dialogRef = this.dialog.open(Deleteconfirm, {
      data: {
        id: id
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
@Component({
  selector: 'viewcontact',
  templateUrl: '../viewcontact.html', styleUrls: ['../viewcontact.scss']
})
export class Viewcontact {
  contactdetails: any;
  contactform: any;
  id: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Viewcontact,
  ) {
    this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
    for (let find of this.contactdetails) {
      if (find.id == data.id) {
        this.contactform = find;
        console.log(this.contactform);

      }
    }
  }
}
@Component({
  selector: 'deleteconfirmation',
  templateUrl: '../deleteconfirmation.html'
})
export class Deleteconfirm {
  contactdetails: any;
  contactform: any;
  id: any;
  value: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Viewcontact,
  ) {
    this.value = data.id
  }
  deletecontact() {
    let a = JSON.parse(localStorage.getItem("contactdata")!);
    for (let i = 0; i < a.length; i++) {
      if (a[i].id == this.value) {
        a.splice(i, 1);
      }
    }
    localStorage.setItem('contactdata', JSON.stringify(a));
  }
}



