import { LayoutDashboard, Settings, Info } from "lucide-react";

function Sider() {
    return (
        <aside className="w-64 bg-grey-600 text-white min-h-screen shadow-lg">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-wider text-center text-white">
                        ADMIN PANEL
                    </h1>
                    <div className="mt-2 h-1 w-16 bg-red-700 mx-auto rounded-full" />
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-red-700 hover:pl-6 group"
                            >
                                <LayoutDashboard className="w-5 h-5 text-red-500 group-hover:text-white" />
                                <span className="font-medium group-hover:text-white">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-red-700 hover:pl-6 group"
                            >
                                <Settings className="w-5 h-5 text-red-500 group-hover:text-white" />
                                <span className="font-medium group-hover:text-white">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-red-700 hover:pl-6 group"
                            >
                                <Info className="w-5 h-5 text-red-500 group-hover:text-white" />
                                <span className="font-medium group-hover:text-white">Tentang Apps</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sider;
