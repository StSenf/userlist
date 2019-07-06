import { UserAddressPipe } from "./user-address.pipe";
import {IAddress} from '../interfaces';

describe("UserAddressPipe", () => {
  let userAddressPipe: UserAddressPipe;

  const address: IAddress = {
    street:   "Gießerstraße",
    suite:    "Wohnung 3A",
    city:     "Leipzig",
    zipcode:  "04229",
    geo:      {
                lat: "xxxxxx",
                lng: "yyyyyy",
    },
  };

  const readableAddress = "Gießerstraße Wohnung 3A, 04229 Leipzig";

  beforeEach(() => {
    userAddressPipe = new UserAddressPipe();
  });

  it("should create an instance", () => {
    expect(userAddressPipe).toBeTruthy();
  });

  it("should convert IAddress to readable string", () => {
    expect(userAddressPipe.transform(address)).toBe(readableAddress);
  });

  it("should return a string", () => {
    const typeOfExpectedAddress = typeof userAddressPipe.transform(address);
    expect(typeOfExpectedAddress).toBe("string");
  });
});
