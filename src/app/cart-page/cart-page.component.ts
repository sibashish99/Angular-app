import { Component } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/model/CartItem';
import { FoodService } from '../services/food/food.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent {
    cart!: Cart;

    constructor(private cartService: CartService, ){
      this.setCart();
    }
    ngOnInit():void{

    }

    setCart(){
      this.cart= this.cartService.getCart();
    }


    removeCart(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.food.id);
      this.setCart();
    }


    changeQuantity(cartItem:CartItem, quantityInString:string){
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.food.id, quantity);
      this.setCart();
    }

    checkOut():void {
      if(confirm('Are you sure to checkout?')){
        this.cart.items=[];
        // this.cart.totalPrice=0;
      }
    }

}


 