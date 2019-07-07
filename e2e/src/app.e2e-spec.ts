import {browser, by, element} from "protractor";
import {AppPage} from "./app.po";

describe("Userlist app", () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

  describe("UserListComponent", () => {
    let matRow;

    beforeAll(async () => {
      await page.navigateTo("/users");

      matRow = element.all(by.className("mat-row"));
    });

    it("renders a Material table", () => {
      const matTable = element(by.className("mat-table"));
      expect(matTable.isPresent()).toBe(true);
    });

    it("renders correct amount of rows", () => {
      const expectedRows = 10;
      expect(matRow.count()).toBe(expectedRows);
    });

    it("click on row navigates to user detail", () => {
      matRow.first().click();
      const url = browser.getCurrentUrl();

      expect(url).toBe("http://localhost:4200/user/1");
    });
  });

  describe("UserDetailComponent", () => {
    const photoContainer = element(by.className("photo-container"));

    it("renders user-detail component", () => {
      const userDetail = element(by.css("app-user-detail"));
      expect(userDetail.isPresent()).toBe(true);
    });

    it("renders photo info text", () => {
      const infoText = element(by.className("info-text"));
      expect(infoText.getText()).toBe("Please click on an album to see the photos.");
    });

    it("initially has no photos rendered", () => {
      expect(photoContainer.isPresent()).toBe(false);
    });

    it("click on album renders photos", () => {
      const albumItems     = element.all(by.className("list-group-item"));
      const firstAlbumItem = albumItems.first();

      firstAlbumItem.click();

      expect(photoContainer.isPresent()).toBe(true);
    });
  });
});
