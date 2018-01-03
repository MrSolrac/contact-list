import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ContactInfoService } from '../contact-info.service';
import { ContactInfo } from '../contact-info';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'cl-edit-contact-info',
  templateUrl: './edit-contact-info.component.html',
  styleUrls: ['./edit-contact-info.component.css']
})
export class EditContactInfoComponent implements OnInit {

  contact$:ContactInfo;

  constructor(private route: ActivatedRoute, private router:Router, private contactService: ContactInfoService) { }

  ngOnInit() {
 
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.contactService.getContact(+params.get('id'));
      }).subscribe(
        contact => { this.contact$ = contact}
      )
  }

  updateContact(): void {
    //this.contactService.
    this.contactService.updateContact(this.contact$).subscribe(
      _=>{
        console.log("contact updated");
      },
      error=>{},
      ()=>{ 
        this.cancel();
      }
    );
  }

  cancel():void {
    this.contact$ = undefined ;
    this.router.navigate(['/contact-list']);
  }
}
