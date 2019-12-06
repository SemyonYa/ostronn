import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadowMover]'
})
export class ShadowMover2Directive {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'filter', 'drop-shadow(20px 4px 6px rgba(0,0,0,.4))');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '1.5s');
    // this.renderer.setStyle(document.getElementById('title'), 'transition', '1s .2s');
    // 'filter', 'drop-shadow(2px 4px 6px rgba(0,0,0,.4)) opacity(0.2)'
  }

  @HostListener('mousemove', ['$event']) onMouseEnter(e: MouseEvent) {
    const width = window.innerWidth;
    const heigth = window.innerHeight;
    if (e.clientX > width / 2) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'filter', 'drop-shadow(10px 4px 6px rgba(0,0,0,.4))');
      this.renderer.setStyle(document.getElementById('title'), 'transform', 'rotateY(3deg) translate(2px)');
      this.renderer.setStyle(document.getElementById('title'), 'filter', 'drop-shadow(3px 4px 6px rgba(0,0,0,.4))');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'filter', 'drop-shadow(-10px 4px 6px rgba(0,0,0,.4))');
      this.renderer.setStyle(document.getElementById('title'), 'transform', 'rotateY(-3deg) translateX(-2px)');
      this.renderer.setStyle(document.getElementById('title'), 'filter', 'drop-shadow(-3px 4px 6px rgba(0,0,0,.4))');
    }

    // console.log(this.elementRef.nativeElement);
  }

  // @HostListener('mouseleave') onMouseLeave() {
  // }

}
