import { Component, Host, h, State} from '@stencil/core';
import { Watcher } from '../../utils/service/watcher';

@Component({
  tag: 'stencil-header',
  styleUrl: 'stencil-header.css',
  shadow: false,
})
export class StencilHeader {
  @State()
  output: string = '';

  watcherSubscribtion: any;

  constructor(){
    this.watcherSubscribtion = Watcher.getInstance().loaded$.subscribe(value => {
      console.log('hellow from SencilHeader -> watcher: ', value);
      this.output = value;
    })
  }

  render() {
    return (
      <Host>
        <nav>
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><stencil-route-link url="/" exact={true}>Home</stencil-route-link></li>
              <li><stencil-route-link url="/shopping-cart" exact={true}>Cart</stencil-route-link></li>
            </ul>
          </div>
        </nav>
      </Host>
    );
  }

}
