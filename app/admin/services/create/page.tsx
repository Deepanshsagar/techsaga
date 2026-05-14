// app/admin/services/create/page.tsx

"use client";

import { useEffect, useState } from "react";

export default function CreateServicePage() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    categoryId: "",
    subCategoryId: "",
    shortDescription: "",
    customFields: [],
  });

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  useEffect(() => {
    if (!form.categoryId) return;

    fetch(
      `/api/sub-categories?categoryId=${form.categoryId}`
    )
      .then((res) => res.json())
      .then((data) => setSubCategories(data.data));
  }, [form.categoryId]);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-10">
        Create Service
      </h1>

      <div className="space-y-6">
        <input
          placeholder="Service Title"
          className="w-full border p-3 rounded-xl"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          placeholder="Slug"
          className="w-full border p-3 rounded-xl"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-3 rounded-xl"
          value={form.categoryId}
          onChange={(e) =>
            setForm({
              ...form,
              categoryId: e.target.value,
            })
          }
        >
          <option value="">Select Category</option>

          {categories.map((item: any) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>

        <select
          className="w-full border p-3 rounded-xl"
          value={form.subCategoryId}
          onChange={(e) =>
            setForm({
              ...form,
              subCategoryId: e.target.value,
            })
          }
        >
          <option value="">
            Select Sub Category
          </option>

          {subCategories.map((item: any) => (
            <option key={item._id} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Short Description"
          className="w-full border p-3 rounded-xl h-32"
          value={form.shortDescription}
          onChange={(e) =>
            setForm({
              ...form,
              shortDescription: e.target.value,
            })
          }
        />

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Save Service
        </button>
      </div>
    </div>
  );
}