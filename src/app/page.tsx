import type { Property } from "@module-property/domain/entities/property.entity";

import { getProperties } from "@module-property/infrastructure/services/get-properties.service";

import { CreatePropertyForm } from "@module-property/presentation/components/client/create-property-form";
import { PropertyCard } from "@module-property/presentation/components/server/property-card";

export default async function RootPage() {
  const { data: properties } = await getProperties();

  return (
    <main className="bg-background flex w-full flex-col items-center justify-center gap-4 py-4">
      <CreatePropertyForm />
      {properties.map((property: Property) => (
        <PropertyCard
          key={property.id}
          address={property.address}
          city={property.city}
          price={property.price}
          status={property.status}
        />
      ))}
    </main>
  );
}
