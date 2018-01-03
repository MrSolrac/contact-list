import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';
import { ContactInfo } from '../contact-info';


@Component({
  selector: 'cl-add-contact-info',
  templateUrl: './add-contact-info.component.html',
  styleUrls: ['./add-contact-info.component.css']
})
export class AddContactInfoComponent implements OnInit {

  firstName:string;
  lastName:string;
  age:number;

  @Output() newContactAdded: EventEmitter<ContactInfo> = new EventEmitter<ContactInfo>();

  constructor(private contactService:ContactInfoService) { 
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
  }

  ngOnInit() {
  }
  addNewContact(): void {
    let ci:ContactInfo = { 
      firstName: this.firstName, 
      lastName: this.lastName, 
      age: this.age
    } as ContactInfo;
    this.contactService.addContact(ci).subscribe(
      (data) => {
        //tbd
        this.newContactAdded.emit(data);
      },
      (err) => {
        console.log("unable to add new contact");
      },
    )
  }
}
