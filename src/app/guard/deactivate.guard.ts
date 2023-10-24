// can-deactivate.guard.ts

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Deactivatable } from '../deactivatable.interface';


@Injectable({
  providedIn: 'root',
})
export class deactivateGuard implements CanDeactivate<Deactivatable> {
  canDeactivate(
    component: Deactivatable,
  ): boolean | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
