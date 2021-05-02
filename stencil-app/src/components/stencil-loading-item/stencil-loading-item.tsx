import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-loading-item',
  styleUrl: 'stencil-loading-item.css',
  shadow: false,
})
export class StencilLoadingItem {

  render() {
    return (
      <Host>
          <div class="center-align">
            <div class="preloader-wrapper active">
              <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
      </Host>
    );
  }

}
