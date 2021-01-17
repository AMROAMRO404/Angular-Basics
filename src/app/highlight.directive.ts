import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private render: Renderer2) {
    el.nativeElement.style.backgroundColor = 'blue';
  }
  @Input('appHighlight') highlightColor: any;
  @Input() bStyle: string = 'solid';
  @HostListener('mouseenter') onMouseLeave() {
    this.highlight('red');
  }
  @HostListener('mouseleave') onMouseEnter() {
    this.highlight('blue');
  }
  @HostBinding('style.borderStyle')
  get style() {
    return this.bStyle;
  }

  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
