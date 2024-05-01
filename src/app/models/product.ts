export class Product {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  priceHolder: number;
  qty: number;

  constructor(
    id: number,
    image: string = '../../assets/images/default-image.jpg',
    title: string,
    desctiption: string = '',
    price: number = 0,
    priceHolder: number,
    qty: number = 1
  ) {
    this.id = id;
    this.imageUrl = image;
    this.title = title;
    this.description = desctiption;
    this.price = price;
    this.priceHolder = priceHolder;
    this.qty = qty;
  }
}
