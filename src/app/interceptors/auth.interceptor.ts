import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) {}
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.spinnerService.needSpinner();

        if (!request.url.includes('http://localhost:3004/auth/login')) {
            request = request.clone({
                setHeaders: {
                    Authorization: JSON.parse(localStorage.getItem('token')).token
                }
            });
        }

        setTimeout(() => this.spinnerService.stopSpinner(), 500);
        return next.handle(request);
    }
}
