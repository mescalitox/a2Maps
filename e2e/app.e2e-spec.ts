import { A2MapsPage } from './app.po';

describe('a2-maps App', function() {
  let page: A2MapsPage;

  beforeEach(() => {
    page = new A2MapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
