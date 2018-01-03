import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactSearchType } from './contact-search-type.enum'
import { ContactInfoService } from '../contact-info.service';
import { ContactInfo } from '../contact-info';

@Component({
  selector: 'cl-search-contact-info',
  templateUrl: './search-contact-info.component.html',
  styleUrls: ['./search-contact-info.component.css']
})
export class SearchContactInfoComponent implements OnInit {
  
  @Output() searchResults:EventEmitter<ContactInfo[]> = new EventEmitter<ContactInfo[]>();

  searchType:number = 0;
  searchTypes:number[] = [];
  searchTerm:string = '';
  
  constructor(private contactService:ContactInfoService) { }

  ngOnInit() {
    for (let st in ContactSearchType) {
       if (!isNaN(Number(st))) {
          this.searchTypes.push(Number(st));
       }
    }
    this.contactService.getContacts().subscribe(
      data => {
        this.searchResults.emit(data);
      }
    );     
  }

  searchContacts():void {
    console.log(`searchContacts - ${this.searchTerm}`);
    console.log(`ContactSearchType - ${ContactSearchType[this.searchType]}`);

    switch(this.searchType) {
      case (ContactSearchType.FirstName):
        this.searchByFirst(this.searchTerm);
        break;
      case (ContactSearchType.LastName):
        this.searchByLast(this.searchTerm);
        break;
      case (ContactSearchType.Age): {
        const num = +this.searchTerm;
        if (isNaN(num)) {
          console.log(`error search by age, search term "${this.searchTerm}" is not a number`);
        }
        else {
          this.searchByAge(num);          
        }
        break;         
      }      
    }
  }

  onSearchTypeChange(filter:number):void {
    this.searchType = filter;
  }

  private searchByFirst(term:string):void {
    this.contactService.searchFirstName(term).subscribe(
      (data) => { 
        this.searchResults.emit(data); 
      },
      (error) => {
        console.log(`no contacts found - searchByFirst(${term})`);
      }
    );
  }

  private searchByLast(term:string):void {
    this.contactService.searchLastName(term).subscribe(
      (data) => { 
        this.searchResults.emit(data); 
      },
      (error) =>{
        console.log(`no contacts found - searchByFirst(${term})`);
      }
    );
  }

  private searchByAge(term:number):void {
    this.contactService.searchAge(term).subscribe(
      (data)=>{ 
        this.searchResults.emit(data); 
      },
      (error)=>{
        console.log(`no contacts found - searchByFirst(${term})`);
      }
    );
  }
}
