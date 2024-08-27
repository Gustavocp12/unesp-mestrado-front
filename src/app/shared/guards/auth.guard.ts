import {CanActivate, Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

      constructor(private router: Router, private authService: AuthService) { }

      canActivate(): boolean {

        if (this.authService.isLoggedIn()) {
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      }
}
