import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  Directive,
  Input,
  HostBinding } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { FileSystemFileEntry, FileSystemDirectoryEntry } from '../models';

@Component({
  selector: 'dw-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  host: { class: 'dw-file-upload' },
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent implements OnInit {

  @ViewChild('chosenFiles') chosenFiles;

  files: UploadFile[] = [];

  onDroppedFiles(event: UploadEvent) {
    console.log(event);

    for (const droppedFile of event.files) {
      this.files.push(droppedFile);
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  onChooseFiles(event: UploadEvent) {
    console.log(event.files);
    for (const uploadedFile of this.chosenFiles.nativeElement.files) {
      this.files.push(uploadedFile);
    }
  }

  removeFile(index) {
    if(confirm("Are you sure you want to remove this file")){
      this.files.splice(index, 1);
    }
  }

  fileOver(event) {
    console.log(event);
  }

  fileLeave(event){
    console.log(event);
  }

  chooseFile(event) {
    this.chosenFiles.nativeElement.click();
  }

  get hasFiles(): boolean {
    return this.files.length ? true : false;
  }

  constructor() {

  }

  ngOnInit() {

  }

}
