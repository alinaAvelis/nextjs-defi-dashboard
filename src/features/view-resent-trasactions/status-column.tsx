
import { StatusType } from "@/entities/transaction/model/transaction-status";
import Status from "@/shared/ui/status";

type StatusColumnProps = {
	status: StatusType;
	tsxTime: string;
};

export default function StatusColumn({ status, tsxTime }: StatusColumnProps) {
	return (
		<>
			<Status status={status} />
			<p>{tsxTime}</p>
		</>
	);
}
