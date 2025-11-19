"use client";

import type { PropertyStatus } from "@module-property/domain/types";

import { PropertyStatus as PropertyStatusValues } from "@module-property/domain/enums/property-status.enum";

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
    formState: { errors },
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

  const onSubmit = (data: CreatePropertyFormData) => {
    console.log(data);
    setValue("address", "");
    setValue("city", "");
    setValue("price", 0);
    setValue("status", PropertyStatusValues.AVAILABLE);
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
};
