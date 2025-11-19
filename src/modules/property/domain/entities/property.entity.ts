import type { PropertyStatus } from "../types";

export interface Property {
  id: string;
  address: string;
  city: string;
  createdAt: Date;
  price: number;
  status: PropertyStatus;
}
