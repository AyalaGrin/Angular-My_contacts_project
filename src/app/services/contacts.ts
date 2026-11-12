import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable(
    { providedIn: 'root' }
)

export class Contacts {

    Apiurl = 'https://jsonplaceholder.typicode.com/users';
    
    constructor(private http: HttpClient) {
     }
    getContact() : Observable<Contact[]> {  
        return this.http.get<Contact[]>(this.Apiurl);
    }


}
