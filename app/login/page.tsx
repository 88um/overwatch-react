"use client";
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  const [typ, setTyp] = useState(true);
  const router = useRouter();
  const { isLoggedIn} = useAuthStore();
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return (
    <div className="flex w-full justify-center">
      <div className="border-2 border-black outline p-5 rounded-2xl m-20 w-1/2">
        <h1 className="text-5xl bold mb-10">{typ ? "Login Form" : "Sign up Form"}</h1>
        {typ ? (
          <div>
            <LoginForm />
            <div className="flex items-center justify-center m-5 space-x-2">
              <p>Don't have an account? </p>
              <button
                className="bg-transparent text-sky-500 cursor-pointer"
                onClick={() => setTyp(!typ)}
              >
                Sign up
              </button>
            </div>
          </div>
        ) : (
          <div>
            <SignUpForm />
            <div className="flex items-center justify-center m-5 space-x-2">
              <p>Already have an account? </p>
              <button
                className="bg-transparent text-sky-500 cursor-pointer"
                onClick={() => setTyp(!typ)}
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
