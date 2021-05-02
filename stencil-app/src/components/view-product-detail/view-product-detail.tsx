import { Component, Host, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'view-product-detail',
  styleUrl: 'view-product-detail.css',
  shadow: false,
})
export class ViewProductDetail {
  @Prop()
  match: MatchResults;
  render() {
    return (
      <Host>
        <stencil-header></stencil-header>
        <div class="container">
          <stencil-product-detail match={this.match}></stencil-product-detail>
        </div>
        <stencil-footer></stencil-footer>
      </Host>
    );
  }

}
