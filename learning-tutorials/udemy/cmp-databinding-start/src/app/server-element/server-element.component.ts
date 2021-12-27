import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Server element is constructed');
  }

  ngOnDestroy(): void {
    console.log('Destroy was done in  Server element');
    }

  ngOnInit(): void {
    console.log('Server element is initialized');
    console.log('Header Text: ' + this.header.nativeElement.textContent);
    console.log('Content Text: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change in Server element: ', changes);
  }

  ngDoCheck(): void {
    console.log('Do Check in Server element');
  }

  ngAfterContentInit(): void {
    console.log('After Content Init in Server element');
    console.log('Content Text: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('After Content Checked in Server element');
  }

  ngAfterViewChecked(): void {
    console.log('After View Checked in Server element');
  }

  ngAfterViewInit(): void {
    console.log('After View Init in Server element');
    console.log('Header Text: ' + this.header.nativeElement.textContent);
  }

}
