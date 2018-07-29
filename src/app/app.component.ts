import { Component, OnInit } from '@angular/core';
import {CreditFormService} from './services/credit-form.service'

import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Observable<any[]>
  title = 'app';

  constructor(db: AngularFirestore, private formm: CreditFormService) {
    this.items = db.collection('items').valueChanges()
  }

  ngOnInit(){
    this.formm.registerForm()
  }

}
