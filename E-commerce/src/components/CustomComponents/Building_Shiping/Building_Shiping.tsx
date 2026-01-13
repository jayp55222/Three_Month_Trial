import React from "react";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const AddressSection = ({ title, setupStatus }) => {
  const linkPath = title.includes("Billing")
    ? "/MyAccount/addresses/billing"
    : "/MyAccount/addresses/shipping";
  return (
    <div className="flex-1 min-w-0 sm:min-w-[45%]">
      <div className="flex justify-between items-center pb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Link
          to={linkPath}
          className="flex items-center text-sm text-gray-700 hover:text-gray-900"
        >
          <MoveRight className="mr-1 h-3 w-3" />
          Add {title}
        </Link>
      </div>
      <Separator className="mb-4 bg-gray-300" />
      <p className="text-gray-600 text-sm italic">{setupStatus}</p>
    </div>
  );
};

const Building_Shiping = () => {
  return (
    <>
      <div className="flex sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
        <div className="w-full mt-8">
          <p className="text-sm text-gray-700 mb-6 text-left">
            The following addresses will be used on the checkout page by
            default.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0 justify-between">
            {/* Billing Address Section */}
            <AddressSection
              title="Billing address"
              setupStatus="You have not set up this type of address yet."
            />

            {/* Shipping Address Section */}
            <AddressSection
              title="Shipping address"
              setupStatus="You have not set up this type of address yet."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Building_Shiping;
