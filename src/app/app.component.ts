import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button properDirective>SHOULD ONLY HANDLE PROPER CLICK</button>
  `
})
export class AppComponent  {
}

@Directive({
  selector: '[baseDirective]',
  host: {
    '(click)': 'handleClick()'
  }
})
export class BaseDirective {

  handleClick() {
    console.log('handling click in a base class directive')
  }
}


@Directive({
  selector: '[properDirective]',
  host: {
    '(click)': 'handleProperClick()'
  }
})
export class ProperDirective extends BaseDirective {
  handleProperClick() {
    console.log('HANDLING PROPER CLICK')
  }
}
