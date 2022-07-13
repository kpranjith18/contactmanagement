import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private _snackBar: MatSnackBar) {}
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


  validateEmail(email: string) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email) && email.indexOf(" ") == -1;
  }


  validateMobileNumber(val: any) {
     var re = /^(\+\d{1,3}[- ]?)?\d{10}$/g;
    //var re = /^((00|\+)[0-9]{2,5}|0)[1-9][0-9]{7,9}$/i;
    if (re.test(val)) {
      return true;
    } else {
      return false;
    }
  }


}
