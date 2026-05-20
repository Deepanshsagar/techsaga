// app/admin/meta/components/MetaForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface MetaFormProps {
    initialData?: {
        _id?: string;

        url: string;

        title: string;

        description: string;

        keywords: string;

        twitterCard: string;

        twitterSite: string;

        twitterCreator: string;

        schemaData: string;

        ogImage: string;
    };

    isEdit?: boolean;
}

export default function MetaForm({
    initialData,
    isEdit = false,
}: MetaFormProps) {
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] = useState({
        url: initialData?.url || "",

        title: initialData?.title || "",

        description:
            initialData?.description || "",

        keywords:
            initialData?.keywords || "",

        twitterCard:
            initialData?.twitterCard ||
            "summary_large_image",

        twitterSite:
            initialData?.twitterSite || "",

        twitterCreator:
            initialData?.twitterCreator || "",

        schemaData:
            initialData?.schemaData || "",

        ogImage:
            initialData?.ogImage || "",
    });

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,

            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch(
                isEdit
                    ? `/api/meta/${initialData?._id}`
                    : "/api/meta",
                {
                    method: isEdit ? "PUT" : "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (data.success) {
                router.push("/admin/meta");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-7"
        >
            {/* Basic SEO */}
            <div
                className="
          bg-white rounded-3xl
          border border-black/5
          p-6
        "
            >
                <h2 className="text-xl font-semibold mb-6">
                    Basic SEO
                </h2>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            URL
                        </label>

                        <input
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            placeholder="/about-us"
                            className="
                w-full h-12
                rounded-2xl
                border border-black/10
                px-4
                outline-none
                focus:ring-2 focus:ring-black/10
              "
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Meta Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="
                w-full h-12
                rounded-2xl
                border border-black/10
                px-4
                outline-none
                focus:ring-2 focus:ring-black/10
              "
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Meta Description
                        </label>

                        <textarea
                            rows={5}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="
                w-full rounded-2xl
                border border-black/10
                px-4 py-4
                outline-none
                focus:ring-2 focus:ring-black/10
                resize-none
              "
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Keywords
                        </label>

                        <input
                            type="text"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleChange}
                            placeholder="seo, marketing"
                            className="
                w-full h-12
                rounded-2xl
                border border-black/10
                px-4
                outline-none
                focus:ring-2 focus:ring-black/10
              "
                        />
                    </div>
                </div>
            </div>

            {/* Social Meta */}
            <div
                className="
          bg-white rounded-3xl
          border border-black/5
          p-6
        "
            >
                <h2 className="text-xl font-semibold mb-6">
                    Social Meta
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Twitter Card
                        </label>

                        <select
                            name="twitterCard"
                            value={formData.twitterCard}
                            onChange={handleChange}
                            className="
                w-full h-12
                rounded-2xl
                border border-black/10
                px-4
                outline-none
                focus:ring-2 focus:ring-black/10
              "
                        >
                            <option value="summary">
                                summary
                            </option>

                            <option value="summary_large_image">
                                summary_large_image
                            </option>

                            <option value="app">
                                app
                            </option>

                            <option value="player">
                                player
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            OG Image
                        </label>

                        <div className="space-y-4">
                            {/* Upload */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files?.[0];

                                    if (!file) return;

                                    try {
                                        setLoading(true);

                                        const uploadData = new FormData();

                                        uploadData.append("file", file);

                                        const response = await fetch(
                                            "/api/upload",
                                            {
                                                method: "POST",
                                                body: uploadData,
                                            }
                                        );

                                        const data = await response.json();

                                        if (data.success) {
                                            setFormData({
                                                ...formData,
                                                ogImage: data.url,
                                            });
                                        }
                                    } catch (error) {
                                        console.error(error);
                                    } finally {
                                        setLoading(false);
                                    }
                                }}
                                className="
        w-full
        rounded-2xl
        border border-black/10
        px-4 py-3
        outline-none
        file:mr-4
        file:rounded-xl
        file:border-0
        file:bg-black
        file:text-white
        file:px-4
        file:py-2
        file:cursor-pointer
      "
                            />

                            {/* Preview */}
                            {formData.ogImage && (
                                <div
                                    className="
          relative
          w-full max-w-md
          overflow-hidden
          rounded-3xl
          border border-black/10
        "
                                >
                                    <img
                                        src={formData.ogImage}
                                        alt="OG Preview"
                                        className="
            w-full h-56
            object-cover
          "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                ogImage: "",
                                            })
                                        }
                                        className="
            absolute top-3 right-3
            bg-red-500 text-white
            text-sm
            px-3 py-1 rounded-xl
          "
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Twitter Site
                        </label>

                        <input
                            type="text"
                            name="twitterSite"
                            value={formData.twitterSite}
                            onChange={handleChange}
                            placeholder="@company"
                            className="
                w-full h-12
                rounded-2xl
                border border-black/10
                px-4
                outline-none
                focus:ring-2 focus:ring-black/10
              "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Twitter Creator
                        </label>

                        <input
                            type="text"
                            name="twitterCreator"
                            value={formData.twitterCreator}
                            onChange={handleChange}
                            placeholder="@creator"
                            className="
                w-full h-12
                rounded-2xl
                border border-black/10
                px-4
                outline-none
                focus:ring-2 focus:ring-black/10
              "
                        />
                    </div>
                </div>
            </div>

            {/* Schema */}
            <div
                className="
          bg-white rounded-3xl
          border border-black/5
          p-6
        "
            >
                <h2 className="text-xl font-semibold mb-6">
                    Schema Data
                </h2>

                <textarea
                    rows={12}
                    name="schemaData"
                    value={formData.schemaData}
                    onChange={handleChange}
                    placeholder={`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Us"
}`}
                    className="
            w-full rounded-2xl
            border border-black/10
            px-4 py-4
            outline-none
            focus:ring-2 focus:ring-black/10
            resize-none
            font-mono text-sm
          "
                />
            </div>

            {/* Compare Section */}
            {isEdit && initialData && (
                <div
                    className="
            grid grid-cols-1 lg:grid-cols-2
            gap-6
          "
                >
                    {/* Existing */}
                    <div
                        className="
              border border-black/10
              rounded-3xl
              p-6
            "
                    >
                        <h3 className="text-lg font-semibold mb-5">
                            Existing Meta
                        </h3>

                        <div className="space-y-5">
                            <PreviewItem
                                label="Title"
                                value={initialData.title}
                            />

                            <PreviewItem
                                label="Description"
                                value={
                                    initialData.description
                                }
                            />

                            <PreviewItem
                                label="Keywords"
                                value={
                                    initialData.keywords
                                }
                            />

                            <PreviewItem
                                label="Twitter Card"
                                value={
                                    initialData.twitterCard
                                }
                            />

                            <PreviewItem
                                label="Twitter Site"
                                value={
                                    initialData.twitterSite
                                }
                            />

                            <PreviewItem
                                label="Twitter Creator"
                                value={
                                    initialData.twitterCreator
                                }
                            />

                            <PreviewItem
                                label="OG Image"
                                value={initialData.ogImage}
                                breakAll
                            />
                        </div>
                    </div>

                    {/* Updated */}
                    <div
                        className="
              border border-black/10
              rounded-3xl
              p-6
              bg-black/[0.02]
            "
                    >
                        <h3 className="text-lg font-semibold mb-5">
                            Updated Preview
                        </h3>

                        <div className="space-y-5">
                            <PreviewItem
                                label="Title"
                                value={formData.title}
                            />

                            <PreviewItem
                                label="Description"
                                value={
                                    formData.description
                                }
                            />

                            <PreviewItem
                                label="Keywords"
                                value={
                                    formData.keywords
                                }
                            />

                            <PreviewItem
                                label="Twitter Card"
                                value={
                                    formData.twitterCard
                                }
                            />

                            <PreviewItem
                                label="Twitter Site"
                                value={
                                    formData.twitterSite
                                }
                            />

                            <PreviewItem
                                label="Twitter Creator"
                                value={
                                    formData.twitterCreator
                                }
                            />

                            <PreviewItem
                                label="OG Image"
                                value={formData.ogImage}
                                breakAll
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Submit */}
            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="
            h-12 px-6
            rounded-2xl
            bg-black text-white
            hover:opacity-90
            transition
          "
                >
                    {loading
                        ? "Saving..."
                        : isEdit
                            ? "Update Meta"
                            : "Create Meta"}
                </button>
            </div>
        </form>
    );
}

interface PreviewItemProps {
    label: string;

    value?: string;

    breakAll?: boolean;
}

function PreviewItem({
    label,
    value,
    breakAll = false,
}: PreviewItemProps) {
    return (
        <div>
            <p className="text-sm text-gray-500 mb-1">
                {label}
            </p>

            <p
                className={`text-gray-700 ${breakAll ? "break-all" : ""
                    }`}
            >
                {value || "-"}
            </p>
        </div>
    );
}