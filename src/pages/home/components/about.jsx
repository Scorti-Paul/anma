import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { LuBedSingle } from "react-icons/lu";
import Booking from "../../../components/booking";
import {
  PuzzlePieceIcon,
  HomeIcon,
  CakeIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <>
      <div className="mt-24">
        <div className="flex gap-1 mb-3 ">
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <StarIcon className="h-4 w-4 text-yellow-500" />
        </div>
        <span className="border border-blue-400/30 text-blue-600 px-3 py-2 rounded-md text-lg font-semibold">
          4.8/5
        </span>
        <span className="text-lg font-semibold mx-4 inline-block ">
          Excellent
        </span>
        <span className="text-lg text-blue-500">(3 reviews)</span>
      </div>

      <div className="relative">
        <div className="mt-12 md:max-w-4xl">
          <div className="h-0.5 w-full bg-gray-100 mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            About hotel
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Whether you’re a tourist, going on a business trip or traveling to
            Keta and it’s environ towns in the Volta Region for any occasion,
            Akpe Na Mawu Hospitality Centre is a great choice for accommodation.
            The excitement of the city center is only away, with its convenient
            location, the property offers easy access to the city’s must-see
            destinations.
          </p>
          <p className="text-gray-500 text-base md:text-lg my-3">
            {" "}
            Akpe Na Mawu Hospitality Centre is known for its quality services,
            and we live up to expectations. Facilities like free Wi-Fi in all
            rooms, 24-hour security, daily housekeeping, laundromat, a summer
            hat to relax under and taxi services are readily available for the
            convenience of each guest.
          </p>
          <p className="text-gray-500 text-base md:text-lg">
            {" "}
            Experience high quality room facilities during your stay here. Some
            rooms include air conditions, whilst all rooms provide television,
            fans, complimentary tea, towels, soaps and clothes rack and hot
            water to help guests recharge after a long day. The property also
            provides hosts of recreational offerings like oware, ludo, etc to
            ensure guests have plenty to do during guest’s stay. Akpe Na Mawu
            Hospitality Centre is a smart choice for travelers to Volta region,
            offering a relaxed and hassle-free stay every time.
          </p>

          <div className="h-0.5 w-full bg-gray-100 my-8"></div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Hotel Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <LuBedSingle
                size={32}
                strokeWidth={1}
                className="text-gray-500"
              />
              <p className="text-gray-500 text-sm md:text-base">4 bedrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <HomeModernIcon
                size={32}
                strokeWidth={1}
                className="text-gray-500 w-8"
              />
              <p className="text-gray-500 text-sm md:text-base">Laundry room</p>
            </div>
            <div className="flex items-center gap-2">
              <CakeIcon
                size={32}
                strokeWidth={1}
                className="text-gray-500 w-8"
              />
              <p className="text-gray-500 text-sm md:text-base">Dining</p>
            </div>
            <div className="flex items-center gap-2">
              <BuildingStorefrontIcon
                size={32}
                strokeWidth={1}
                className="text-gray-500 w-8"
              />
              <p className="text-gray-500 text-sm md:text-base">Kitchen</p>
            </div>
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon
                size={22}
                strokeWidth={1}
                className="text-gray-500 w-8"
              />
              <p className="text-gray-500 text-sm md:text-base">
                Mini Game Centre
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon strokeWidth={1} className="text-gray-500 w-8" />
              <p className="text-gray-500 text-sm md:text-base">Summer hat</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-0.5 w-full bg-gray-100 mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Rules</h2>
            <div>
              <p className="flex gap-44 mb-3">
                <span className="text-gray-500 text-sm">Check In </span>
                <span className="text-gray-500 text-sm">12:00pm</span>
              </p>
              <p className="flex gap-40">
                <span className="text-gray-500 text-sm">Check Out</span>
                <span className="text-gray-500 text-sm">12:00pm</span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-0.5 w-full bg-gray-100 mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Reviews</h2>
            <div className="border border-gray-300 bg-gray-50 rounded-2xl p-6">
              <p className="flex gap-4 items-center mb-3">
                <StarIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-gray-700 text-lg md:text-2xl font-bold">
                  4.8/5 Excellent
                </span>
                <span className="text-gray-500 ">(3 reviews)</span>
              </p>
              <div className="grid md:grid-cols-9 gap-5">
                <div className="col-span-3 gap-4 items-center">
                  <p className="text-gray-500  font-semibold">Cleanliness</p>
                  <div className="h-1 w-60 bg-green-500 rounded-full">
                    <span></span>
                  </div>
                  <p className="text-gray-500">5/5</p>
                </div>
                <div className="col-span-3 gap-4 justify-between items-center">
                  <p className="text-gray-500 font-semibold">Accuracy</p>
                  <div className="h-1 w-60 bg-green-500 rounded-full">
                    <span></span>
                  </div>
                  <p className="text-gray-500">4.3/5</p>
                </div>
                <div className="col-span-3 gap-4 justify-between items-center">
                  <p className="text-gray-500 font-semibold">Communication</p>
                  <div className="h-1 w-60 bg-green-500 rounded-full">
                    <span></span>
                  </div>
                  <p className="text-gray-500">5/5</p>
                </div>
                <div className="col-span-3 gap-4 justify-between items-center">
                  <p className="text-gray-500 font-semibold">Location</p>
                  <div className="h-1 w-60 bg-green-500 rounded-full">
                    <span></span>
                  </div>
                  <p className="text-gray-500">4.7/5</p>
                </div>
                <div className="col-span-3 gap-4 justify-between items-center">
                  <p className="text-gray-500 font-semibold">Check-in</p>
                  <div className="h-1 w-60 bg-green-500 rounded-full">
                    <span></span>
                  </div>
                  <p className="text-gray-500">4.7/5</p>
                </div>
                <div className="col-span-3 gap-4 justify-between items-center">
                  <p className="text-gray-500 font-semibold">Value</p>
                  <div className="h-1 w-60 bg-green-500 rounded-full">
                    <span></span>
                  </div>
                  <p className="text-gray-500">5/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:absolute md:top-0 md:right-10 mt-9 md:mt-0">
          <Booking />
        </div>
      </div>
    </>
  );
};

export default About;
