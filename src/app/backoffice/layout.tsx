import BackofficeNavbar from "@/components/backoffice/layout/navbar";
import Sidebar from "@/components/backoffice/layout/sidebar";
import Logout from "@/components/logout/Logout";
import { getAdminUser } from "@/lib/usershandler";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function BackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const adminUser = await getAdminUser(token?.value || "");

  if (token && adminUser.isAdmin === true)
    return (
      <section>
        <div className=" h-screen">
          <Sidebar>
            <BackofficeNavbar>{children}</BackofficeNavbar>
          </Sidebar>
        </div>
      </section>
    );

  return <section>{children}</section>;
}
