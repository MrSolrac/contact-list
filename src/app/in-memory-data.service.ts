import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ContactInfo } from './contact-info';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): any {

    const contacts:ContactInfo[] = [
      { id: 11, firstName:'Clark', lastName: 'Kent', age: 35, parents:['Jonathan', 'Martha'] },
      { id: 12, firstName:'Diana', lastName: 'Prince', age: 24, siblings:['Jason'], parents:['Hippolyta', 'Zeus'] },
      { id: 13, firstName:'James', lastName: 'Howlett', age: 35, parents:['John', 'Elizabeth'] },
      { id: 14, firstName:'Bruce', lastName: 'Banner', age: 38, parents:['Brian', 'Rebecca'] }
    ];
    return {contacts};
  }
}
