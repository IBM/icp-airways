import { AppnaqmePage } from './app.po';

describe('appnaqme App', () => {
  let page: AppnaqmePage;

  beforeEach(() => {
    page = new AppnaqmePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
