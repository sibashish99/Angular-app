import { Component } from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Foods;

  constructor(private fs: FoodService, private router:ActivatedRoute,private cartService:CartService , private rs:Router){
    router.params.subscribe((params) => {
      if(params['id'])
        this.food= fs.getFoodById(params['id'])
    })
  }
  
  ngOnInit():void{

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.rs.navigateByUrl('/cart-page')
  }
}
