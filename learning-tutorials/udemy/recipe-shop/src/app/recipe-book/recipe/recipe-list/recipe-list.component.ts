import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Demo Recipe',
      'Just a test',
      'https://yt3.ggpht.com/ytc/AKedOLSQYSjN--Nhic1c9BD1elMd0EUdUGeWkn4FfbfkOQ=s900-c-k-c0x00ffffff-no-rj'
    )];

  constructor() {
  }

  ngOnInit(): void {
  }

}
