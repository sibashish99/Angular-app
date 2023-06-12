import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/model/Tag';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[] { 
    return tag == 'ALL'? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }
 
  getAllTag():Tag[]{
    return [
      {name : 'ALL' , count:18},
      {name : 'Fast food' , count:9},
      {name : 'Starter' , count:3},
      {name : 'Snacks' , count:5},
      {name : 'combo' , count:3},
      {name : 'main course' , count:4},
      {name : 'Sweet' , count:2},
      {name : 'Dessert' , count:1}
    ]
  }

  getAll():Foods[] {
    return [
      {
        id: 2023001,
        price: 349,
        name: 'Pizza',
        favorite: true,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/1.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023002,
        price: 309,
        name: 'Noodles',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/2.jpg',
        cookTime: '25',
        origins: ['INDIA']
      },
      {
        id: 2023003,
        price: 349,
        name: 'salad',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/3.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023004,
        price: 299,
        name: 'Ramen',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/4.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023005,
        price: 249,
        name: 'Brownie',
        favorite: false,
        star: 4.8,
        tags: ['Sweet'],
        imageUrl: '/assets/5.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023006,
        price: 129,
        name: 'Veg Roll',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/6.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023007,
        price: 449,
        name: 'Burger',
        favorite: false,
        star: 4.8,
        tags: ['Fast food'],
        imageUrl: '/assets/7.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023008,
        price: 249,
        name: 'Biriyani',
        favorite: true,
        star: 4.8,
        tags: ['Fast food','main course'],
        imageUrl: '/assets/8.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023009,
        price: 249,
        name: 'Samosa',
        favorite: true,
        star: 4.5,
        tags: ['Fast food','Snacks'],
        imageUrl: '/assets/9.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023010,
        price: 249,
        name: 'Rajma chawal',
        favorite: false,
        star: 4.8,
        tags: ['combo','main course'],
        imageUrl: '/assets/10.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023011,
        price: 249,
        name: 'Veg thali',
        favorite: false,
        star: 4.5,
        tags: ['main course','combo'],
        imageUrl: '/assets/11.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023012,
        price: 149,
        name: 'Halwa',
        favorite: true,
        star: 4.9,
        tags: ['Sweet','Dessert'],
        imageUrl: '/assets/12.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023013,
        price: 199,
        name: 'Fried chicken',
        favorite: true,
        star: 4.7,
        tags: ['Starter','Snacks'],
        imageUrl: '/assets/13.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023014,
        price: 149,
        name: 'Fish fry',
        favorite: true,
        star: 4.2,
        tags: ['Starter','Snacks'],
        imageUrl: '/assets/14.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023015,
        price: 449,
        name: 'Butter naan & Butter chicken',
        favorite: true,
        star: 4.9,
        tags: ['main course','combo'],
        imageUrl: '/assets/15.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023016,
        price: 249,
        name: 'Bbq chicken',
        favorite: true,
        star: 4.4,
        tags: ['Snacks','Starter'],
        imageUrl: '/assets/16.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023017,
        price: 49,
        name: 'Pani Puri',
        favorite: false,
        star: 4.8,
        tags: ['Snacks'],
        imageUrl: '/assets/17.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },
      {
        id: 2023018,
        price: 99,
        name: 'Fries',
        favorite: false,
        star: 4.6,
        tags: ['snacks'],
        imageUrl: '/assets/18.jpg',
        cookTime: '20',
        origins: ['INDIA']
      },


    ]
  }
}
