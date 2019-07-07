import {AppPage} from "./app.po";
import {browser, by, element} from "protractor";

describe("Userlist app", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe("UserListComponent", () => {

    beforeAll(async () => {
      await page.navigateTo();
    });

    it("renders a Material table", () => {
      const matTable = element(by.className("mat-table"));
      expect(matTable).toBe(true);
    });

    it("renders correct amount of rows", () => {
      const matRow       = element.all(by.className("mat-row"));
      const expectedRows = 10;
      expect(matRow.count()).toBe(expectedRows);
    });

    it("click on row navigates to user detail", () => {
      const matRow   = element.all(by.className("mat-row"));
      const firstRow = matRow.first();

      firstRow.click();
      const url = browser.getCurrentUrl();

      expect(url).toBe("http://localhost:4200/user/1");
    });
  });

  describe("UserDetailComponent", () => {

    it("renders user-detail component", () => {
      const userDetail = element(by.css("app-user-detail"));
      expect(userDetail).toBe(true);
    });

    it("renders photo info text", () => {
      const infoText = element(by.className("info-text"));
      expect(infoText.getText()).toBe("Please click on an album to see the photos.")
    });

    it("click on album renders photos", () => {
      const albumItems     = element.all(by.className("list-group-item"));
      const firstAlbumItem = albumItems.first();

      firstAlbumItem.click();
      const photoContainer = element(by.className("photo-container"));

      expect(photoContainer).toBe(true);
    });
  });
});
