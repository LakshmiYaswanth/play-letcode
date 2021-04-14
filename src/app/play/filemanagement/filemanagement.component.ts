import { Component, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filemanagement',
  templateUrl: './filemanagement.component.html',
  styleUrls: ['./filemanagement.component.css']
})
export class FilemanagementComponent implements OnInit {

  constructor() { }
  upload = faUpload;
  ngOnInit(): void {
  }

}
