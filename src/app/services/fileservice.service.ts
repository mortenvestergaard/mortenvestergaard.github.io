import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { File } from '../models/file';


@Injectable({
  providedIn: 'root'
})


export class FileserviceService {

  private fileSubject: BehaviorSubject<File> = new BehaviorSubject<any>({});
  selectedFile = this.fileSubject.asObservable();
  constructor() { }

  sendFile(file: File) {
    this.fileSubject.next(file);
  }

  getFile() {
    this.fileSubject.subscribe();
  }
}
