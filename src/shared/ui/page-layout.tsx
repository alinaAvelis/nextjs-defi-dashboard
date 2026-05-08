
type PageLayoutProps = {
	title: string;
	children: React.ReactNode;
};

export default function PageLayout({ title, children }: PageLayoutProps) {
	return (
		<div className="min-h-screen bg-slate-200 p-6">
			{/* Page Header */}
			<h1 className="text-2xl font-bold text-gray-900">{title}</h1>

			{/* Page Content */}
			{children}
		</div>
	);
}
