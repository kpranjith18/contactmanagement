import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss']
})
export class EditcontactComponent implements OnInit {
  id: any;
  contactform: any={};
  contactdetails: any={};
  constructor(private _Activatedroute:ActivatedRoute,private router:Router,private common:CommonService,) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];
    console.log(this.id);
    this.contactdetails = JSON.parse(localStorage.getItem("contactdata")!);
    for (let find of this.contactdetails) {
      if (find.id == this.id) {
        this.contactform = find;
        console.log(this.contactform);
      }
    }
  }
  onsubmit() {

    if (this.contactform.cname == null || this.contactform.cname == '') {
      this.common.presentToast('Enter name');
    } else if (this.contactform.phone == null || this.contactform.phone == '') {
      this.common.presentToast('Enter phone number');
    } else if (this.common.validateMobileNumber(this.contactform.phone) == false) {
      this.common.presentToast('Enter valid phone number');
    } else if (this.contactform.email == null || this.contactform.email == '') {
      this.common.presentToast('Enter  mail id');
    }else if (this.common.validateEmail(this.contactform.email) == false) {
      this.common.presentToast('Enter valid email Address');
    }else if (this.contactform.comments == null || this.contactform.comments == '') {
      this.common.presentToast('Enter comments ');
    }else if (this.contactform.gender == null || this.contactform.gender == '') {
      this.common.presentToast('Select gender');
    }
    else {
      let a = JSON.parse(localStorage.getItem("contactdata")!);
      for (let i = 0; i < a.length; i++) {
        if (a[i].id == this.contactform.id) {
          a[i] = this.contactform;
          this.contactform = [];
          break;
        }
      }
      localStorage.setItem("contactdata", JSON.stringify(a));
      this.router.navigate(['list']);
      this.common.presentToast('Edited successfully');
    }

  }
}
