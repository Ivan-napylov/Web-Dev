import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[];

  constructor() {
    this.products = [{name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium', description: '59 916 ₸', rating: 4.5, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'}, 
      {name: 'Apple iPhone 13 128Gb черный', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large', description: '278 311 ₸', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'},
      {name: 'Realme Note 50 3 ГБ/64 ГБ черный', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large', description: '37 490 ₸', rating: 5, link: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000'}, 
      {name: 'Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=preview-large', description: '94 288 ₸', rating: 5, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000'}, 
      {name: 'Apple iPhone 16 Pro Max 256Gb золотистый', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large', description: '662 630 ₸', rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'}, 
      {name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large', description: '186 042 ₸', rating: 5, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'}, 
      {name: 'Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png?format=preview-large', description: '122 163 ₸', rating: 5, link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000'}, 
      {name: 'OPPO A54 4 ГБ/128 ГБ синий', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/he9/hd9/64315069136926.jpg?format=preview-large', description: '109 890 ₸', rating: 4.5, link: 'https://kaspi.kz/shop/p/oppo-a54-4-gb-128-gb-sinii-101701450/?c=750000000'}, 
      {name: 'Xiaomi Redmi A3 3 ГБ/64 ГБ черный', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h71/h42/85319824572446.jpg?format=preview-large', description: '38 990 ₸', rating: 4.5, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-a3-3-gb-64-gb-chernyi-117095035/?c=750000000'}, 
      {name: 'Samsung Galaxy S21 FE New 8 ГБ/256 ГБ зеленый', img_src: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h98/86042948993054.png?format=preview-large', description: '268 908 ₸', rating: 4.5, link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-new-8-gb-256-gb-zelenyi-106336893/?c=750000000'}, 
];
}

shareProduct(product: any, platform: string) {
  const message = `Check out this product: ${product.name} - ${product.description}`;
  
  let url = '';
  if (platform === 'whatsapp') {
    url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  } else if (platform === 'telegram') {
    url = `https://t.me/share/url?url=${encodeURIComponent(product.img_src)}&text=${encodeURIComponent(message)}`;
  }

  window.open(url, '_blank');
}


}

export class Product {
  constructor(
    public name: string,
    public img_src: string,
    public description: string,
    public rating: number,
    public link: string,
  ) {}
}
