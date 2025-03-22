import { ApplicationConfig } from '@angular/core';
import { ProductService } from './product.service';

export const appConfig: ApplicationConfig = {
  providers: [ProductService]
};