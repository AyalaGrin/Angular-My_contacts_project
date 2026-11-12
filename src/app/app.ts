import { Component, signal ,computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCard } from './contact-card/contact-card';
import { Contact } from './models/contact.model';
import { CommonModule } from '@angular/common';
import { Contacts } from './services/contacts';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [ContactCard, RouterOutlet, CommonModule, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('contacts-project');
  isLoading = signal(false);
  errormessage = signal('');
  contacts = signal<Contact[]>([]);
  searchTerm = signal('');
  selectedContact = signal<Contact | null >(null);
  filteredContacts = computed(() => {
  const term = this.searchTerm().toLowerCase().trim();
  return this.contacts().filter(contact =>
    contact.name.toLowerCase().includes(term)
  );
  });


  constructor(private contactService: Contacts) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.isLoading.set(true);
    this.errormessage.set('');

    this.contactService.getContact().subscribe({
      next: (contacts) => {
        this.contacts.set(contacts);
        console.log('הנתונים שהגיעו:', this.contacts());
        this.isLoading.set(false);
      },
      error: () => {
        this.errormessage.set('Failed to load contacts.');
        this.isLoading.set(false);
        },
      });

  }

}





