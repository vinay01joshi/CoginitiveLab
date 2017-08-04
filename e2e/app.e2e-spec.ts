import { CognitiveLabPage } from './app.po';

describe('cognitive-lab App', () => {
  let page: CognitiveLabPage;

  beforeEach(() => {
    page = new CognitiveLabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
