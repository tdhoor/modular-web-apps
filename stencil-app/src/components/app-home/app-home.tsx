import { Component, h } from '@stencil/core';
import { Watcher } from '../../utils/service/watcher';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  i: number = 0;

  next() {
    Watcher.getInstance().loaded$.next(this.i++ + ' - ');
  }
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <button onClick={() => this.next()}>update header</button>
        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>

        </stencil-route-link>
      </div>
    );
  }
}
