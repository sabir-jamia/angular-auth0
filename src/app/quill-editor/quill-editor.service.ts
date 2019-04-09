import { Injectable, Inject } from '@angular/core';
import { forkJoin, ReplaySubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QuillEditorService {
  private loadedResources: { [url: string]: ReplaySubject<any> } = {};

  constructor(@Inject(DOCUMENT) private document: any) {}

  lazyLoadQuill(): Observable<any> {
    return forkJoin([
      this.loadStyle('assets/quill/quill.snow.css'),
      this.loadScript('assets/quill/quill.min.js')
    ]);
  }

  private loadScript(url: string): Observable<void> {
    if (this.loadedResources[url]) {
      return this.loadedResources[url].asObservable();
    }

    this.loadedResources[url] = new ReplaySubject();
    let script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    script.onload = () => {
      this.loadedResources[url].next();
      this.loadedResources[url].complete();
    };

    this.document.body.appendChild(script);
    return this.loadedResources[url].asObservable();
  }

  private loadStyle(url: string): Observable<any> {
    if (this.loadedResources[url]) {
      return this.loadedResources[url].asObservable();
    }

    this.loadedResources[url] = new ReplaySubject();
    let style = this.document.createElement('link');
    style.href = url;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.onload = () => {
      this.loadedResources[url].next();
      this.loadedResources[url].complete();
    };

    let head = this.document.head;
    head.appendChild(style);
    return this.loadedResources[url].asObservable();
  }
}
