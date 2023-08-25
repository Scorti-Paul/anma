import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Booking = () => {
  const [bookingTab, setBookingTab] = useState("book");

  return (
    <>
      <aside className="p-6 border border-gray-200 rounded-xl shadow-md">
        <div className=" flex gap-3">
          <div
            className={
              bookingTab === "book"
                ? "bg-[#3B71FE] rounded-full flex items-center px-10 py-2 md:px-14 md:py-3 font-semibold text-lg text-white hover:cursor-pointer  transition-all duration-300"
                : "bg-gray-50 rounded-full flex items-center px-10 py-2 md:px-14 md:py-3 text-lg text-gray-600 hover:cursor-pointer transition-all duration-300"
            }
            onClick={() => setBookingTab("book")}
          >
            Book
          </div>
          <div
            className={
              bookingTab === "inquiry"
                ? "bg-[#3B71FE] rounded-full flex items-center px-10 py-2 md:px-14 md:py-3 font-semibold text-lg text-white hover:cursor-pointer transition-all duration-300"
                : "bg-gray-50 rounded-full flex items-center px-10 py-2 md:px-14 md:py-3 text-lg text-gray-600 hover:cursor-pointer  transition-all duration-300"
            }
            onClick={() => setBookingTab("inquiry")}
          >
            Inquiry
          </div>
        </div>

        {bookingTab === "book" ? (
          <>
            <div className="flex justify-between items-center my-6 transition-all duration-300">
              <p className="text-gray-500 text-sm">
                From{" "}
                <strong className="text-base md:text-lg text-gray-700">
                  Ghc7283.00
                </strong>{" "}
                /night
              </p>
              <p className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <strong>4.8</strong>{" "}
                <span className="text-gray-500">(3reviews)</span>
              </p>
            </div>
            <div className="bg-[#3B71FE] w-full text-center rounded-full px-14 py-3 font-semibold text-lg text-white hover:cursor-pointer">
              Check availability
            </div>
          </>
        ) : (
          <>
            <div className="flex min-h-full flex-1 flex-col justify-center transition-all duration-300">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Name *
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="phone"
                        autoComplete="phone"
                        required
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="note"
                        id="note"
                        cols="30"
                        rows="4"
                        className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-[#3B71FE] w-full text-center rounded-full px-14 py-3 flex  justify-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#3c69d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c69d8]"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </aside>
      <div className="mt-6">
        <img
          src="/assets/images/img11.jpg"
          width={375}
          className="rounded-xl"
          alt=""
        />
      </div>
      <div className="mt-6 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2028087.4407565051!2d-1.3154817964107022!3d6.877628616790023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sketa!5e0!3m2!1sen!2sgh!4v1692473536603!5m2!1sen!2sgh"
          // width="375"
          height="320"
          // style="border:0;"
          className="rounded-xl w-full"
          allowFullScreen=""
          title="keta - volta"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Booking;
