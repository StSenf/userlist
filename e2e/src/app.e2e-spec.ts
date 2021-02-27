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
      const url         = browser.getCurrentUrl();
      const expectedUrl = `${browser.baseUrl}user/1`;

      expect(url).toBe(expectedUrl);
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

    describe("click on album", () => {
      let firstAlbumTitle;

      beforeAll(async () => {
        const firstAlbumItem = element.all(by.className("list-group-item")).first();
        firstAlbumTitle      = await firstAlbumItem.getText();

        firstAlbumItem.click();
      });

      it("renders photos", () => {
        expect(photoContainer.isPresent()).toBe(true);
      });

      it("shows album title in photo headline", () => {
        const expectedHeadlineText = `Photos of ${firstAlbumTitle}`;
        const photoHeadline        = element(by.className("photo-headline"));

        expect(photoHeadline.getText()).toEqual(expectedHeadlineText);
      });
    });

  });
});
