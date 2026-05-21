// app/admin/categories/[id]/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  FolderKanban,
} from "lucide-react";

interface CustomField {
  label: string;
  key: string;
  type: string;
  value: any;
}

export default function EditCategoryPage() {
  const params = useParams();

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    customFields: [] as CustomField[],
  });

  useEffect(() => {
    if (params?.id) {
      fetchCategory();
    }
  }, [params?.id]);

  const fetchCategory = async () => {
    try {
      const res = await fetch(
        `/api/categories/${params.id}`
      );

      const data = await res.json();

      if (data.success) {
        setForm({
          title: data.data.title || "",
          slug: data.data.slug || "",
          description:
            data.data.description || "",
          customFields:
            data.data.customFields || [],
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

  const removeField = (index: number) => {
    setForm((prev) => ({
      ...prev,

      customFields:
        prev.customFields.filter(
          (_, i) => i !== index
        ),
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

  const handleUpdate = async () => {
    try {
      setSaving(true);

      const res = await fetch(
        `/api/categories/${params.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        router.push("/admin/categories");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div
          className="
            w-16 h-16 rounded-3xl
            bg-black text-white
            flex items-center justify-center
            mb-5
          "
        >
          <FolderKanban size={30} />
        </div>

        <h1 className="text-4xl font-bold">
          Edit Category
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Update category information and
          dynamic fields
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Info */}
        <div
          className="
            bg-white
            border border-black/5
            rounded-[32px]
            p-8
          "
        >
          <h2 className="text-2xl font-bold mb-8">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block mb-3 font-medium">
                Title
              </label>

              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                className="
                  w-full h-14
                  rounded-2xl
                  border border-black/10
                  px-5
                  outline-none
                "
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block mb-3 font-medium">
                Slug
              </label>

              <input
                type="text"
                value={form.slug}
                onChange={(e) =>
                  setForm({
                    ...form,
                    slug: e.target.value,
                  })
                }
                className="
                  w-full h-14
                  rounded-2xl
                  border border-black/10
                  px-5
                  outline-none
                "
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block mb-3 font-medium">
                Description
              </label>

              <textarea
                rows={6}
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-2xl
                  border border-black/10
                  p-5
                  outline-none
                "
              />
            </div>
          </div>
        </div>

        {/* Dynamic Fields */}
        <div
          className="
            bg-white
            border border-black/5
            rounded-[32px]
            p-8
          "
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                Dynamic Custom Fields
              </h2>

              <p className="text-gray-500 mt-2">
                Manage flexible content sections
              </p>
            </div>

            <button
              type="button"
              onClick={addField}
              className="
                inline-flex items-center gap-2
                bg-black text-white
                px-5 py-3 rounded-2xl
              "
            >
              <Plus size={18} />
              Add Field
            </button>
          </div>

          <div className="space-y-6">
            {form.customFields.map(
              (field, index) => (
                <div
                  key={index}
                  className="
                    border border-black/10
                    rounded-3xl
                    p-6
                  "
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Label */}
                    <div>
                      <label className="block mb-3 font-medium">
                        Field Label
                      </label>

                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) =>
                          updateField(
                            index,
                            "label",
                            e.target.value
                          )
                        }
                        className="
                          w-full h-14
                          rounded-2xl
                          border border-black/10
                          px-5
                          outline-none
                        "
                      />
                    </div>

                    {/* Key */}
                    <div>
                      <label className="block mb-3 font-medium">
                        Field Key
                      </label>

                      <input
                        type="text"
                        value={field.key}
                        onChange={(e) =>
                          updateField(
                            index,
                            "key",
                            e.target.value
                          )
                        }
                        className="
                          w-full h-14
                          rounded-2xl
                          border border-black/10
                          px-5
                          outline-none
                        "
                      />
                    </div>

                    {/* Type */}
                    <div>
                      <label className="block mb-3 font-medium">
                        Field Type
                      </label>

                      <select
                        value={field.type}
                        onChange={(e) =>
                          updateField(
                            index,
                            "type",
                            e.target.value
                          )
                        }
                        className="
                          w-full h-14
                          rounded-2xl
                          border border-black/10
                          px-5
                          outline-none
                        "
                      >
                        <option value="text">
                          Text
                        </option>

                        <option value="textarea">
                          Textarea
                        </option>

                        <option value="image">
                          Image
                        </option>

                        <option value="editor">
                          Editor
                        </option>

                        <option value="faq">
                          FAQ
                        </option>
                      </select>
                    </div>

                    {/* Value */}
                    <div>
                      <label className="block mb-3 font-medium">
                        Value
                      </label>

                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) =>
                          updateField(
                            index,
                            "value",
                            e.target.value
                          )
                        }
                        className="
                          w-full h-14
                          rounded-2xl
                          border border-black/10
                          px-5
                          outline-none
                        "
                      />
                    </div>
                  </div>

                  {/* Remove */}
                  <div className="mt-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        removeField(index)
                      }
                      className="
                        inline-flex items-center gap-2
                        text-red-500
                      "
                    >
                      <Trash2 size={16} />
                      Remove Field
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pb-10">
          <button
            type="button"
            onClick={() =>
              router.push(
                "/admin/categories"
              )
            }
            className="
              px-6 py-3 rounded-2xl
              border border-black/10
            "
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={saving}
            onClick={handleUpdate}
            className="
              bg-black text-white
              px-7 py-3 rounded-2xl
              disabled:opacity-50
            "
          >
            {saving
              ? "Updating..."
              : "Update Category"}
          </button>
        </div>
      </div>
    </div>
  );
}