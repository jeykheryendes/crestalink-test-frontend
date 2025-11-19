import type { PropertyStatus } from "../../../domain/types";

export interface PropertyCardProps {
  address: string;
  city: string;
  price: number;
  status: PropertyStatus;
}
