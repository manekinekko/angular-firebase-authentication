import { Angular2FirebaseAuthMigrationPage } from './app.po';

describe('angular2-firebase-auth-migration App', function() {
  let page: Angular2FirebaseAuthMigrationPage;

  beforeEach(() => {
    page = new Angular2FirebaseAuthMigrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
