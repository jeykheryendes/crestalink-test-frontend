"use client";

import { useCreatePropertyForm } from "./create-property-form.hook";

export const CreatePropertyForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useCreatePropertyForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <div className="flex gap-2 justify-space-between">
        <div className="flex flex-col gap-2">
          <input
            className="border border-solid border-[#cccccc] rounded-md p-2"
            type="text"
            placeholder="Dirección"
            {...register("address", {
              required: "La dirección es requerida",
              minLength: {
                value: 3,
                message: "La dirección debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="border border-solid border-[#cccccc] rounded-md p-2"
            type="text"
            placeholder="Ciudad"
            {...register("city", {
              required: "La ciudad es requerida",
              minLength: {
                value: 3,
                message: "La ciudad debe tener al menos 3 caracteres",
              },
            })}
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="border border-solid border-[#cccccc] rounded-md p-2"
            type="number"
            placeholder="Precio"
            {...register("price", {
              required: "El precio es requerido",
              min: {
                value: 1,
                message: "El precio debe ser mayor a 1",
              },
            })}
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <select
            className="border border-solid border-[#cccccc] rounded-md p-2"
            id="status"
            {...register("status")}
          >
            <option value="available">Disponible</option>
            <option value="reserved">Reservada</option>
            <option
              className="border border-solid border-[#cccccc] rounded-md p-2"
              value="sold"
            >
              Vendida
            </option>
          </select>
        </div>
      </div>
      <button
        className="py-2 px-4 bg-black rounded-lg text-white cursor-pointer"
        type="submit"
      >
        Crear propiedad
      </button>
    </form>
  );
};
