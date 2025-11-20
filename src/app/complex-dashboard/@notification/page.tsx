import { Card } from "@/components/card";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <Card>
      <div>NotificationPage</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
