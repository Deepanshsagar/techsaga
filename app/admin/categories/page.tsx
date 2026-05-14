// app/admin/categories/page.tsx

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  FolderKanban,
} from "lucide-react";

interface Category {
  _id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(
    []
  );

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");

      const data = await res.json();

      setCategories(data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async (id: string) => {
    const confirmDelete = confirm(
      "Delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`/api/categories/${id}`, {
        method: "DELETE",
      });

      setCategories((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCategories = categories.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all category pages and dynamic
            content
          </p>
        </div>

        <Link
          href="/admin/categories/create"
          className="
            inline-flex items-center gap-2
            bg-black text-white
            px-5 py-3 rounded-2xl
            hover:opacity-90 transition
          "
        >
          <Plus size={18} />
          Add Category
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-3xl border border-black/5 p-5 mb-8">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full h-12
              rounded-2xl
              border border-black/10
              pl-11 pr-4
              outline-none
              focus:ring-2 focus:ring-black/10
            "
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-black/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-black/[0.03] border-b border-black/5">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Category
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Slug
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Created
                </th>

                <th className="text-right px-6 py-4 text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-20 text-center text-gray-500"
                  >
                    Loading...
                  </td>
                </tr>
              ) : filteredCategories.length ===
                0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-20"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div
                        className="
                          w-20 h-20 rounded-3xl
                          bg-black/[0.04]
                          flex items-center justify-center
                          mb-5
                        "
                      >
                        <FolderKanban size={34} />
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        No Categories Found
                      </h3>

                      <p className="text-gray-500 mb-6">
                        Start by creating your first
                        category
                      </p>

                      <Link
                        href="/admin/categories/create"
                        className="
                          bg-black text-white
                          px-5 py-3 rounded-2xl
                        "
                      >
                        Create Category
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCategories.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-black/5 hover:bg-black/[0.02] transition"
                  >
                    <td className="px-6 py-5">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className="
                          px-3 py-1 rounded-xl
                          bg-black/[0.04]
                          text-sm
                        "
                      >
                        /{item.slug}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-gray-500">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/admin/categories/${item._id}`}
                          className="
                            w-11 h-11 rounded-2xl
                            border border-black/10
                            flex items-center justify-center
                            hover:bg-black hover:text-white
                            transition
                          "
                        >
                          <Pencil size={18} />
                        </Link>

                        <button
                          onClick={() =>
                            deleteCategory(item._id)
                          }
                          className="
                            w-11 h-11 rounded-2xl
                            border border-red-200
                            text-red-500
                            flex items-center justify-center
                            hover:bg-red-500 hover:text-white
                            transition
                          "
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}