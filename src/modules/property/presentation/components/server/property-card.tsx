import type { PropertyCardProps } from "./property-card.props";

export const PropertyCard = ({
  address = "",
  city = "",
  price = 0,
  status,
}: Readonly<PropertyCardProps>) => (
  <div className="rounded-lg border  border-[#cccccc] bg-[#eeeeee] p-8 text-black min-w-[400px]">
    <ul>
      {address && <li> {address}</li>}
      {city && <li> {city}</li>}
      {price && <li> {price}</li>}
      {status && <li> {status}</li>}
    </ul>
  </div>
);
