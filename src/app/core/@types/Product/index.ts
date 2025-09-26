import { ProductCategory } from '../../enum/ProductCategory';

export interface Product {
   id: number;
   name: string;
   coverImageUrl: string;
   coverImagePublicId: string;
   imageUrls: Record<string, string>;
   code: string;
   description: string;
   stock: number;
   price: number;
   category: ProductCategory;
   rating: number;
   isAvailable: boolean;
   soldCount: number;
   createdAt: string;
}
