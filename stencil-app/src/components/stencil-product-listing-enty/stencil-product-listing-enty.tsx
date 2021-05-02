import { Component, Host, h, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Product } from '../../utils/model/product.interface';
import { ProductService } from '../../utils/service/product.service';


@Component({
  tag: 'stencil-product-listing-enty',
  styleUrl: 'stencil-product-listing-enty.css',
  shadow: false,
})
export class StencilProductListingEnty {

  @Prop({mutable: true})
  product: Product;

  @Prop()
  history: RouterHistory;

  @Prop()
  match?: MatchResults;

  async componentWillLoad(){
    let id = -1;

    if(typeof this.match !== "undefined"){
      id = +this.match.params.id;
    }

    if(id >= 0){
      this.product = await ProductService.getInstance().get(id);
    }
    console.log(this.product, "lsjflskdf ")
  }

  render() {
    return (
      <Host>
          <div class="col s12 m6 l3">
            <div class="card medium  z-depth-2">
              <div class="card-image">
                <img src={this.product.imgUrl} />
                <span class="card-title">{ this.product.name }</span>
              </div>
              <div class="card-content">
                Category: {this.product.category}
                <br/>
                Price: {this.product.price} €
              </div>
              <div class="card-action">
                <stencil-route-link url={'/product-detail/' + this.product.id}>Details</stencil-route-link>
              </div>
            </div>
          </div>
      </Host>
    );
  }
}
