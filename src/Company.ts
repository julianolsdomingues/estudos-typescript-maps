import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
  name: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return `
      <div> 
        <h1>Company Name: ${this.name}</h1>
        <h3>Catchprase: ${this.catchPrase}</h3>
      </div>
    `;
  }
}
