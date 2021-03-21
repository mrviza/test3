import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DeliveryImportData, FilterData } from '../app';

@Component({
  selector: 'table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent implements OnInit {
  @Input() types?: DeliveryImportData;
  @Input() statuses?: DeliveryImportData;
  @Input() isFold: boolean = true;
  @Output() filterToggleEvent = new EventEmitter<boolean>();
  @Output() filterChangeEvent = new EventEmitter<FilterData>();

  filterForm = new FormGroup({
    number: new FormControl(''),
    type: new FormControl('Доставка'),
    status: new FormControl(''),
    problems: new FormControl(false),
  });
  initialValue: FilterData;

  constructor() {
    this.initialValue = this.filterForm.value;
  }

  ngOnInit() {
    this.emitFormData();
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.isFold) {
      this.onToggle();
      return;
    }

    this.emitFormData();
  }

  onClear() {
    if (this.isFold) {
      this.onToggle();
    }

    this.filterForm.reset(this.initialValue);
    this.emitFormData();
  }

  onToggle() {
    this.filterToggleEvent.emit();
  }

  emitFormData() {
    const filterData = this.filterForm.value as FilterData;
    this.filterChangeEvent.emit(filterData);
  }
}
