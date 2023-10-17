"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Ideile, documentele și planurile dumneavoastră. Unificat. Bine ați venit
        la <span className="underline">Notite</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notite este spațiul de lucru conectat în care <br />
        se lucrează mai bine și mai repede.
      </h3>
      <Button>
        Introduceți Notite
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
      
    </div>
  );
};

export default Heading;
