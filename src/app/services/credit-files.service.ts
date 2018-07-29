import { Injectable } from '@angular/core';

import { AngularFireStorage } from 'angularfire2/storage'

@Injectable({
  providedIn: 'root'
})
export class CreditFilesService {

  constructor(private storage: AngularFireStorage) { }


  uploadCreditFile(file, name) {
    /* debugger   */
    let path = 'gs://hackbo2018.appspot.com'
    this.storage.upload(name, file)
  }



}
