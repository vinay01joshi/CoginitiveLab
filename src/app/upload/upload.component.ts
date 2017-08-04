import { Component } from '@angular/core';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  filesToUpload: Array<File>;
  url = "http://localhost:63615/api/upload";
  imageSrc:string;
  constructor() {
    this.filesToUpload = [];
   }

   upload(){
      this.makeFileRequet(this.url,[],this.filesToUpload)
        .then(result => {
          console.log(result);
        })
        .catch(err =>{
          console.log(err);
        });
   }

   fileChange(fileInput : any){
     this.filesToUpload = <Array<File>> fileInput.target.files;
     let file = this.filesToUpload[0];
     let reader = new FileReader();

     reader.addEventListener("load",()=>{
        this.imageSrc = reader.result;
     },false);

     if(file){
       reader.readAsDataURL(file);
     }
   }

   makeFileRequet(url:string,params:Array<string>,files:Array<File>){
     return new Promise((resolve,reject)=>{
       var formData:any = new FormData();
       var xhr = new XMLHttpRequest();
       for(var i=0; i<files.length;i++){
          formData.append("uploads[]",files[i],files[i].name);
       }

       xhr.onreadystatechange = () =>{
         if(xhr.readyState === 4){
            if(xhr.status === 200){
              resolve(JSON.parse(xhr.response));
            }else{
              reject(xhr.response);
            }
         }
       }
        xhr.open("POST",url,true);
        xhr.send(formData);
     });
   }

}
