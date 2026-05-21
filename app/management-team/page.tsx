import ManagementTeamClient from "./ManagementTeamClient";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/management-team");
}

export default function ManagementTeamPage() {
  return (
    <>
      <ManagementTeamClient />
    </>
  );
}