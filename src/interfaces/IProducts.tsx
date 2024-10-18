export interface IReviewInfo {
  rating: number | string;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IMetaInfo {
  createdAt: string;
  updatedAt: string;
  barcode: string | number;
  qrCode: string;
}

export interface IProduct {
  id: number | string;
  title: string;
  description: string;
  category: string;
  price: number | string;
  discountPercentage: number | string;
  rating: number | string;
  stock: number | string;
  tags: string[];
  brand: string;
  sku: string;
  weight: number | string;
  dimensions: {
    width: number | string;
    height: number | string;
    depth: number | string;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviewInfo[];
  returnPolicy: string;
  minimumOrderQuantity: number | string;
  meta: IMetaInfo;
  images: string[];
  thumbnail: string;
}

export interface IResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
