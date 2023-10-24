// auth.service.ts

import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = false;
  private userEmail: string | null = null;

  constructor(private socialService: SocialAuthService, private router: Router) {
    this.socialService.authState.subscribe((data) => {
      this._isAuthenticated = data !== null;
      this.userEmail = data ? data.email || null : null;
      this.updateLocalStorage();
      this.reloadRoute();
    });

    // Retrieve user email from localStorage on application startup
    const storedEmail = localStorage.getItem('email');
    const storedUser = storedEmail ? { email: storedEmail } as SocialUser : null;
    this._isAuthenticated = storedUser !== null;
    this.userEmail = storedEmail;
  }

  private updateLocalStorage() {
    if (this.userEmail) {
      localStorage.setItem('email', this.userEmail);
    } else {
      localStorage.removeItem('email');
    }
  }

  private reloadRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  getUserEmail(): string | null {
    return this.userEmail;
  }

  logout(): void {
    this._isAuthenticated = false;
    this.userEmail = null;
    this.updateLocalStorage();
    this.reloadRoute();
    // Other logout logic...
  }
}
