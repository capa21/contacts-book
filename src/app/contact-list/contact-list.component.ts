import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from '../contac.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.contacts.push(new Contact(1, "Josefina"));
    this.contacts.push(new Contact(2, "Julio César",undefined, [{type: PhoneType.home, number: 123454}]))
  }

}
