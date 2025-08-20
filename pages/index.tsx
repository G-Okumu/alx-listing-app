import { backgroundImage } from "@/constants";
import Card from "@/components/common/Card";

import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  return (
    <div>
      <section className="h-96 w-full cover" style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <h1>Find your favorite place here!” and “The best prices for over 2 million properties worldwide.</h1>

      </section>

      <section>
        <select>
          <option value="">Top Villa</option>
          <option value="">Self Checkin</option>
        </select>
      </section>

       <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Available Properties</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <Card key={index} property={property} />
        ))}
      </section>
    </main>

    </div>
  );
}
