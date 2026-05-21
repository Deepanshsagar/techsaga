import { getMeta } from "@/app/lib/getMeta";
import CancellationAndRefundPolicy from "./CancellationAndRefundPolicy";


export async function generateMetadata() {
  return getMeta("/cancellation-and-refund-policy");
}

export default function CancellationRefundPolicyPage() {
  return (
    <CancellationAndRefundPolicy />
  );
}