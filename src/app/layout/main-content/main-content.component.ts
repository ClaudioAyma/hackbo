import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  creditForm: FormGroup

  constructor(private formBuilder: FormBuilder) { 

    this.creditForm = formBuilder.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      ci: ["", Validators.required],
      entry: ["", Validators.required],
      address: ["", Validators.required],
      mount: ["", Validators.required],
      comment: ["", Validators.required],
      rubro: ["", Validators.required]
    })

  }

  saveInformation(e) {
    console.log("infromacion cliente", e)
  }

  ngOnInit() {
    /* this.creditForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required),
      entry: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mount: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      rubro: new FormControl('', Validators.required)
    }) */
  }

}