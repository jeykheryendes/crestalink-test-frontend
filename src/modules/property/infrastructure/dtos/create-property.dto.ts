import type { PropertyStatus } from "../../domain/types";

export interface CreatePropertyDTO {
  address: string;
  city: string;
  price: number;
  status?: PropertyStatus;
}
