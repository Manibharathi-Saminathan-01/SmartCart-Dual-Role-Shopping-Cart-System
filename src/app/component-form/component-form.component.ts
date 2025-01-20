import { Component } from '@angular/core';

@Component({
  selector: 'form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.scss'],
})
export class ComponentFormComponent {
  individualValue = '';
  inuptDatasForAdmin: any = [];
  inputDatasForUser: any = [];
  currentInput: any = false;
  quandityValueFromTheUser = 0;
  index = -1;
  givenName: any;
  rowIdValue: any;
  buttonClickedName: any;

  pid: any = '';
  pname: any = '';
  pdes: any = '';
  pquandity: any = '';
  productPrice: any = '';
  productAvailablit: any = false;

  changeTheBooleanValue(e: any) {
    if (e.target.checked) {
      this.productAvailablit = true;
      this.currentInput = true;
    } else {
      this.productAvailablit = false;
      this.currentInput = false;
    }
  }

  printList() {
    console.log(this.currentInput);
    this.inuptDatasForAdmin.push({
      productid: this.pid,
      productname: this.pname,
      productdescription: this.pdes,
      productquandity: this.pquandity,
      productPrice: this.productPrice,
      productavailabity: this.productAvailablit,
    });
    if (this.productAvailablit == true) {
      this.inputDatasForUser.push({
        productid: this.pid,
        productname: this.pname,
        productdescription: this.pdes,
        productquandity: this.pquandity,
        productPrice: this.productPrice,
        productavailabity: this.productAvailablit,
      });
    }
  }
  sendTheIdToParent(event: any) {
    for (let itm of this.inuptDatasForAdmin) {
      if (event == itm.productid) {
        itm.productquandity--;
      }
    }
    // delete the object
    for (let element of this.inputDatasForUser) {
      if (this.inputDatasForUser.lenght !== 0) {
        this.inputDatasForUser.pop();
      }
    }
    for (let item of this.inuptDatasForAdmin) {
      if (item.productavailabity == true) {
        this.inputDatasForUser.push(item);
      }
    }
  }
  afterDelete(event: any) {
    if (event.avail) {
      this.inputDatasForUser = this.inputDatasForUser.filter((el: any) => {
        return el.productid != event.productId;
      });
    }
    this.inuptDatasForAdmin = this.inuptDatasForAdmin.filter(
      (el: any) => el.productid !== event.productId
    );
  }
  changeRowColor() {
    for (let prouduct of this.inuptDatasForAdmin) {
      if (this.givenName == prouduct.productname) {
        this.rowIdValue = prouduct.productid;
      }
    }
    this.buttonClickedName = this.givenName;
  }
  sendTheStatus(e: Event) {
    this.givenName = e;
  }
}
