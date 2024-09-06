import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  categories: any[] = [];
  myFile?: File;
  selectedFiles: File[] = [];
  Form = new FormGroup({
    description: new FormControl(''),
    category:new FormControl('')
    
  })
 constructor(private apiService: ApiService,private http: HttpClient){}
 ngOnInit():void {
  this.apiService.get_Categories().subscribe(data => {
    this.categories = data;
    console.log(this.categories);
  
  }); 
}
onFileSelected(event: any) {
  this.selectedFiles = Array.from(event.target.files);
}

login() {
  if (this.selectedFiles.length > 0) {
    const uploadData = new FormData();

    // Append each selected file to the FormData
    this.selectedFiles.forEach((file, index) => {
      uploadData.append('images', file, file.name);
    });

    // Append the form fields to FormData
    const formValue = this.Form.value as { [key: string]: any };
    for (const key in formValue) {
      if (formValue.hasOwnProperty(key)) {
        uploadData.append(key, formValue[key]);
      }
    }

    // Send the FormData to the back-end API
    this.apiService.add_ticket(uploadData).subscribe(
      response => {
        console.log('Response:', response);
        this.Form.reset();
        this.selectedFiles = []; // Clear selected files
      },
      error => {
        console.error('Error:', error);
      }
    );
  } else {
    console.error('No files selected!');
  }
}
   reset(){
    this.Form.reset();
   } 
}
