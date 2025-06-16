import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with user not authenticated', () => {
    expect(service.isLoggedIn()).toBe(false);
  });

  it('should authenticate user when login is called', () => {
    service.login();
    expect(service.isLoggedIn()).toBe(true);
  });

  it('should deauthenticate user when logout is called', () => {
    service.login();
    service.logout();
    expect(service.isLoggedIn()).toBe(false);
  });

  it('should toggle authentication state', () => {
    const initialState = service.isLoggedIn();
    service.toggleAuth();
    expect(service.isLoggedIn()).toBe(!initialState);

    service.toggleAuth();
    expect(service.isLoggedIn()).toBe(initialState);
  });
});
