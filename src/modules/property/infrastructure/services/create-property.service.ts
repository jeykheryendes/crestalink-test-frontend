import type { CreatePropertyDTO } from "../dtos/create-property.dto";

import axios from "axios";

export async function createProperty(propertyDto: CreatePropertyDTO) {
  return await axios.post("http://localhost:9000/api/v1/property", propertyDto);
}
