import {IUser} from '../interfaces';

export const USER_MOCKS: IUser[] = [
  {
    id:       1,
    name:     "Leane Miller",
    username: "coolleane",
    email:    "e@e.de",
    address:
      {
        street:   "Gießerstraße",
        suite:    "Wohnung 3A",
        city:     "Leipzig",
        zipcode:  "04229",
        geo:
          {
            lat: "xxxxxx",
            lng: "yyyyyy",
          },
      },
    phone:    "000",
    website:  "www",
    company:
      {
        name:        "Cool Inc.",
        catchPhrase: "Jippy",
        bs:          "BS",
      },
  },
  {
    id:       2,
    name:     "Corey Tyler",
    username: "jabba",
    email:    "g@e.de",
    address:
      {
        street:   "Gießerstraße",
        suite:    "Wohnung 28A",
        city:     "Leipzig",
        zipcode:  "04229",
        geo:
          {
            lat: "xxxxxx",
            lng: "yyyyyy",
          },
      },
    phone:    "111",
    website:  "www",
    company:
      {
        name:        "Brothers Company",
        catchPhrase: "Cool products",
        bs:          "BS",
      },
  },
];
