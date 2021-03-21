import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { TableComponent } from './table/grid-table.component';
import { InfoComponent } from './info/info.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnlyNumbersDirective } from './app.derictives';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoComponent,
    TableFilterComponent,
    OnlyNumbersDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
