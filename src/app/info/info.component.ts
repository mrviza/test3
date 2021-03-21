import { Component, Input } from '@angular/core';
import { DeliveryInfo } from './info.component.d';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() info?: DeliveryInfo;
  @Input() isFold?: boolean;
}
