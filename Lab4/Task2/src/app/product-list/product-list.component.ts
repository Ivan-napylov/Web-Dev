import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Добавляем FormsModule
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ProductItemComponent], // <-- Добавили сюда FormsModule
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input() products: any[] = [];
  selectedCategory: string = 'all';

  get filteredProducts() {
    return this.selectedCategory === 'all'
      ? this.products
      : this.products.filter((p) => p.category === this.selectedCategory);
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.products.map((p) => p.category))];
  }
  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
  
  
  
  
}
