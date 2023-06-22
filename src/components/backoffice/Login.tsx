"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoginUser } from "@/lib/usershandler";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

function BackofficeLogin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function Login() {
    setLoading(true);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const account = { email, password };

    const data = await LoginUser(account);
    if (data.user) {
      router.refresh();
    } else {
      setErr(data.message);
      setLoading(false);
      console.log(data);
    }
  }
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>FAKESTORE BACKOFFICE</CardTitle>
        <CardDescription className="text-xs">
          ระบบจัดการสำหรับแอดมิน กรุณาเข้าสู่ระบบโดยบัญชีที่มีสิทธิ์เข้าถึง
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={Login} className="md:w-[400px]">
          <p className="text-red-500 text-xs text-center">{err}</p>
          <Input
            type="email"
            placeholder="example@mail.com"
            className="my-2"
            ref={emailRef}
          />
          <Input
            type="password"
            placeholder="password"
            className="my-2"
            ref={passwordRef}
          />
          {/* <div className="flex items-center my-4">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="ml-1 text-xs font-normal">
                  จดจำฉันไว้ในระบบ
                </Label>
              </div> */}
          <Button className="w-full mt-1" onClick={Login} disabled={loading}>
            {loading ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> กำลังโหลด
              </div>
            ) : (
              "เข้าสู่ระบบ"
            )}
          </Button>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                ต้องการแจ้งปัญหา ?
              </span>
            </div>
          </div>
        </form>
        <Button className="w-full " variant="outline">
          แจ้งปัญหา
        </Button>
      </CardContent>
      {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
    </Card>
  );
}

export default BackofficeLogin;
