import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { useEffect } from "react";
import {
  usePatchStudentMutation,
  usePostStudentMutation,
} from "@/services/studentApi";
import toast from "react-hot-toast";
import { toggleform } from "@/services/booleanSlice";

// ✅ 1. Define schema with zod for validation
const studentSchema = z.object({
  createdAt: z.string().optional(),
  firstname: z.string().min(2, "First name is too short"),
  lastname: z.string().min(2, "Last name is too short"),
  gender: z.enum(["Male", "Female", "Other"]),
  birthday: z.string(),
  city: z.string(),
  state: z.string(),
  id: z.string().optional(),
});

export type StudentFormValues = z.infer<typeof studentSchema>;

interface UpdateStudentFormProps {
  onClose: (values: StudentFormValues) => void;
}

export function UpdateStudentForm({ onClose }: UpdateStudentFormProps) {
  const student = useSelector(
    (state: RootState) => state.editablestudent.editableStudent
  );

  const dispatch = useDispatch();
  const [patchStudent] =
    usePatchStudentMutation();

  const [postStudent] = usePostStudentMutation();

  // ✅ 2. Setup React Hook Form
  const form = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema),
  });

  if (student?.id !== undefined) {
    useEffect(() => {
      if (student) {
        form.reset(student); // reset will populate all fields
      }
    }, [student, form]);
  }

  // ✅ 3. Render form
  return (
    <div className="w-3xs lg:w-[400px] bg-gray-100 rounded-lg p-7">
      {/* Cross Icon */}
      <button
        type="button"
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        onClick={() => dispatch(toggleform())} // replace with your close handler
      >
        <X className="h-5 w-5" />
      </button>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log(data)
            if (student?.id) {
              patchStudent({ Id: data.id, ...data })
                .unwrap()
                .then((fulfilled) => {
                  dispatch(toggleform());
                  toast.success("Successfully Updated!");
                })
                .catch((rejected) => {
                  toast.error("Failed to Update");
                  console.error(rejected);
                });
            } else {
              postStudent(data)
                .unwrap()
                .then((fulfilled) => {
                  dispatch(toggleform());
                  toast.success("Successfully Created!");
                })
                .catch((rejected) => {
                  toast.error("Failed to Create");
                  console.error(rejected);
                });
                console.log(data);
                
            }
          })}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Birthday</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(new Date(field.value), "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => {
                        field.onChange(
                          date ? date.toISOString().split("T")[0] : ""
                        );
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Enter state" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Hidden fields (id + createdAt) */}

          {student?.id && <input type="hidden" {...form.register("id")} />}

          {!student?.id && (
            <input
              type="hidden"
              {...form.register("createdAt", {
                value: new Date(Date.now()).toISOString(),
              })}
            />
          )}

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            {student?.id !== undefined ? "Update Student" : "Create Student"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
