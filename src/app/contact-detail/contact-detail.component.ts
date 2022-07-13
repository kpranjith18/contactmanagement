import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

 import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contactdetails: any;
  contactform: any;
  id: any;

  constructor( public dialog: MatDialog,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];
    this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
        for (let find of this.contactdetails) {
          if (find.id == this.id) {
            this.contactform = find;
            console.log(this.contactform);
          }
        }
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
  selector: 'deleteconfirmation',
  templateUrl: '../deleteconfirmation.html'
})
export class Deleteconfirm {
  contactdetails: any;
  contactform: any;
  id: any;
  value: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Deleteconfirm,private router: Router,
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
    this.router.navigate(['contact']);
  }
}




