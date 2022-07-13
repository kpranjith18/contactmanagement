import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { CommonService } from '../common';

@Component({
  selector: 'app-newcontact',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudtComponent implements OnInit {
  contactform: any = {};
  operation: String;
  contactdetails: any;
  id: any;
  size: any;
  constructor(private common: CommonService, private router: Router, private _Activatedroute: ActivatedRoute,) {
    const segments: UrlSegment[] = this._Activatedroute.snapshot.url;
    this.operation = segments[0].path
  }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
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
    let a = JSON.parse(localStorage.getItem("contactdata")!);
    if (this.contactform.cname == null || this.contactform.cname == '') {
      this.common.presentToast('Enter name');
    } else if (this.contactform.phone == null || this.contactform.phone == '') {
      this.common.presentToast('Enter phone number');
    } else if (this.common.validateMobileNumber(this.contactform.phone) == false) {
      this.common.presentToast('Enter valid phone number');
    } else if (this.contactform.email == null || this.contactform.email == '') {
      this.common.presentToast('Enter  mail id');
    } else if (this.common.validateEmail(this.contactform.email) == false) {
      this.common.presentToast('Enter valid email Address');
    } else if (this.contactform.comments == null || this.contactform.comments == '') {
      this.common.presentToast('Enter comments ');
    } else if (this.contactform.gender == null || this.contactform.gender == '') {
      this.common.presentToast('Select gender');
    }
    else if (this.operation == 'edit') {
      for (let i = 0; i < a.length; i++) {
        if (a[i].id == this.contactform.id) {
          a[i] = this.contactform;
          this.contactform = [];
          break;
        }
      }
      localStorage.setItem("contactdata", JSON.stringify(a));
      this.router.navigate(['details', this.id]);
      this.common.presentToast('Cotact Edited Successfully');
    }
    else if (this.operation == 'clone') {
      this.contactform.id = a[0].id + 1;
      a.unshift(this.contactform);
      localStorage.setItem("contactdata", JSON.stringify(a));
      this.router.navigate(['contact']);
      this.common.presentToast('Contact Cloned Successfully');
    }
    else {
      this.contactform.id = a[0].id + 1;
      a.unshift(this.contactform);
      localStorage.setItem("contactdata", JSON.stringify(a));
      this.router.navigate(['contact']);
      this.common.presentToast('Contact Added Successfully');
    }

  }
}
