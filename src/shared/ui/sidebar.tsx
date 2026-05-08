import NavLink from "@/shared/ui/navigation-link";
import { navigation } from "@/shared/config/navigation";

export default function Sidebar() {
	const nav = navigation.map((item) => (
		<NavLink
			key={item.href}
			href={item.href}
			text={item.label}
		/>
	));

	return (
		<aside className="h-screen w-64 border-r border-slate-500 bg-white p-4">
			<nav className="flex flex-col gap-2">
				{nav}
			</nav>
		</aside>
	);
}
