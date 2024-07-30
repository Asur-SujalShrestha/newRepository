import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  @Input() hoverColor: string = '';

  private originalColor: string = '';

  constructor(private el: ElementRef) {
    this.originalColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.hoverColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.originalColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
