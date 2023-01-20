import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserInterface {
    name: string;
    username: string;
    email: string;
    address: string;
    phone: number;
    company: string;
}

@Injectable({
    providedIn: 'root'
})

export class AppService {
  constructor(private httpClient: HttpClient) { }
  
  getUserDetails(){
    return this.httpClient.get<UserInterface>('https://jsonplaceholder.typicode.com/users')
  }
}