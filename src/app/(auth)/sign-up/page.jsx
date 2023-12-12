"use client";
import { Icons } from "@/components/ui/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20 text-violet-700" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              href="/sign-in"
            >
              Already have an account? sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form action="" onSubmit={""}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email"></Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": true,
                    })}
                    placeholder="you@example.com"
                  />
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": true,
                    })}
                    placeholder="password"
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
