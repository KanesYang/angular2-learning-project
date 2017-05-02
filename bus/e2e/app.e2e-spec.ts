import { BusPage } from './app.po';

describe('bus App', () => {
  let page: BusPage;

  beforeEach(() => {
    page = new BusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
