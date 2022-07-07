import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit {
  contactform: any={};

  constructor(private common:CommonService,private router: Router) { }

  ngOnInit(): void {
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
      this.contactform.id = a.length + 1;
      this.contactform.status = "active";
      a.unshift(this.contactform);
      localStorage.setItem("contactdata", JSON.stringify(a));
      this.router.navigate(['list']);
      this.common.presentToast('New contact added successfully');
    }

  }
}
