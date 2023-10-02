export interface FetchProductsResponse {
  id: string;
  title: string;
  description: string;
  dateAdded: Date;
  imageSrc: string;
  type: {
    id: string;
    name: string;
  };
  article: string;
  stringNumber: number;
  price: string;
}
