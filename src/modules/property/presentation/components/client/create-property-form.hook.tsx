"use client";

import type { PropertyStatus } from "@module-property/domain/types";

import { PropertyStatus as PropertyStatusValues } from "@module-property/domain/enums/property-status.enum";

import { createPropertyAction } from "@module-property/presentation/actions/create-property.action";

import { toast } from "sonner";

import { useForm } from "react-hook-form";

interface CreatePropertyFormData {
  address: string;
  city: string;
  price: number;
  status: PropertyStatus;
}

export const useCreatePropertyForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreatePropertyFormData>({
    mode: "onSubmit",
    defaultValues: {
      address: "",
      city: "",
      price: 0,
      status: PropertyStatusValues.AVAILABLE,
    },
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: CreatePropertyFormData) => {
    const result = await createPropertyAction(data);

    if (result.success) {
      setValue("address", "");
      setValue("city", "");
      setValue("price", 0);
      setValue("status", PropertyStatusValues.AVAILABLE);
      toast.success("La propiedad se ha creado exitosamente");
    } else {
      toast.error(result.error || "Error al crear la propiedad");
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    isSubmitting,
  };
};
