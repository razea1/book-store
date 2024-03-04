import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openWhatsApp(): void {
    if (this.isReasonableTime()) {
      window.open('https://wa.me/+972509603191');
    } else {
      alert("Are you high? Call at reasonable hours.");
    }
  }

  isReasonableTime(): boolean {
    const now = new Date();
    const hour = now.getHours();
    return !(hour >= 21 || hour < 12);
  }
}

