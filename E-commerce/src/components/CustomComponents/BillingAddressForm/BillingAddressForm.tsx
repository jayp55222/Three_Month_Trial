import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  companyName: z.string().optional(),
  country: z.string().min(1, { message: "Country is required." }),
  streetAddress: z.string().min(1, { message: "Street address is required." }),
  apartment: z.string().optional(),
  postcode: z.string().optional(),
  townCity: z.string().min(1, { message: "Town / City is required." }),
  phone: z.string().min(10, { message: "Phone number is required and must be at least 10 digits." }),
  emailAddress: z.string().email({ message: "A valid email address is required." }),
});

const BillingAddressForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAddress: "",
      apartment: "",
      postcode: "",
      townCity: "",
      phone: "",
      emailAddress: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully with data:", data);
    // You would typically send this data to a backend API here.
  };

  const getInputBorderClass = (field) => {
    return errors[field] ? "border-red-500" : "border-gray-300";
  };

  const InputField = ({ label, name, type = "text", placeholder, isRequired = false }) => (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border ${getInputBorderClass(name)}  focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200`}
        {...register(name)}
      />
      {errors[name] && <p className="text-red-500 text-xs italic mt-1">{errors[name].message}</p>}
    </div>
  );
  
  const FormRow = ({ children }) => (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
      {children}
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 text-left font-jost">
      <div className="w-full max-w-4xl bg-white p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Billing address</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormRow>
            <InputField label="First name" name="firstName" isRequired />
            <InputField label="Last name" name="lastName" isRequired />
          </FormRow>

          <InputField label="Company name (optional)" name="companyName" placeholder="Company name" />
          
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="country" className="text-sm font-medium text-gray-700">
              Country / Region<span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className={`w-full px-4 py-2 border ${getInputBorderClass("country")}  focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200`}
              {...register("country")}
            >
              <option value="">Select a country...</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
            {errors.country && <p className="text-red-500 text-xs italic mt-1">{errors.country.message}</p>}
          </div>

          <InputField label="Street address" name="streetAddress" placeholder="House number and street name" isRequired />
          <InputField label="Apartment, suite, unit, etc. (optional)" name="apartment" placeholder="Apartment, suite, unit, etc." />

          <FormRow>
            <InputField label="Postcode / ZIP (optional)" name="postcode" placeholder="Postcode / ZIP" />
            <InputField label="Town / City" name="townCity" placeholder="Town / City" isRequired />
          </FormRow>
          
          <InputField label="Phone" name="phone" isRequired />
          
          <InputField label="Email address" name="emailAddress" placeholder="example@email.com" isRequired />

          <button
            type="submit"
            className="w-auto px-6 py-3 bg-black text-white font-semibold  hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            SAVE ADDRESS
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddressForm;
