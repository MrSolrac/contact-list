import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ContactInfoService } from '../contact-info.service';
import { ContactInfo } from '../contact-info';
import { ContactSearchType } from '../search-contact-info/contact-search-type.enum';

@Component({
  selector: 'cl-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contacts: ContactInfo[] = [];
  showDetails:boolean = false;
  showDetailsBtnText: string = "Show Details";

  constructor(private router:Router, private contactService:ContactInfoService) { }

  ngOnInit() {

  }

  onSearchResult(contacts:ContactInfo[]) {
    this.contacts = contacts;
  }

  showDetailsToggle() : void {
    this.showDetails = !this.showDetails;
    this.showDetailsBtnText = this.showDetails ? "Hide Details" : "Show Details";
  }

  onNewContactAdded(contactInfo:ContactInfo) : void {
    console.log(`onNewContactAdded(${contactInfo})`);
    this.contacts.push(contactInfo);
  }

  deleteContact(contactInfo:ContactInfo): void {
    this.contactService.deleteContact(contactInfo).subscribe(
      (contact) => {
        this.contacts = this.contacts.filter(ci => ci != contactInfo);
      }
    );
  }

  editContact(id:number): void {
    this.router.navigate([`/contact-edit/${id}`]);
  }
}
