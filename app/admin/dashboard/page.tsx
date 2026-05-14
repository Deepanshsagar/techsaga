// app/admin/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FolderKanban,
  Layers3,
  BriefcaseBusiness,
  ArrowUpRight,
  Plus,
  Activity,
} from "lucide-react";

interface DashboardStats {
  categories: number;
  subCategories: number;
  services: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    categories: 0,
    subCategories: 0,
    services: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [categories, subCategories, services] =
          await Promise.all([
            fetch("/api/categories").then((res) =>
              res.json()
            ),

            fetch("/api/sub-categories").then((res) =>
              res.json()
            ),

            fetch("/api/services").then((res) =>
              res.json()
            ),
          ]);

        setStats({
          categories:
            categories?.data?.length || 0,

          subCategories:
            subCategories?.data?.length || 0,

          services:
            services?.data?.length || 0,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const cards = [
    {
      title: "Categories",
      value: stats.categories,
      icon: FolderKanban,
      href: "/admin/categories",
    },
    {
      title: "Sub Categories",
      value: stats.subCategories,
      icon: Layers3,
      href: "/admin/sub-categories",
    },
    {
      title: "Services",
      value: stats.services,
      icon: BriefcaseBusiness,
      href: "/admin/services",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div
        className="
          relative overflow-hidden
          rounded-[32px]
          bg-black
          text-white
          p-10
        "
      >
        <div className="relative z-10">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-white/10
              px-4 py-2
              text-sm
              mb-6
            "
          >
            <Activity size={16} />
            Content Management System
          </div>

          <h1 className="text-5xl font-bold leading-tight max-w-3xl">
            Manage Categories, Services &
            Dynamic Content
          </h1>

          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            Centralized admin dashboard for
            managing categories, sub categories,
            service pages and dynamic custom
            fields.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/admin/categories/create"
              className="
                inline-flex items-center gap-2
                bg-white text-black
                px-6 py-3 rounded-2xl
                font-medium
                hover:scale-[1.02]
                transition
              "
            >
              <Plus size={18} />
              Create Category
            </Link>

            <Link
              href="/admin/services/create"
              className="
                inline-flex items-center gap-2
                border border-white/10
                bg-white/5
                px-6 py-3 rounded-2xl
                hover:bg-white/10
                transition
              "
            >
              Create Service
            </Link>
          </div>
        </div>

        {/* Decorative */}
        <div
          className="
            absolute -right-20 -top-20
            w-80 h-80
            rounded-full
            bg-white/5
          "
        />

        <div
          className="
            absolute right-20 bottom-0
            w-52 h-52
            rounded-full
            bg-white/[0.03]
          "
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                bg-white
                border border-black/5
                rounded-[28px]
                p-7
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-black/[0.04]
                    flex items-center justify-center
                  "
                >
                  <Icon size={26} />
                </div>

                <div
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-black/10
                    flex items-center justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-gray-500 font-medium">
                  {item.title}
                </h3>

                <div className="flex items-end gap-3 mt-2">
                  <span className="text-5xl font-bold">
                    {loading ? "--" : item.value}
                  </span>

                  <span className="text-gray-400 mb-1">
                    Total
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left */}
        <div
          className="
            xl:col-span-2
            bg-white
            border border-black/5
            rounded-[28px]
            p-8
          "
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                Quick Actions
              </h2>

              <p className="text-gray-500 mt-1">
                Manage your CMS faster
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/admin/categories/create"
              className="
                border border-black/10
                rounded-3xl
                p-6
                hover:bg-black
                hover:text-white
                transition-all duration-300
                group
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-black/[0.05]
                  group-hover:bg-white/10
                  flex items-center justify-center
                  mb-5
                "
              >
                <FolderKanban size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Add Category
              </h3>

              <p className="text-sm opacity-70">
                Create and manage dynamic category
                pages.
              </p>
            </Link>

            <Link
              href="/admin/services/create"
              className="
                border border-black/10
                rounded-3xl
                p-6
                hover:bg-black
                hover:text-white
                transition-all duration-300
                group
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-black/[0.05]
                  group-hover:bg-white/10
                  flex items-center justify-center
                  mb-5
                "
              >
                <BriefcaseBusiness size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Add Service
              </h3>

              <p className="text-sm opacity-70">
                Create flexible service pages with
                custom sections.
              </p>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            bg-white
            border border-black/5
            rounded-[28px]
            p-8
          "
        >
          <h2 className="text-2xl font-bold mb-2">
            System Overview
          </h2>

          <p className="text-gray-500 mb-8">
            Current content statistics
          </p>

          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">
                Categories
              </span>

              <span className="font-semibold text-xl">
                {stats.categories}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">
                Sub Categories
              </span>

              <span className="font-semibold text-xl">
                {stats.subCategories}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">
                Services
              </span>

              <span className="font-semibold text-xl">
                {stats.services}
              </span>
            </div>
          </div>

          <div
            className="
              mt-10
              rounded-3xl
              bg-black/[0.03]
              p-6
            "
          >
            <h3 className="font-semibold mb-2">
              Dynamic Content Builder
            </h3>

            <p className="text-sm text-gray-500 leading-6">
              Add custom sections like Hero,
              FAQ, Gallery, Features, CTA and
              more using reusable field blocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}