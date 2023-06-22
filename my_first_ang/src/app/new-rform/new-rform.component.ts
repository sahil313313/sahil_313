import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-rform',
  templateUrl: './new-rform.component.html',
  styleUrls: ['./new-rform.component.css']
})
export class NewRformComponent {
  confoform! : FormGroup
  showmeForm : boolean = false;
  passvalue :any;
  confopassvalue:any;
  ismatch!:boolean;
  ismatchconfo!:boolean;
  showpass1:any
  confopass:any

  constructor(private fb:FormBuilder){}
    ngOnInit(){
    this.showmeForm = !this.showmeForm;
    this.sahil();
    console.log(',,...');
    

    
  }
  sahil(){
    this.confoform=this.fb.group({
      username : [''],
      confousername : [],
    })
  }





  password(){
    this.passvalue = this.confoform.value.username;
    if (this.passvalue==this.confopassvalue) {
      this.ismatch = true;
    }
    else{
      this.ismatch=false;
    }
  }
  conformpass(){
    this.confopassvalue=this.confoform.value.confousername;
    if (this.confopassvalue==this.passvalue) {
      
      this.ismatch=true;
    }
    else{
      this.ismatch= false
    }
  }
  submit(){
    console.log(this.confoform.value);
    
}
showpass(){
this.showpass1 =!this.showpass1
}
confopass1(){
this.confopass=!this.confopass
}
}