import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}
  isReached = false;
  @HostListener('scroll', ['$event'])
  onWindowScroll() {
    let pos =
      (this.elemRef.nativeElement.scrollTop ||
        this.elemRef.nativeElement.body.scrollTop) +
      this.elemRef.nativeElement.offsetHeight;
    let max = this.elemRef.nativeElement.scrollHeight;

    if (pos == max && !this.isReached) {
      this.isReached = true;
      alert('reached at the end of the table ... ');
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText(
        'reached at the end of the table ...'
      );

      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.elemRef.nativeElement, div);
    }
  }
}
