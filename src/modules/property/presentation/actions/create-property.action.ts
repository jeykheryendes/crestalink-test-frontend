"use server";

import { revalidatePath } from "next/cache";

import type { CreatePropertyDTO } from "@module-property/infrastructure/dtos/create-property.dto";

import { createProperty } from "@module-property/infrastructure/services/create-property.service";

export async function createPropertyAction(data: CreatePropertyDTO) {
  try {
    const response = await createProperty(data);

    revalidatePath("/");

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error creating property:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Error al crear la propiedad",
    };
  }
}
