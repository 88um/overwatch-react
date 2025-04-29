"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Hero, Map } from "@/types";
import { createTeam } from "@/actions/create-team";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    tank: z.string().optional(),
    dps: z.string().optional(),
    dps2: z.string().optional(),
    support: z.string().optional(),
    support2: z.string().optional(),
    map: z.string().min(1, "Please choose a map"),
    side: z.enum(["attack", "defense"], { required_error: "Please pick attack or defense" }),

  })
  // 1) “Must leave at least one role empty”
  .refine((data) => {
    const roles = [
      data.tank,
      data.dps,
      data.dps2,
      data.support,
      data.support2,
    ];
    // count how many are non-blank
    const filledCount = roles.filter((r) => r && r.trim() !== "").length;
    // valid if less than all 5 roles are filled
    return filledCount < roles.length;
  }, {
    path: ["support2"],
    message: "Please leave at least one player role empty.",
  })
  // 2) “No duplicate DPS picks”
  .refine((data) => {
    // if either is blank, OK
    if (!data.dps || !data.dps2) return true;
    // otherwise they must differ
    return data.dps !== data.dps2;
  }, {
    path: ["dps2"],
    message: "You already have this character picked.",
  })
  // 3) “No duplicate Support picks”
  .refine((data) => {
    if (!data.support || !data.support2) return true;
    return data.support !== data.support2;
  }, {
    path: ["support2"],
    message: "You already have this character picked.",
  });

interface CompFormProps {
  maps: Map[];
  heroes: Hero[];
  setComp: (data: string) => void;
}

const CompForm: React.FC<CompFormProps> = ({ setComp, heroes, maps }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tank: "",
      dps: "",
      dps2: "",
      support: "",
      support2: "",
      map: "",
      side: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await createTeam({
      ...values,
      side: values.side === "attack" ? "Attack" : "Defense",
    });
    if (response.success) {
      router.push(`/comp/${response.id}`);
    }
    else{
      setComp(response.message??"Error");
    }
  }  


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* MAP SELECT */}
        <FormField
          control={form.control}
          name="map"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Map (Required)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a map" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Maps</SelectLabel>
                      {maps.map((map) => (
                        <SelectItem key={map.name} value={map.name}>
                          {map.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* SIDE SELECT */}
        <FormField
          control={form.control}
          name="side"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Side (Required)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select attack or defense" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Side</SelectLabel>
                      <SelectItem value="attack">Attack</SelectItem>
                      <SelectItem value="defense">Defense</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* TANK SELECT */}
        <FormField
          control={form.control}
          name="tank"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Tank (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a tank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tank Heroes</SelectLabel>
                      {heroes
                        .filter((h) => h.role === "Tank")
                        .map((h) => (
                          <SelectItem key={h.name} value={h.name}>
                            {h.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       {/* DPS SELECT */}
       <FormField
          control={form.control}
          name="dps"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">DPS (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a DPS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>DPS Heroes</SelectLabel>
                      {heroes
                        .filter((h) => h.role === "DPS")
                        .map((h) => (
                          <SelectItem key={h.name} value={h.name}>
                            {h.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* DPS2 SELECT */}
       <FormField
          control={form.control}
          name="dps2"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">DPS (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a DPS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>DPS Heroes</SelectLabel>
                      {heroes
                        .filter((h) => h.role === "DPS")
                        .map((h) => (
                          <SelectItem key={h.name} value={h.name}>
                            {h.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Support SELECT */}
       <FormField
          control={form.control}
          name="support"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Support (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a Support" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Support Heroes</SelectLabel>
                      {heroes
                        .filter((h) => h.role === "Support")
                        .map((h) => (
                          <SelectItem key={h.name} value={h.name}>
                            {h.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* SUpport2 SELECT */}
       <FormField
          control={form.control}
          name="support2"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Support (Optional)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a Support" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Support Heroes</SelectLabel>
                      {heroes
                        .filter((h) => h.role === "Support")
                        .map((h) => (
                          <SelectItem key={h.name} value={h.name}>
                            {h.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="cursor-pointer">Generate comp</Button>
      </form>
    </Form>
  );
};


export default CompForm;
