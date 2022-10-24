import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../common/product";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ProductCategory} from "../common/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://pejak.ddns.net:18090/api/products';

  private categoryUrl = 'http://pejak.ddns.net:18090/api/product-category';

  constructor(private httpClient: HttpClient) {
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map((response: GetResponseProducts) => response._embedded.products)
    );

  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map((response: GetResponseProductCategory) => response._embedded.productCategory)
    );
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
