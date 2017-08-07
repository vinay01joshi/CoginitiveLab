import { CognitiveAppPage } from './app.po';

describe('cognitive-app App', () => {
  let page: CognitiveAppPage;

  beforeEach(() => {
    page = new CognitiveAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
