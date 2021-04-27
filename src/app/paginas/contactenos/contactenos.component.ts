import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  myform:FormGroup  //////
 
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      nombres: ['', [Validators.required, Validators.minLength(10)]]  ,
      apellidos: ['', [Validators.required, Validators.minLength(10)]]  ,
      mail: ['', [Validators.required, Validators.email]]  ,
      telefono: ['', [Validators.required, Validators.minLength(10)]]  ,
      mensaje: ['', [Validators.required, Validators.maxLength(500)]] 
    })
  }


  submit(){
    alert(this.myform.value.nombres)
  }


  ngOnInit(): void {
  }
  
}