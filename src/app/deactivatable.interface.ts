export interface Deactivatable {
    canDeactivate: () => boolean | Promise<boolean>;
  }