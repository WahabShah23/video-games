import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
          'x-rapidapi-key': 'X7vU6KWvo4msh6j132c5qUd8Ogfip1hWDhVjsnMdctdsGzYydt',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '2a19545efemsh9054bc4e821037ap1aeeebjsn674eb7c46951'
      }
    });
    return next.handle(req);
  }
}
