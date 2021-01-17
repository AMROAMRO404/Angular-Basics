import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }
  @Input('appHighlight') highlightColor: any;

  @HostListener('mouseenter') onMouseLeave() {
    this.highlight('red');
  }
  @HostListener('mouseleave') onMouseEnter() {
    this.highlight('blue');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
