import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appUserDropdown]'
})
export class UserDropdownDirective {

  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.isOpen = false;
  }

  private isOpen  = false;

}
