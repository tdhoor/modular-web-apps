import { Component, Host, State, h, Prop } from '@stencil/core';
import { Product } from '../../utils/model/product.interface';
import { ProductService } from '../../utils/service/product.service';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'stencil-product-listing',
  styleUrl: 'stencil-product-listing.css',
  shadow: false,
})
export class StencilProductListing {

  @State()
  products: Product[] = [];

  @Prop()
  category: number;

  @Prop()
  match?: MatchResults;

  async componentWillLoad(){
    let category = 0;
    if(typeof this.match !== "undefined"){
      category = +this.match.params.category;
    } else if(typeof this.category !== "undefined") {
      category = this.category;
    }

    if(category > 0){
      this.products = await ProductService.getInstance().getByCategory(category);
    } else {
      this.products = await ProductService.getInstance().get();
    }
  }

  render() {
    return (
      <Host>
        <div class="row">
          {
            this.products.length > 0
            ?
              this.products.map(p =>
                <stencil-product-listing-enty product={p}/>
              )
            :
              <stencil-loading-item/>
          }
        </div>
      </Host>
    );
  }

}
