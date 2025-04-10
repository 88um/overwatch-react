'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuthStore } from "@/stores/useAuthStore";
import toast from "react-hot-toast";

// Schema
const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  rating: z.enum(["5", "4", "3", "2", "1"]),
  report: z.string().min(10, "Report must be at least 10 characters"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

const ReviewForm: React.FC = () => {
   const { isLoggedIn, login, logout, setUserName } = useAuthStore();
   const disabled = !isLoggedIn;
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      rating: "5",
      report: "",
    },
  });

  const onSubmit = (data: ReviewFormValues) => {
    if (disabled){
        toast.error("You have to be loged in to submit a review!")
    }
    console.log("Review Submitted:", data);
    // redirect("/thank-you"); // Optional
  };

  return (
    <div className="review-card mt-5 bg-carbon p-6 rounded-xl text-black ">
      <h3 className="text-heroic text-xl font-semibold mb-4">Submit Your Report</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Agent Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" className="bg-dark text-black" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Rating */}
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="text-black">
                  <FormLabel className="text-black">Mission Rating</FormLabel>
                  <Select {...field}>
                    <FormControl>
                      <SelectTrigger className="bg-dark ">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5">★★★★★</SelectItem>
                      <SelectItem value="4">★★★★☆</SelectItem>
                      <SelectItem value="3">★★★☆☆</SelectItem>
                      <SelectItem value="2">★★☆☆☆</SelectItem>
                      <SelectItem value="1">★☆☆☆☆</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Field Report */}
          <FormField
            control={form.control}
            name="report"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Field Report</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Enter your review"
                    className="bg-dark text-black"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={disabled}>
            {disabled ? "Log in to submit a review!" : "Submit Report"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReviewForm;
