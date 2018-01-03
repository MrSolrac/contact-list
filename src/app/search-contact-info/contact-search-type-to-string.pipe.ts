import { Pipe, PipeTransform } from '@angular/core';
import { ContactSearchType} from './contact-search-type.enum';
import { ContactInfo } from '../contact-info';

@Pipe({
  name: 'contactSearchTypeToString'
})
export class ContactSearchTypeToStringPipe implements PipeTransform {

  transform(value: ContactSearchType): string {
    switch(value) {
      case (ContactSearchType.Age): return 'Age';
      case (ContactSearchType.FirstName): return 'First Name';
      case (ContactSearchType.LastName): return 'Last Name';
      default: return 'unknown!';
    }
  }
}
