import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';
import { authChildGuard } from './auth-child-guard';
import { AuthService } from './auth.service';

describe('authChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authChildGuard(...guardParameters));

  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow access when user is authenticated', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);

    const result = executeGuard({} as any, {} as any);
    expect(result).toBe(true);
  });

  it('should deny access when user is not authenticated', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    spyOn(window, 'alert');

    const result = executeGuard({} as any, {} as any);
    expect(result).toBe(false);
    expect(window.alert).toHaveBeenCalledWith(
      'No tienes permisos para acceder a rutas hijas privadas.'
    );
  });
});
