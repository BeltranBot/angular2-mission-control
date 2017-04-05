import { MissionControlPage } from './app.po';

describe('mission-control App', () => {
  let page: MissionControlPage;

  beforeEach(() => {
    page = new MissionControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
