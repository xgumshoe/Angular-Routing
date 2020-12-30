import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Users } from './mock-users';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(): Observable<User[]> {
    return of(Users);
  }

  getUser(id: number): Observable<User> {
    return of(Users.find(user => user.id === id));
  }
}