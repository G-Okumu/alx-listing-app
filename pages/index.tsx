import { backgroundImage } from "@/constants";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/common/Card";

import { PROPERTYLISTINGSAMPLE } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <section style={{
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
