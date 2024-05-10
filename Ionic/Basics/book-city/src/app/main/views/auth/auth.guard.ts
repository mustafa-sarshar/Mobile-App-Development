import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): MaybeAsync<GuardResult> => {
  const handleAuthFailed = () => {
    authService.logout();
    return router.createUrlTree(["/"]);
  };

  const router = inject(Router);
  const authService = inject(AuthService);
  const isUserAuthenticated = authService.isUserAuthenticated;

  if (!isUserAuthenticated) {
    return handleAuthFailed();
  }

  return true;
};
