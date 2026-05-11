import { StatusType } from "@/entities/transaction/model/transaction-status";

interface StatusProps {
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  pending: "bg-orange-100 text-orange-700 border-orange-300",
  confirmed: "bg-green-100 text-green-700 border-green-300",
  failed: "bg-red-100 text-red-700 border-red-300",
};

export default function Status({ status }: StatusProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}