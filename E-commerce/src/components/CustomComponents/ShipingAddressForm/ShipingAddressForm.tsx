import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Zod schema for form validation
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  company: z.string().optional(),
  country: z.string().min(1, { message: "Please select a country." }),
  streetAddress: z.string().min(5, { message: "Street address is required." }),
  apartment: z.string().optional(),
  postcode: z.string().min(4, { message: "Postcode is required." }),
  town: z.string().min(2, { message: "Town / City is required." }),
});

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
];

const ShipingAddressForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      country: "",
      streetAddress: "",
      apartment: "",
      postcode: "",
      town: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // In a real app, you would submit this data to your backend
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans p-4">
      <div className="max-w-4xl mx-auto p-8 bg-white w-full">
        <h1 className="text-2xl font-bold mb-6">Shipping address</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      First name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl className="rounded-none" >
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Last name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl className="rounded-none">
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name (optional)</FormLabel>
                  <FormControl className="rounded-none">
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Country / Region <span className="text-red-500">*</span>
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="rounded-none">
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? countries.find(
                                (country) => country.value === field.value
                              )?.label
                            : "Select a country / region..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                      <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          {countries.map((country) => (
                            <CommandItem
                              value={country.label}
                              key={country.value}
                              onSelect={() => {
                                form.setValue("country", country.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  country.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {country.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Street address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="rounded-none">
                    <Input
                      placeholder="House number and street name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apartment"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="rounded-none">
                    <Input
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Postcode / ZIP <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl className="rounded-none">
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="town"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Town / City <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl className="rounded-none">
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto mt-4 rounded-none">
              Save Address
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ShipingAddressForm;
