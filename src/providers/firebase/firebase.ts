/**
 * @Author: eipex
 * @Date:   2017-09-04T15:00:44-05:00
 * @Last modified by:   eipex
 * @Last modified time: 2017-09-04T16:27:46-05:00
 */



import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {

  }

  send(data) {
    return this.afd.list('/comments/').push(data);
  }

}
