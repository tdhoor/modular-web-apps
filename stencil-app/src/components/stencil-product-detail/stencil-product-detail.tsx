import { Component, Host, h, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Product } from '../../utils/model/product.interface';
import { ShoppingCartItem } from '../../utils/model/shoppingcart.interface';
import { ProductService } from '../../utils/service/product.service';
import { ShoppingCartService } from '../../utils/service/shoppingcart.service';

@Component({
  tag: 'stencil-product-detail',
  styleUrl: 'stencil-product-detail.css',
  shadow: false,
})
export class StencilProductDetail {
  @State() shoppingcartItem: ShoppingCartItem;

  @State()
  product: Product;

  @Prop()
  match!: MatchResults;

  @Prop()
  history: RouterHistory;

  async componentWillLoad() {
    console.log(this.match.params)
    const response = await ProductService.getInstance().get(+this.match.params.id);
    this.product = response;
    this.initShoppingCartItem(response)
  }

  initShoppingCartItem(product: Product){
    this.shoppingcartItem = {
      id: null,
      item: product,
      firstName: '',
      lastName: '',
      email: '',
      birthday: '',
      amount: 1
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    console.log(this.shoppingcartItem);

    const response = await ShoppingCartService.getInstance().post(this.shoppingcartItem);

    if(response.status === 200) {
      alert('successfully added product to cart!')
    }
  }

  handleChange(event) {
    const key = event.target.id;
    this.shoppingcartItem[key] = event.target.value;
    console.log(key)
  }

  render() {
    return (
      <Host>
       {
         this.product
         ?
          <div class="col s12 m6 l3">
            <div class="card z-depth-2">
              <div class="card-image">
                <img src={this.product.imgUrl} />
                <span class="card-title">{ this.product.name }</span>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h3>{ this.product.name }</h3>
                  Category: {this.product.category}
                  <br/><br/>
                  <p>{this.product.description}</p>
                  <br/><br/>
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s6">
                          <input
                            placeholder="Placeholder"
                            id="firstName"
                            type="text"
                            class="validate"
                            value={this.shoppingcartItem.firstName}
                            onInput={(event) => this.handleChange(event)}
                          />
                          <label htmlFor="firstName">First Name</label>
                        </div>
                        <div class="input-field col s6">
                          <input
                            id="lastName"
                            type="text"
                            class="validate"
                            value={this.shoppingcartItem.lastName}
                            onInput={(event) => this.handleChange(event)}
                          />
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <input
                            disabled
                            value={this.product.price}
                            id="price"
                            type="text"
                            class="validate"
                          />
                          <label htmlFor="price">Price</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <input
                            id="email"
                            type="email"
                            class="validate"
                            value={this.shoppingcartItem.email}
                            onInput={(event) => this.handleChange(event)}
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="input-field col s12">
                          <input
                            id="birthday"
                            type="text"
                            class="validate"
                            value={this.shoppingcartItem.firstName}
                            onInput={(event) => this.handleChange(event)}
                          />
                          <label htmlFor="birthday">Bithday</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card-action">
                  <div class="row">
                    <div class="col s6 left-align">
                      <a  onClick={(e) => this.handleSubmit(e)}>add</a>
                    </div>
                    <div class="col s6 right-align">
                      Price: {this.product.price} €
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         :
         <incert-loading-item></incert-loading-item>
       }
      </Host>
    );
  }

}
