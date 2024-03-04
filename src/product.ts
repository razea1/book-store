export class Product {
  showDescription: boolean = false;
  quantity: any;
  selected: boolean = false; // Initialize selected property

  constructor(
    public serialNumber: string,
    public name: string,
    public price: number,
    public category: string,
    public description: string,
    public imageURL: string
  ) {}
}
