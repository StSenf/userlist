import {UserVm} from "./user-vm";
import {USER_MOCKS} from "../mocks/user-mocks";

describe("UserVm", () => {
  let user: UserVm;

  beforeAll(() => {
    user = new UserVm(USER_MOCKS[0]);
  });

  it("can be instantiated", () => {
    expect(user instanceof UserVm).toBe(true);
  });

  describe("#userAddress", () => {

    it("returns readable address", () => {
      const readableAddress = user.address.street + " " +
                              user.address.suite + ", " +
                              user.address.zipcode + " " +
                              user.address.city;

      expect(user.userAddress).toBe(readableAddress);
    });
  });

});