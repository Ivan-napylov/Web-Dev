import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true,
  imports: [CommonModule, NgFor]
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter<number>();

  increaseLikes() {
    this.product.likes++;
  }

  removeProduct() {
    this.productRemoved.emit(this.product.id);
  }
  

  shareProduct(platform: string, product: any) {
    console.log(`Поделиться продуктом на ${platform}: ${product.link}`);
  }
  
}
