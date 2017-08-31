import { TutorialpointPage } from './app.po';

describe('tutorialpoint App', function() {
  let page: TutorialpointPage;

  beforeEach(() => {
    page = new TutorialpointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
