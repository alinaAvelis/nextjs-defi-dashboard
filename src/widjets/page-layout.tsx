
type PageLayoutProps = {
	title: string;
	children: React.ReactNode;
};

export default function PageLayout({ title, children }: PageLayoutProps) {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
			{/* Page Header */}
			<h1 className="text-2xl font-bold">{title}</h1>

			{/* Page Content */}
			{children}
		</div>
	);
}
