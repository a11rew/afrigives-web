import React, { useState } from "react";

const HowItWorks = () => {
  const [active, setActive] = useState<1 | 2 | 3 | 4>(2);

  return (
    <div>
      <h3 className="mb-16 text-[1.9rem] leading-[39.58px] md:text-center">
        See <span className="text-[#006633]">how Afrigives works</span>
      </h3>
      <div className="flex h-[500px] md:justify-center">
        <div className="hidden grid-rows-4 md:grid ">
          <div className="flex flex-col justify-center row-span-1 row-start-2 text-right">
            <h1 className="text-xl font-medium md:text-2xl">Find a cause</h1>

            <p className="font-medium opacity-[48%]">
              Purus a, ut consequat vulputate sit volutpat.
            </p>
          </div>
          <div className="flex flex-col justify-center row-span-1 row-start-4 text-right">
            <h1 className="text-xl font-medium md:text-2xl">Donate</h1>

            <p className="font-medium opacity-[48%]">
              Diam viverra gravida dis commodo ipsum. Tellus.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-4 bg-[#E0E0E0] w-1 mr-8 md:mx-16">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className={`row-start-${idx} row-span-1 ${
                active === idx && "bg-[#006633]"
              }`}
            />
          ))}
        </div>
        <div className="grid grid-rows-4">
          <div className="flex flex-col justify-center row-span-1 row-start-1">
            <h1 className="text-xl font-medium md:text-2xl">
              Create an account
            </h1>

            <p className="font-medium opacity-[48%]">
              Purus a, ut consequat vulputate sit volutpat.
            </p>
          </div>

          <div className="flex flex-col justify-center row-span-1 row-start-3">
            <h1 className="text-xl font-medium md:text-2xl">Cash or kind?</h1>

            <p className="font-medium opacity-[48%]">
              Diam viverra gravida dis commodo ipsum. Tellus.
            </p>
          </div>

          {/* Visible on small screens */}
          <div className="flex flex-col justify-center row-span-1 row-start-2 md:hidden">
            <h1 className="text-xl font-medium md:text-2xl">Find a cause</h1>

            <p className="font-medium opacity-[48%]">
              Purus a, ut consequat vulputate sit volutpat.
            </p>
          </div>
          <div className="flex flex-col justify-center row-span-1 row-start-4 md:hidden">
            <h1 className="text-xl font-medium md:text-2xl">Donate</h1>

            <p className="font-medium opacity-[48%]">
              Diam viverra gravida dis commodo ipsum. Tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
