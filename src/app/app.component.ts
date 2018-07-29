import { Component, OnInit } from '@angular/core';
import {CreditFormService} from './services/credit-form.service'

import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs';

import { CreditFilesService } from './services/credit-files.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: Observable<any[]>
  title = 'app';
  fileCreditFile: any


  constructor(db: AngularFirestore, private formm: CreditFormService, private serviceCreditFile: CreditFilesService) {
    this.items = db.collection('items').valueChanges()
  }

  ngOnInit(){
    this.formm.registerForm()
  }


  captureValue(event) {
    this.fileCreditFile = event.target.files[0]
    console.log(this.fileCreditFile)
  }

  upload() {
    
    this.serviceCreditFile.uploadCreditFile(this.fileCreditFile, 'demo')
    /* console.log("funciona", this.fileCreditFile, ) */
  }

}
