'use client';


import toast from 'react-hot-toast';
import { logIn } from "@/actions/log-in";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username : z.string(),
    password : z.string()
})

interface LoginFormProps{
  login : () => void;
  setUserName : (username : string) => void;
}
const LoginForm: React.FC<LoginFormProps> = ({login, setUserName}) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
      })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await logIn(values.username, values.password)
        if (response?.success){
            login()
            setUserName(response?.username ?? "")
            toast.success(response?.message)
            router.push("/heroes")
        }
        else{
            toast.error(response?.message)
        }
      }
  return (
    <>
   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl'>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl'>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type='password'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
  );
};

export default LoginForm;