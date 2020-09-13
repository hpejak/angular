import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak', 'Very nice steak', 'https://www.volim-meso.hr/wordpress/wp-content/uploads/2016/07/ramstek-priprema-naslovna.jpg'),
    new Recipe('Pasta', 'Very nice pasta', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
