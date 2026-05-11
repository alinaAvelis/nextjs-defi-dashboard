type CardProps = {
	children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
	return (
		<div className="flex flex-col gap-5 rounded-xl border theme-border bg-white dark:bg-gray-950 p-5">
			{children}
		</div>
	);
}
