import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { CardsCreateAccount } from "@/components/signup/SignUp"
import { getUsers } from "@/actions/register"
import Login from "@/components/Login"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default async function LoginPage() {
  const users=await getUsers()
  return (
    <>
  
    <div className="container relative min-h-[600px] flex-col items-center justify-center md:grid lg:max-w-none mt-[8rem] lg:mt-0 md:mt-0 lg:grid-cols-2 lg:px-0 bg-1">
      <Link
        href="/register"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-[15%] lg:block md:block hidden"
        )}
      >
       Register
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 dark:text-white text-black lg:flex dark:border-r ">
      <img className="blur-[0px] object-cover w-full h-full rounded-sm" src="https://img.freepik.com/premium-photo/circle-that-is-white-background-with-circle-middle_729149-142786.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid" alt="" />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
            Login Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter correct Credentials to Login 
            </p>
          </div>
          <Login users={users}/>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to {" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
             register
            </Link>{" "}
            {" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

