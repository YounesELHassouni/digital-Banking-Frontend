import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationGuard {

  constructor(public authService:AuthService,public router:Router)  {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< boolean | UrlTree >|Promise<boolean|UrlTree>| boolean| UrlTree {
    if (this.authService.isAuthenticated==true){
      return true
    }else {
      this.router.navigateByUrl("/login")
      return false
    }

  }

}

