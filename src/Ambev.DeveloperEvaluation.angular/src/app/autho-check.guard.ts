import { CanActivateFn } from '@angular/router';
import { Enviroment } from './abstracts/enviroment';

export const authoCheckGuard: CanActivateFn = (route, state) => {
  return Enviroment.isAuthenticaded();
};
