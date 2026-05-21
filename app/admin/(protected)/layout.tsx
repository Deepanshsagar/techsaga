// app/admin/layout.tsx
import Link from "next/link";
import { redirect } from "next/navigation";
import Provider from "@/components/SessionProvider";
import {
  LayoutDashboard,
  FolderKanban,
  Layers3,
  BriefcaseBusiness,
  Settings,
  ChevronRight,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { auth } from "@/app/lib/auth";
import LogoutButton from "@/components/LogoutBtn";

const SIDEBAR_LINKS = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  // {
  //   label: "Categories",
  //   href: "/admin/categories",
  //   icon: FolderKanban,
  // },
  // {
  //   label: "Sub Categories",
  //   href: "/admin/sub-categories",
  //   icon: Layers3,
  // },
  // {
  //   label: "Services",
  //   href: "/admin/services",
  //   icon: BriefcaseBusiness,
  // },
  {
    label: "Meta Data",
    href: "/admin/meta",
    icon: BriefcaseBusiness,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();

  async function handleLogout() {
    await signOut({
      callbackUrl: "/admin",
      redirect: true,
    })
  }

  const session = await auth();

  // Not logged in
  if (!session) {
    redirect("/admin");
  }

  return (
    <Provider>
      <div className="min-h-screen bg-[#f5f7fb] flex">
        {/* Sidebar */}
        <aside className="w-[280px] bg-white border-r border-black/5 flex flex-col">
          {/* Logo */}
          <div className="h-20 border-b border-black/5 flex items-center px-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                CMS Admin
              </h1>

              <p className="text-sm text-gray-500">
                Management Panel
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex-1 py-6 px-4">
            <div className="space-y-2">
              {SIDEBAR_LINKS.map((item) => {
                const Icon = item.icon;

                const active = false
                // const active =
                //   pathname === item.href ||
                //   pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                    group flex items-center justify-between
                    rounded-2xl px-4 py-3
                    transition-all duration-300
                    ${active
                        ? "bg-black text-white shadow-lg"
                        : "hover:bg-black/5 text-gray-700"
                      }
                  `}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                        w-10 h-10 rounded-xl
                        flex items-center justify-center
                        transition-all duration-300
                        ${active
                            ? "bg-white/10"
                            : "bg-black/[0.04]"
                          }
                      `}
                      >
                        <Icon size={20} />
                      </div>

                      <span className="font-medium">
                        {item.label}
                      </span>
                    </div>

                    <ChevronRight
                      size={18}
                      className={`
                      transition-all duration-300
                      ${active
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }
                    `}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom */}
          <div className="p-4 border-t border-black/5">
            <div className="rounded-2xl bg-black text-white p-5">
              <p className="text-sm opacity-70 mb-1">
                Logged in as
              </p>

              <h3 className="font-semibold">
                Admin User
              </h3>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <header className="h-20 bg-white border-b border-black/5 px-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Admin Panel
              </h2>

              <p className="text-sm text-gray-500">
                Manage categories, services & content
              </p>
            </div>

            <div className="flex items-center gap-4">
              <LogoutButton />

            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </Provider>
  );
}