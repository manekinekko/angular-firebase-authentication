import { Angular2FirebaseAuthPage } from './app.po';

describe('angular2-firebase-auth App', function() {
  let page: Angular2FirebaseAuthPage;

  beforeEach(() => {
    page = new Angular2FirebaseAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
