import { Component, Host, h, Prop } from '@stencil/core';
import { ShoppingCartItem } from '../../utils/model/shoppingcart.interface';
import { ShoppingCartService } from '../../utils/service/shoppingcart.service';

@Component({
  tag: 'stencil-shop-cart-entry',
  styleUrl: 'stencil-shop-cart-entry.css',
  shadow: false,
})
export class StencilShopCartEntry {
  @Prop()
  shoppingCartEntry: ShoppingCartItem;

  async delete(){
    const response = await ShoppingCartService.getInstance().delete(this.shoppingCartEntry.id);
    if(response.status === '200'){
      alert("deleted")
    }
  }

  render() {
    return (
      <Host>
        <div class="col s12">
          <div class="card horizontal medium z-depth-2">
            <div class="card-image">
              <img src={this.shoppingCartEntry.item.imgUrl} />
              <span class="card-title">{ this.shoppingCartEntry.item.name }</span>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h4>{ this.shoppingCartEntry.item.name }</h4>

                <ul class="collection">
                  <li class="collection-item">
                    <div>
                      amount
                      <a class="secondary-content">
                        { this.shoppingCartEntry.amount }
                      </a>
                    </div>
                  </li>
                  <li class="collection-item">
                    <div>
                      name
                      <a class="secondary-content">
                        { this.shoppingCartEntry.item.name }
                      </a>
                    </div>
                  </li>
                  <li class="collection-item">
                    <div>
                      price
                      <a class="secondary-content">
                        { this.shoppingCartEntry.item.price }
                      </a>
                    </div>
                  </li>
                  <li class="collection-item">
                    <div>
                      category
                      <a class="secondary-content">
                        { this.shoppingCartEntry.item.category}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card-action">
                <div class="row">
                  <div class="col s6 left-align">
                    <a  onClick={() => this.delete()}>Delete</a>
                  </div>
                  <div class="col s6 right-align">
                    <strong> Price: {this.shoppingCartEntry.amount * this.shoppingCartEntry.item.price} €</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
