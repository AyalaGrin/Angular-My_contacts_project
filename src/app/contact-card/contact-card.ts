import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Contact } from '../models/contact.model';
import { EventEmitter } from '@angular/core';
@Component({
  imports: [CommonModule],
  selector: 'app-contact-card',
  styleUrl: './contact-card.css',
  templateUrl: './contact-card.html',
})

export class ContactCard {
@Input() contact!: Contact;
@Output() selectContact = new EventEmitter<Contact>();
}
