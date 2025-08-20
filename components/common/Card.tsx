import React from "react";

import Link from "next/link";
import Image from "next/image";

import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

const Card: React.FC<Props> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`} className="rounded-lg overflow-hidden shadow-md bg-white">
      <Image
        src={property.image}
        alt={property.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{property.name}</h2>
        <p className="text-sm text-gray-600 mb-2">${property.price.toLocaleString()}</p>
        <p className="text-sm text-yellow-500">⭐ {property.rating.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default Card;
