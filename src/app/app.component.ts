import { Component, Inject } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  contactdetails: any = {};
  contactstatus: boolean = true;
  editcontact: boolean = false;
  addcontact: boolean = false;
  contactform: any = {};
  ngOnInit() {
    this.load();
    this.showcontact();
  }
  load() {
    if (localStorage.getItem('contactdata') === null || localStorage.getItem('contactdata') == undefined) {
      console.log('No contact Found... Creating...');
      let con = [
        {
          id: 1,
          cname: 'Sathrak',
          email: 'rocky29@gmail.com',
          phone: '8940571589',
          comments: 'Friends ',
          gender: '1',
          status: 'active'
        }

      ];

      localStorage.setItem('contactdata', JSON.stringify(con));
      return
    } else {
      console.log('Found employees...');
    }
  }
  edituser(id: any) {
    this.contactstatus = false;
    this.editcontact = true;
    this.addcontact = false;
    this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
    for (let find of this.contactdetails) {
      if (find.id == id) {
        this.contactform = find;
        console.log(this.contactform);
        
      }
    }
  }
  //clone user contact
  clonecontact(id: any) {
    this.contactstatus = false;
    this.editcontact = false;
    this.addcontact = false;
    this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
    for (let find of this.contactdetails) {
      if (find.id == id) {
        this.contactform = find;
        console.log(this.contactform);
this.contactform.id=0;
      }
    }
  }
  showcontact() {
    this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
    console.log(this.contactdetails);
    this.contactstatus = true;
    this.editcontact = false;
    this.addcontact = false;
  }
  addcontacts() {
    this.contactstatus = false;
    this.editcontact = false;
    this.addcontact = true;
    this.contactform = [];
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
  onsubmit(condition: any) {
    if (this.contactform.cname == null || this.contactform.cname == '') {
      this.presentToast('Enter name');
    }
    else if (this.contactform.email == null || this.contactform.email == '') {
      this.presentToast('Enter  mail id');
    }
    else if (this.validateEmail(this.contactform.email) == false) {
      this.presentToast('Enter valid email Address');
    }
    else if (this.contactform.phone == null || this.contactform.phone == '') {
      this.presentToast('Enter phone number');
    } else if (this.validateMobileNumber(this.contactform.phone) == false) {
      this.presentToast('Enter valid phone number');
    } else if (this.contactform.comments == null || this.contactform.comments == '') {
      this.presentToast('Enter comments ');
    }
    else if (this.contactform.gender == null || this.contactform.gender == '') {
      this.presentToast('Select gender');
    }
    else if (condition != 0) {
      console.log(this.contactform, "Ranjith");

      let a = JSON.parse(localStorage.getItem("contactdata")!);
      for (let i = 0; i < a.length; i++) {
        if (a[i].id == this.contactform.id) {
          a[i] = this.contactform;
          this.contactform = [];
          break;
        }
      }
      localStorage.setItem("contactdata", JSON.stringify(a));
    }
    else {
      let a = JSON.parse(localStorage.getItem("contactdata")!);
      this.contactform.id = a.length + 1;
      this.contactform.status = "active";
      console.log(this.contactform);
      a.push(this.contactform);
      localStorage.setItem("contactdata", JSON.stringify(a));
      this.contactform = [];
      this.showcontact();
    }
    this.showcontact();
  }
 
  //Additional User
  presentToast(msg: string, duration: number = 3000) {
    let toast = msg;
    if (toast != '') {
      this._snackBar.open(toast, "x", {
        duration,
        horizontalPosition: 'right',
        verticalPosition: 'top'

      });
    }
  }
  validateEmail(email: string) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email) && email.indexOf(" ") == -1;
  }
  validateMobileNumber(val: any) {
    var re = /^(\+\d{1,3}[- ]?)?\d{10}$/g;
    if (re.test(val)) {
      return true;
    } else {
      return false;
    }
  }
}
@Component({
  selector: 'viewcontact',
  templateUrl: './viewcontact.html', styleUrls: ['./viewcontact.scss']
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
  templateUrl: './deleteconfirmation.html'
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
      console.log("zohozzzzz");
      if (a[i].id == this.value) {
        a.splice(i, 1);
        console.log("zoho");

      }
    }
    localStorage.setItem('contactdata', JSON.stringify(a));
  }
}


