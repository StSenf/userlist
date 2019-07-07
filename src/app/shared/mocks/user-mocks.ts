import {IUser} from "../interfaces";

export const USER_MOCKS: IUser[] = [
  {
    address:
      {
        city:     "Leipzig",
        geo:
          {
            lat: "xxxxxx",
            lng: "yyyyyy",
          },
        street:   "Gießerstraße",
        suite:    "Wohnung 3A",
        zipcode:  "04229",
      },
    company:
      {
        bs:          "BS",
        catchPhrase: "Jippy",
        name:        "Cool Inc.",
      },
    email:    "e@e.de",
    id:       1,
    name:     "Leane Miller",
    phone:    "000",
    username: "coolleane",
    website:  "www",
  },
  {
    address:
      {
        city:     "Leipzig",
        geo:
          {
            lat: "xxxxxx",
            lng: "yyyyyy",
          },
        street:   "Gießerstraße",
        suite:    "Wohnung 28A",
        zipcode:  "04229",
      },
    company:
      {
        bs:          "BS",
        catchPhrase: "Cool products",
        name:        "Brothers Company",
      },
    email:    "g@e.de",
    id:       2,
    name:     "Corey Tyler",
    phone:    "111",
    username: "jabba",
    website:  "www",
  },
];
