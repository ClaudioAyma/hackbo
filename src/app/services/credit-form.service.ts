import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { form } from '../models/form-credit';

@Injectable({
  providedIn: 'root'
})
export class CreditFormService {
  private itemsCollection: AngularFirestoreCollection<any>;  

  formdata: AngularFirestore;
  selectedProduct: form = new form();
  constructor(private readonly datas: AngularFirestore) { }


  registerForm() {
    this.datas.collection("items").add({
      name: "Asd",
      email: "email",
      description: "description"
    })
  }


}
