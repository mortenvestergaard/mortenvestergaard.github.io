import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FileserviceService } from './services/fileservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { DatagridComponent } from './datagrid/datagrid.component';

//PrimeNG
import {FileUploadModule} from 'primeng/fileupload';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    AccordionModule,
    DataViewModule,
    DialogModule,
    TableModule,
    BrowserAnimationsModule,
    ImageModule,
    FormsModule
  ],
  providers: [
    MessageService,
    FileserviceService
  ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
