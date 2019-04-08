import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  NgZone,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { QuillEditorService } from './quill-editor.service';

declare var Quill: any;

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit, OnDestroy {
  @Input() html = '';
  @Output() htmlChange = new EventEmitter<string>();
  private textChangeEvent: any;
  quillEditor: any;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: any,
    private readonly editorServvice: QuillEditorService
  ) {}

  ngOnInit() {
    this.editorServvice.loadQuill().subscribe(_ => {
      if (!Quill) {
        Quill = this.document.defaultView.Quill;
      }

      this.setupQuill();
    });
  }

  setupQuill() {
    if (!Quill) {
      return;
    }

    const align = Quill.import('attributes/style/align');
    align.whiteList = ['right', 'center', 'justify'];
    Quill.register(align, true);

    const toolbarElem = this.elementRef.nativeElement.querySelector(
      '[quill-editor-toolbar]'
    );

    const editorElem = this.elementRef.nativeElement.querySelector(
      '[quill-editor-container]'
    );

    this.quillEditor = new Quill(editorElem, {
      format: 'hmtl',
      theme: 'snow',
      modules: {
        toolbar: toolbarElem
      }
    });

    const contents = this.quillEditor.clipboard.convert(this.html);
    this.quillEditor.setContents(contents, 'silent');
    this.quillEditor.history.clear();

    this.textChangeEvent = this.quillEditor.on(
      'text-change',
      (delta: any, oldData: any, source: string): void => {
        if (source === 'user') {
          let html: string | null = this.quillEditor.root.innerHTML;
          if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = null;
          }

          this.zone.run(() => {
            this.htmlChange.emit(null);
          });
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.textChangeEvent) {
      this.textChangeEvent.removeListener('text-change');
    }
  }
}
