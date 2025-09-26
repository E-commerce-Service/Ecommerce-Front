import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from '../@types/Pagination';
import { Product } from '../@types/Product';
import {SortBy} from '../enum/SortBy';
import {SortDirection} from '../enum/SortDirection';
import {environment} from '../../../environment/enviroment';
import {HttpClient} from '@angular/common/http';

@Injectable({
   providedIn: 'root',
})
export class ProductService {
   private readonly apiUrl = `${environment.apiUrl}/product`;
   private http = inject(HttpClient);

   getAllProducts(
      sortBy?: SortBy,
      sortDirection?: SortDirection,
      name = '',
      page = 0,
      pageSize = 10,
   ): Observable<Pagination<Product>> {
      const params: string[] = [];
      if (name) {
         params.push(`&name=${name}`);
      }
      if (sortBy) {
         params.push(`&sortBy=${sortBy}`);
      }
      if (sortDirection) {
         params.push(`&sortDirection=${sortDirection}`);
      }
      return this.http.get<Pagination<Product>>(
         `${this.apiUrl}?page=${page}&pageSize=${pageSize}${params}`
      );
   }

   getProductById(id: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/${id}`);
   }
}
