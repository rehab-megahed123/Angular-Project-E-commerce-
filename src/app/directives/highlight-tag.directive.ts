import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightTag]'
})
export class HighlightTagDirective implements OnChanges {
   @Input() externalColor:string='black'
   @Input('appHighlightTag')defaultColor:string='black'
  constructor(private element:ElementRef) { 
   
    
  }
  ngOnChanges() {
     this.element.nativeElement.style.backgroundColor=this.defaultColor
  }
 @HostListener('mouseover') over(){
    this.element.nativeElement.style.backgroundColor=this.externalColor  
  }
  @HostListener('mouseout')out(){
    this.element.nativeElement.style.backgroundColor=this.defaultColor  
  }

}
