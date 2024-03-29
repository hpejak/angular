import {Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
