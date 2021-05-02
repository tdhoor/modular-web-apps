import { Component, h } from '@stencil/core';

@Component({
  tag: 'stencil-shop',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  components: {} = {};

  initRouter(){
    const config = {
      release: 1,

      pages: [
        {
          url: '/',
          components: [
            {
              name: 'stencil-shop-index',
            },
            {
              name: 'stencil-product-listing'
            },
            {
              name: 'stencil-product-listing-entry'
            },
            {
              name: 'stencil-product-detail'
            },
            {
              name: 'stencil-shopping-cart'
            },
            {
              name: 'stencil-shop-cart-entry'
            },
            {
              name: 'stencil-shop-cart'
            },
            {
              name: 'stencil-shop-cart-header'
            },
          ]
        },
        {
          url: '/second',
          components: [
            {
              name: 'stencil-product-listing',
              config: {
                category: 2
              }
            },
            {
              name: 'stencil-product-listing-entry'
            },
            {
              name: 'stencil-product-detail'
            }
          ]
        },
        {
          url: '/third',
          components: [
            {
              name: 'stencil-product-listing-entry'
            }
          ]
        }
      ]
    }

    config.pages.forEach((page, pageIndex) => {
      page.components.forEach((comp, compIndex) => {
        this.components[comp.name] = this.components[comp.name] || {};
        this.components[comp.name]['name'] = this.components[comp.name]['name'] || comp.name;
        this.components[comp.name]['url'] = this.components[comp.name]['url'] || [];

        let url = '';

        if(pageIndex === 0 && compIndex === 0){
          url += page.url;
        } else if(pageIndex === 0) {
          url += '/' + comp.name;
        } else {
          url += page.url + '/' + comp.name;
        }

        if(comp.name === 'stencil-product-detail'){
          url += '/:id'
        }

        this.components[comp.name]['url'].push(url);
        this.components[comp.name]['config'] = this.components[comp.name]['config'] || comp.config;
      });
    });
  }

  componentWillLoad() {
    this.initRouter();
  }

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="view-shop" exact={true}/>
              <stencil-route url="/shopping-cart" component="view-cart" exact={true}/>
              <stencil-route url="/product-detail/:id" component="view-product-detail" exact={true}/>
              <stencil-route url="/subPage/product-detail/:id" component="stencil-product-detail" exact={true}/>
              <stencil-route url="/subPage/product-list/:category" component="stencil-product-listing" exact={true}/>
              <stencil-route url="/subPage/product/:id" component="stencil-product-listing-enty" exact={true}/>
            </stencil-route-switch>
          </stencil-router>
        </main>

      </div>
    );
  }
}
