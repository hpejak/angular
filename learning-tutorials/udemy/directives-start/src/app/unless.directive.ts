import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcrRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcrRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcrRef: ViewContainerRef) {
  }

}
