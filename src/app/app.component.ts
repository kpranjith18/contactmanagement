import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) {}
  
contactdetails:any={};
  contactstatus:boolean=true;
  editcontact:boolean=false;
  addcontact:boolean=false;
contactform:any={
  cname:null,
phone:null,
email:null,
comments:null
};
ngOnInit(){

  this.showcontact();
}
  showcontact(){
    this.contactdetails= JSON. parse(localStorage. getItem("contactdata")!); 
    console.log(this.contactdetails);
    this.contactstatus=true;
    this.editcontact=false;
    this.addcontact=false;
 
  }
addcontacts(){
  this.contactstatus=false;
  this.editcontact=false;
  this.addcontact=true;
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
onsubmit(){
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
else{
  let a=JSON. parse(localStorage. getItem("contactdata")!);
  a.unshift(this.contactform);
   localStorage. setItem("contactdata", JSON. stringify(a));
 this.showcontact();
}
}
 presentToast(msg: string, duration:number=3000) {

    let toast =msg ;

    if(toast !=''){
      this._snackBar.open(toast, "x", {
        duration,
        horizontalPosition: 'right',
        verticalPosition: 'top'

      });
    }
  }
}