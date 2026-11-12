export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  suite: string;
    geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;

}

export interface Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  company: Company;
  }
