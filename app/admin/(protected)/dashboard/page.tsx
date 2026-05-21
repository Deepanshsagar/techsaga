// app/admin/dashboard/page.tsx

import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin");
  }

  return <DashboardClient />;
}