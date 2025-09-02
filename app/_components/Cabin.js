import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24 overflow-hidden">
      <div className="relative scale-[1.15] -translate-x-3 ">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className=" text-accent-100 font-black text-5xl mb-5 text-center  bg-primary-950 p-6 pb-1 ">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-5">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
