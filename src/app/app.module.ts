import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { TableComponent } from './table/grid-table.component';
import { InfoComponent } from './info/info.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoComponent,
    TableFilterComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
