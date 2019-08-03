import {USER_MOCKS} from "../mocks/user-mocks";
import {UserVm} from "./user-vm";

describe("UserVm", () => {
  let user: UserVm;

  beforeAll(() => {
    user = new UserVm(USER_MOCKS[0]);
  });

  it("can be instantiated", () => {
    expect(user instanceof UserVm).toBe(true);
  });

  describe("#userAddress", () => {

    it("should return a string", () => {
      const typeOfExpectedAddress = typeof user.userAddress;
      expect(typeOfExpectedAddress).toBe("string");
    });

    it("should return readable address", () => {
      const readableAddress = user.address.street + " " +
                              user.address.suite + ", " +
                              user.address.zipcode + " " +
                              user.address.city;

      expect(user.userAddress).toBe(readableAddress);
    });
  });

});
