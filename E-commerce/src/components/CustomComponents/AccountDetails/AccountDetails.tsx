import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";

const passwordSchema = z
  .string()
  .optional()
  .refine(
    (val) => !val || val.length >= 8,
    "Password must be at least 8 characters long."
  );

const AccountFormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    displayName: z
      .string()
      .min(1, "Display name is required.")
      .max(50, "Display name must be 50 characters or less."),
    email: z.string().email("Invalid email address."),
    currentPassword: z.string().optional(),
    newPassword: passwordSchema,
    confirmNewPassword: passwordSchema,
  })
  .refine(
    (data) => {
      // Check if a new password is set and ensure it matches the confirmation
      if (data.newPassword && data.newPassword.length > 0) {
        return data.newPassword === data.confirmNewPassword;
      }
      // If no new password is set, confirmation isn't strictly necessary (though we might enforce it if currentPassword is provided)
      return true;
    },
    {
      message: "New passwords do not match.",
      path: ["confirmNewPassword"], // Set the error on the confirmation field
    }
  )
  .refine(
    (data) => {
      // If newPassword is provided, currentPassword must also be provided for security (a common pattern)
      if (data.newPassword && data.newPassword.length > 0) {
        return data.currentPassword && data.currentPassword.length > 0;
      }
      return true; // No new password means current password is not needed
    },
    {
      message: "Current password is required to set a new password.",
      path: ["currentPassword"],
    }
  );

type AccountFormValues = z.infer<typeof AccountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export function AccountDetailsForm() {
  const [isshowcurrentpass, setIsShowCurrentPass] = useState(false);
  const [isshownewpass, setIsShowNewPass] = useState(false);
  const [isshowconforirmpass, setIsShowConfirmPass] = useState(false);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues,
    mode: "onBlur", // Validate on blur for better UX
  });

  function onSubmit(data: AccountFormValues) {
    console.log("Form submitted with data:", data);
    alert("Form Submitted! Check console for data.");
  }

  const PasswordInput = ({
    field,
    placeholder,
    setterfunction,
    boolean,
  }: any) => (
    <div className="relative">
      <Input
        type={boolean ? "text" : "password"}
        className="rounded-none"
        placeholder={placeholder}
        {...field}
        value={field.value || ""}
      />

      {boolean ? (
        <Eye
          className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
          aria-label="Toggle password visibility"
          onClick={() => setterfunction((prev) => !prev)}
        />
      ) : (
        <EyeOff
          className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
          aria-label="Toggle password visibility"
          onClick={() => setterfunction((prev) => !prev)}
        />
      )}
    </div>
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl mx-auto p-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl className="rounded-none">
                  <Input {...field} />
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* --- Display Name --- */}
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Display name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="rounded-none">
                <Input {...field} />
              </FormControl>
              <FormDescription className="text-sm text-gray-500 mt-1">
                This will be how your name will be displayed in the account
                section and in reviews
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Email Address --- */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email address <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl className="rounded-none">
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Password Change Section --- */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Password change</h2>

        {/* Current Password */}
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Current password (leave blank to leave unchanged)
              </FormLabel>
              <FormControl className="rounded-none">
                <PasswordInput
                  field={field}
                  placeholder=""
                  setterfunction={setIsShowCurrentPass}
                  boolean={isshowcurrentpass}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* New Password */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                New password (leave blank to leave unchanged)
              </FormLabel>
              <FormControl className="rounded-none">
                <PasswordInput
                  field={field}
                  placeholder=""
                  setterfunction={setIsShowNewPass}
                  boolean={isshownewpass}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm New Password */}
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm new password</FormLabel>
              <FormControl className="rounded-none">
                <PasswordInput
                  field={field}
                  placeholder=""
                  setterfunction={setIsShowConfirmPass}
                  boolean={isshowconforirmpass}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Save Changes Button --- */}
        <Button
          type="submit"
          className="bg-black text-white hover:bg-gray-800 w-48 h-12 mt-6 rounded-none"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "SAVING..." : "SAVE CHANGES"}
        </Button>
      </form>
    </Form>
  );
}
