import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';
import { authMatchGuard } from './auth-match-guard';
import { AuthService } from './auth.service';

describe('authMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authMatchGuard(...guardParameters));

  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow route matching when user is authenticated', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);

    const result = executeGuard({} as any, [] as any);
    expect(result).toBe(true);
  });

  it('should deny route matching when user is not authenticated', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    spyOn(window, 'alert');

    const result = executeGuard({} as any, [] as any);
    expect(result).toBe(false);
    expect(window.alert).toHaveBeenCalledWith(
      'No tienes permisos para acceder a este grupo de rutas.'
    );
  });
});
