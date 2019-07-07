import {IAddress} from "../interfaces";
import { UserAddressPipe } from "./user-address.pipe";

describe("UserAddressPipe", () => {
  let userAddressPipe: UserAddressPipe;

  const address: IAddress = {
    city:     "Leipzig",
    geo:      {
      lat: "xxxxxx",
      lng: "yyyyyy",
    },
    street:   "Gießerstraße",
    suite:    "Wohnung 3A",
    zipcode:  "04229",
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
