import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

export const httpInterceptorBasicAuthServiceInterceptor: HttpInterceptorFn = (request, next) => {
  const authService = inject(BasicAuthenticationService);
  const token = authService.getAuthenticatedToken()

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: token
      }
    })
  }

  return next(request);
};
