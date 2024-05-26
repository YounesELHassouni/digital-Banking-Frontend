import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class HttpAppInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url)
    if (request.url.includes("/auth/login")){
      let req=request.clone(
        {
          headers:request.headers.set('Authorization','Bearer '+this.authService.accessToken)
        }
      )
      return next.handle(req);
    }else return next.handle(request);

  }
}
