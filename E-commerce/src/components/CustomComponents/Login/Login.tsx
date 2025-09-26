"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username or email is required." })
    .refine(
      (value) => {
        // Simple email regex for checking valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const usernameRegex =/^[a-zA-Z0-9_.-]+$/

        // Allow if it's a valid email or just a non-email string (assumed username)
        return emailRegex.test(value) || usernameRegex.test(value);
      },
      {
        message: "Must be a valid email or username.",
      }
    ),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  remember: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: FormValues) {
    console.log("✅ Form Data:", values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-jost">
      <div className="bg-white p-8 shadow-2xl max-w-sm w-full border border-gray-200">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Username or Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="rounded-none">
                    <Input
                      placeholder="Enter your username or email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Password <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="rounded-none">
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2">
                    <FormControl>
                      <Checkbox className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-gray-600">Remember Me</FormLabel>
                  </FormItem>
                )}
              />

              <a
                href="#"
                className="text-sm text-black hover:text-shadow-gray-800 font-medium transition duration-200"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gray-900 text-white rounded-none py-3 px-4 font-bold text-sm transition duration-300 transform hover:bg-[#DB3C3C]"
            >
              LOG IN
            </Button>
          </form>
        </Form>

        {/* Register Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600">New customer?</span>
          <a
            href="#"
            className="text-black hover:text-shadow-gray-800 font-medium ml-1 transition duration-200"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
