import { Injectable, Inject } from '@angular/core';
import { forkJoin, ReplaySubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class QuillEditorService {
  private loadResources: { [url: string]: ReplaySubject<any> } = {};

  constructor(@Inject(DOCUMENT) private document: any) {}

  public loadQuill() {
    return forkJoin([
      this.loadCSS('../../node_modules/quill/dist/quill.core.css')
      //this.loadJS('../../node_modules/quill/dist/quill.min.js')
    ]);
  }

  private loadJS(url: string): Observable<void> {
    if (this.loadResources[url]) {
      return this.loadResources[url].asObservable();
    }

    this.loadResources[url] = new ReplaySubject();
    let script = this.document.createElement('script');
    script.src = url;
    script.async = true;
    script.onload = () => {
      this.loadResources[url].next();
      this.loadResources[url].complete();
    };

    this.document.body.appendChild(script);
    return this.loadResources[url].asObservable();
  }

  private loadCSS(url: string): Observable<void> {
    if (this.loadResources[url]) {
      return this.loadResources[url].asObservable();
    }

    this.loadResources[url] = new ReplaySubject();
    let style = this.document.createElement('link');
    style.href = url;
    style.onload = () => {
      this.loadResources[url].next();
      this.loadResources[url].complete();
    };

    let head = document.getElementsByTagName('head')[0];
    head.append(style);
    return this.loadResources[url].asObservable();
  }
}
