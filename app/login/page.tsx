"use client";
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [typ, setTyp] = useState(true);
  const { login, setUserName} = useAuthStore();

  return (
    <div className="flex w-full justify-center px-4 py-8">
      <div className="border-2 border-black outline p-4 md:p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
          {typ ? "Login Form" : "Sign up Form"}
        </h1>
        
        {typ ? (
          <div>
            <LoginForm login={login} setUserName={setUserName}/>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4 md:mt-6">
              <p className="text-sm md:text-base">Don&apos;t have an account?</p>
              <button
                className="text-sky-500 hover:text-sky-600 transition-colors"
                onClick={() => setTyp(!typ)}
              >
                Sign up
              </button>
            </div>
          </div>
        ) : (
          <div>
            <SignUpForm login={login} setUserName={setUserName}/>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4 md:mt-6">
              <p className="text-sm md:text-base">Already have an account?</p>
              <button
                className="text-sky-500 hover:text-sky-600 transition-colors"
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