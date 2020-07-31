import { FrontStackPage } from './app.po';

describe('front-stack App', function() {
  let page: FrontStackPage;

  beforeEach(() => {
    page = new FrontStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
