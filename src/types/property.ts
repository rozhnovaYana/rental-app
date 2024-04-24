export type Property = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};
export type ErrorType = {
  name?: string[];
  type?: string[];
  description?: string[];
  location?: string[];
  beds?: string[];
  baths?: string[];
  square_feet?: string[];
  amenities?: string[];
  rates?: string[];
  seller_info?: string[];
  images?: string[];
  _form?: string;
};
export type CreatePropertyState = {
  errors?: ErrorType;
};
