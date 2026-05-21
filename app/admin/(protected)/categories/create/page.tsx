// app/admin/categories/create/page.tsx

"use client";

import { useState } from "react";

type CustomField = {
  label: string;
  key: string;
  type: string;
  value: any;
};

export default function CreateCategoryPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    customFields: [] as CustomField[],
  });

  const addField = () => {
    setForm((prev) => ({
      ...prev,
      customFields: [
        ...prev.customFields,
        {
          label: "",
          key: "",
          type: "text",
          value: "",
        },
      ],
    }));
  };

  const updateField = (
    index: number,
    field: keyof CustomField,
    value: any
  ) => {
    const updated = [...form.customFields];
    updated[index][field] = value;

    setForm((prev) => ({
      ...prev,
      customFields: updated,
    }));
  };

  const handleSubmit = async () => {
    await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Create Category</h1>

      <div className="space-y-6">
        <input
          placeholder="Title"
          className="w-full border p-3 rounded-xl"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Slug"
          className="w-full border p-3 rounded-xl"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-3 rounded-xl h-40"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <div className="border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold">
              Custom Fields
            </h2>

            <button
              onClick={addField}
              className="bg-black text-white px-5 py-2 rounded-xl"
            >
              Add Field
            </button>
          </div>

          <div className="space-y-5">
            {form.customFields.map((field, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 border p-5 rounded-xl"
              >
                <input
                  placeholder="Label"
                  className="border p-3 rounded-xl"
                  value={field.label}
                  onChange={(e) =>
                    updateField(
                      index,
                      "label",
                      e.target.value
                    )
                  }
                />

                <input
                  placeholder="Key"
                  className="border p-3 rounded-xl"
                  value={field.key}
                  onChange={(e) =>
                    updateField(
                      index,
                      "key",
                      e.target.value
                    )
                  }
                />

                <select
                  className="border p-3 rounded-xl"
                  value={field.type}
                  onChange={(e) =>
                    updateField(
                      index,
                      "type",
                      e.target.value
                    )
                  }
                >
                  <option value="text">Text</option>
                  <option value="textarea">
                    Textarea
                  </option>
                  <option value="image">Image</option>
                  <option value="editor">Editor</option>
                </select>

                <input
                  placeholder="Value"
                  className="border p-3 rounded-xl"
                  value={field.value}
                  onChange={(e) =>
                    updateField(
                      index,
                      "value",
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Save Category
        </button>
      </div>
    </div>
  );
}