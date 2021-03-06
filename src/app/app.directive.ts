import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {

  constructor() { }

  @HostListener('focus', ['$event.target'])
   onFocus(input): void {
    this.setCusor(input);
  }
 
  @HostListener('click', ['$event.target']) 
  onClick(input): void {
    this.setCusor(input);
  }

  setCusor(input: any) {
    const str = input.value;
    const index = str.search('_');
    if(index >= 0){
      input.setSelectionRange(index, index);
    } else{
      input.setSelectionRange(index, str.length)
    }
  }
}
