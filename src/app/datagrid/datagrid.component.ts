import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { File } from '../models/file';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {DialogModule} from 'primeng/dialog';
import {ImageModule} from 'primeng/image';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { FileserviceService } from '../services/fileservice.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  chooseNameDialog: boolean = false;
  displayFileDialog: boolean = false;

  currentFile: any;
  tempFile: File = new File;
  newFiles: File[] = [];
  fileForm: any;
  public fileObs: Observable<File[]> = of(this.newFiles);


  constructor(public sanitizer: DomSanitizer, private fileService: FileserviceService) {
    this.fileService.selectedFile.subscribe(data => {
      this.newFiles.push(data);
    })
  }

  ngOnInit(): void {
  }

  //Maps the chosen image to the File class, done so the name can be changed
  beforeUploadDialog(event:any, form: any) {

    this.chooseNameDialog = true;
    this.tempFile = {
      name:event.files[0].name,
      size:event.files[0].size,
      type:event.files[0].type,
      url:event.files[0].objectURL?.changingThisBreaksApplicationSecurity
    }
    console.log(this.tempFile);
    this.fileForm = form;
  }


  uploadFile() {
    this.fileService.sendFile(this.tempFile)
    this.chooseNameDialog = false;
    this.fileForm.clear();
  }

  //Sanitizes the image URL for displaying
  getSafeUrl(url:string):SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  //Shows a dialog when you click a row in the table
  showFileDialog(file: File) {
    this.currentFile = file;
    this.displayFileDialog = true;
  }
}
