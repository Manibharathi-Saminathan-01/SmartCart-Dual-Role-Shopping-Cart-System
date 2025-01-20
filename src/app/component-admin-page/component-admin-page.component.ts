import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'adminpage',
  templateUrl: './component-admin-page.component.html',
  styleUrls: ['./component-admin-page.component.scss'],
})
export class ComponentAdminPageComponent {
  @Input() inuptDatasForAdmin: any;
  @Input() quandityValueFromTheUser: any;
  @Input() rowIdValue: any;
  @Input() givenName: any;
  color = 'red';
  title: any;
  @Output() afterDelete = new EventEmitter();
  index = -1;
  @ViewChild('refs') elem: any;

  deleteProduct(productId: any, avail: boolean) {
    console.log(this.elem);
    console.log(this.rowIdValue, this.inuptDatasForAdmin, this.givenName);
    this.afterDelete.emit({ productId: productId, avail: avail });
  }
  sendDescriptionToTheParent(e: Event) {
    console.log(e);
    this.title = e;
  }
}
