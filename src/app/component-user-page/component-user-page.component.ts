import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'userpage',
  templateUrl: './component-user-page.component.html',
  styleUrls: ['./component-user-page.component.scss'],
})
export class ComponentUserPageComponent {
  @Input() quandityValueFromTheUser: any;
  @Input() rowIdValue: any;
  @Input() givenName: any;
  @Input() inputDatasForUser: any;
  @Output() sendTheIdToParent = new EventEmitter();

  disableDeleteButton(quandity: any) {
    if (quandity <= 0) {
      return true;
    } else {
      return;
    }
  }

  buyProducts(dataId: any) {
    console.log(dataId);
    this.sendTheIdToParent.emit(dataId);
  }
}
