import BackofficeLogin from "@/components/backoffice/Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function BackOfficeLoginPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (token) {
    redirect("/backoffice");
  }
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 to-slate-500">
      <div className="flex h-full items-center justify-center">
        <BackofficeLogin />
        <div className="fixed bottom-0 text-xs text-white">
          FAKESTORE | Copyright &copy; 2023
        </div>
      </div>
    </div>
  );
}

export default BackOfficeLoginPage;
