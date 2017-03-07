import { StrongbrewioPage } from './app.po';

describe('strongbrewio App', function() {
  let page: StrongbrewioPage;

  beforeEach(() => {
    page = new StrongbrewioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
