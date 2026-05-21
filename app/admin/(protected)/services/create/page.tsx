"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BriefcaseBusiness,
  Plus,
  Trash2,
  Sparkles,
  X,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Category {
  _id: string;
  title: string;
}

interface SubCategory {
  _id: string;
  title: string;
}

interface CustomField {
  label: string;
  key: string;
  type: string;
  value: any;
  required?: boolean;
}

// ─── Service Template ─────────────────────────────────────────────────────────
// Pre-filled when a category whose title includes "service" (case-insensitive)
// is selected. Covers every section visible in the TechSaga screenshot.

const SERVICE_TEMPLATE: CustomField[] = [
  // 1. Hero
  {
    label: "Hero — Heading Line 1",
    key: "heroHeadingLine1",
    type: "text",
    value: "Your Trusted Partner",
    required: true,
  },
  {
    label: "Hero — Heading Accent (Line 2)",
    key: "heroHeadingAccent",
    type: "text",
    value: "for Custom Software",
    required: true,
  },
  {
    label: "Hero — Heading Line 3",
    key: "heroHeadingLine3",
    type: "text",
    value: "Development",
    required: false,
  },
  {
    label: "Hero — Background Image",
    key: "heroImage",
    type: "image",
    value: "",
    required: false,
  },

  // 2. Section Intro
  {
    label: "Section — Tag Line",
    key: "sectionTagLine",
    type: "text",
    value: "CRAFTING DIGITAL ADVANCEMENT",
    required: false,
  },
  {
    label: "Section — Intro Heading",
    key: "sectionIntroHeading",
    type: "text",
    value: "Custom Software Delivering Exceptional",
    required: true,
  },

  // 3. Feature Block 1 (text-left / image-right)
  {
    label: "Feature Block 1 — Title",
    key: "featureBlock1Title",
    type: "text",
    value: "Designing a Tailor Made Solution",
    required: true,
  },
  {
    label: "Feature Block 1 — Description",
    key: "featureBlock1Description",
    type: "textarea",
    value:
      "Our team of skilled developers, engineers, and designers work closely with you to understand your business processes, challenges, and goals. This ensures that the final product is a perfect fit for your organization.",
    required: false,
  },
  {
    label: "Feature Block 1 — Bullet Points (JSON array)",
    key: "featureBlock1Bullets",
    type: "editor",
    value: JSON.stringify([
      "Expert Android developers",
      "Custom Mobile App Solutions",
      "UI/UX Focused Design",
      "Agile Development Process",
      "Scalable Architecture",
      "Ongoing Support & Maintenance",
    ]),
    required: false,
  },
  {
    label: "Feature Block 1 — Image",
    key: "featureBlock1Image",
    type: "image",
    value: "",
    required: false,
  },

  // 4. Feature Block 2 (image-left / text-right)
  {
    label: "Feature Block 2 — Title",
    key: "featureBlock2Title",
    type: "text",
    value: "Our Custom Development Journey Blueprint",
    required: true,
  },
  {
    label: "Feature Block 2 — Description",
    key: "featureBlock2Description",
    type: "textarea",
    value:
      "We pride ourselves on delivering projects within the designated timeframe and adhering to strict deadlines. With our expert Android developers and proficient iOS development, we can create high-quality applications for both platforms.",
    required: false,
  },
  {
    label: "Feature Block 2 — Bullet Points (JSON array)",
    key: "featureBlock2Bullets",
    type: "editor",
    value: JSON.stringify([
      "Expert Android developers",
      "Delivering projects at a time",
      "Competent iOS development",
      "Expert Android developers",
      "User-friendly UI/UX design",
    ]),
    required: false,
  },
  {
    label: "Feature Block 2 — Image",
    key: "featureBlock2Image",
    type: "image",
    value: "",
    required: false,
  },

  // 5. Feature Block 3 (text-left / image-right)
  {
    label: "Feature Block 3 — Title",
    key: "featureBlock3Title",
    type: "text",
    value:
      "Transforming Future With the Custom Software Development",
    required: true,
  },
  {
    label: "Feature Block 3 — Description",
    key: "featureBlock3Description",
    type: "textarea",
    value:
      "Custom software development offers several benefits, including enhanced efficiency, scalability, and flexibility. It provides a competitive advantage by tailoring the software to your unique business needs.",
    required: false,
  },
  {
    label: "Feature Block 3 — Bullet Points (JSON array)",
    key: "featureBlock3Bullets",
    type: "editor",
    value: JSON.stringify([
      "Expert Android developers",
      "Delivering projects at a time",
      "Competent iOS development",
      "Expert Android developers",
      "User-friendly UI/UX design",
      "Expert Android developers",
    ]),
    required: false,
  },
  {
    label: "Feature Block 3 — Image",
    key: "featureBlock3Image",
    type: "image",
    value: "",
    required: false,
  },

  // 6. Feature Block 4 (image-left / text-right)
  {
    label: "Feature Block 4 — Title",
    key: "featureBlock4Title",
    type: "text",
    value: "Our Custom Development Journey Blueprint",
    required: false,
  },
  {
    label: "Feature Block 4 — Description",
    key: "featureBlock4Description",
    type: "textarea",
    value:
      "We pride ourselves on delivering projects within the designated timeframe and adhering to strict deadlines. With our expert Android developers and proficient iOS development, we can create high-quality applications for both platforms.",
    required: false,
  },
  {
    label: "Feature Block 4 — Bullet Points (JSON array)",
    key: "featureBlock4Bullets",
    type: "editor",
    value: JSON.stringify([
      "Expert Android developers",
      "Delivering projects at a time",
      "Competent iOS development",
      "Expert Android developers",
      "User-friendly UI/UX design",
    ]),
    required: false,
  },
  {
    label: "Feature Block 4 — Image",
    key: "featureBlock4Image",
    type: "image",
    value: "",
    required: false,
  },

  // 7. Benefits Section Header
  {
    label: "Benefits — Tag Line",
    key: "benefitsTagLine",
    type: "text",
    value: "POST YOUR REQUIREMENT / SOFTWARE SOLUTIONS",
    required: false,
  },
  {
    label: "Benefits — Heading",
    key: "benefitsHeading",
    type: "text",
    value: "Skyrocket Your Business Growth With Our Custom Software",
    required: true,
  },

  // 8. Benefits Grid (6 cards)
  {
    label: "Benefits Grid — Cards (JSON array)",
    key: "benefitsGrid",
    type: "editor",
    value: JSON.stringify([
      {
        icon: "Zap",
        title: "Enhanced Efficiency",
        description:
          "It replaces the functions of off-the-shelf software, offering streamlined solutions tailored to automate workflow, remove bottlenecks, and enhance productivity.",
      },
      {
        icon: "Shield",
        title: "Data Security & Confidentiality",
        description:
          "Custom software can be designed with robust security measures tailored to your organization, ensuring the confidentiality and integrity of your data.",
      },
      {
        icon: "Trophy",
        title: "Competitive Advantage",
        description:
          "Tailored software provides unique features and functionalities that differentiate your business from competitors, allowing you to offer better services.",
      },
      {
        icon: "GitMerge",
        title: "Integration Capabilities",
        description:
          "Enabling smooth data flow and communication between departments, eliminates data silos, and provides a unified operation.",
      },
      {
        icon: "DollarSign",
        title: "Cost Efficiency",
        description:
          "It eliminates multiple license needs, reduces manual processes and minimizes the risk of costly errors or inefficiencies.",
      },
      {
        icon: "Repeat",
        title: "Agile Approach",
        description:
          "Through iterative development cycles, allows to build and test prototypes, gather feedback, and refine the software to ensure it meets your expectations.",
      },
    ]),
    required: false,
  },

  // 9. Power Section
  {
    label: "Power Section — Heading",
    key: "powerSectionHeading",
    type: "text",
    value: "Experience The Power Of Custom Software Development",
    required: true,
  },
  {
    label: "Power Section — Sub Heading",
    key: "powerSectionSubHeading",
    type: "text",
    value:
      "Fostering Innovation and Efficiency With Custom Software Solutions",
    required: false,
  },
  {
    label: "Power Section — Checklist (JSON array)",
    key: "powerSectionChecklist",
    type: "editor",
    value: JSON.stringify([
      "Tailor-made solutions to meet your specific business needs",
      "Enhanced efficiency and productivity through optimised workflows",
      "Improved customer experience with personalised features",
      "Streamlined business processes and automation of tasks",
      "Scalable solutions that can grow with your business",
      "Integration of multiple systems for seamless data flow",
      "Increased security and protection of sensitive information",
      "Competitive advantage with unique software solutions",
      "Ongoing support and maintenance to ensure smooth operations",
      "Empowerment to innovate and stay ahead in the digital landscape",
    ]),
    required: false,
  },

  // 10. Expertise Section
  {
    label: "Expertise Section — Heading",
    key: "expertiseSectionHeading",
    type: "text",
    value: "Our Custom Software Development Expertise",
    required: true,
  },
  {
    label: "Expertise Sidebar — Title",
    key: "expertiseSidebarTitle",
    type: "text",
    value: "Unleash The Power Of Custom Software Development",
    required: false,
  },
  {
    label: "Expertise Sidebar — Description",
    key: "expertiseSidebarDescription",
    type: "textarea",
    value:
      "We provide end-to-end custom software development services to start-ups, SMEs, and large corporations. Our team of highly skilled developers and designers can offer solutions that draw on their extensive knowledge to help organisations flourish.",
    required: false,
  },
  {
    label: "Expertise Sidebar — Image",
    key: "expertiseSidebarImage",
    type: "image",
    value: "",
    required: false,
  },

  // 11. FAQ
  {
    label: "FAQ — Questions & Answers",
    key: "faqItems",
    type: "faq",
    value: JSON.stringify([
      {
        question:
          "Why should I opt for custom software instead of using off-the-shelf software?",
        answer:
          "It offers several advantages over off-the-shelf software. You get complete control over the features and functionality of the software, ensuring it aligns perfectly with your business processes.",
      },
      {
        question:
          "How long does the custom software development process typically take?",
        answer:
          "The timeline varies depending on the complexity and scope of the project. A simple application can take a few weeks, while a complex enterprise system may take several months.",
      },
      {
        question: "How much does custom software development cost?",
        answer:
          "Costs depend on the complexity, features, and technologies involved. We offer transparent pricing and work within your budget to deliver the best possible solution.",
      },
      {
        question:
          "What ongoing support and maintenance is provided for custom software?",
        answer:
          "We provide comprehensive post-launch support including bug fixes, performance optimisation, security updates, and feature enhancements.",
      },
      {
        question:
          "Can custom software be integrated with existing systems and databases?",
        answer:
          "Yes, absolutely. Our team specialises in building custom integrations with existing ERP, CRM, databases, and third-party APIs to ensure seamless data flow.",
      },
    ]),
    required: false,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns true if the category title looks like a "Services" category. */
function isServicesCategory(title: string): boolean {
  return title.toLowerCase().includes("service");
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CreateServicePage() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(false);

  // Banner shown after template is injected
  const [templateApplied, setTemplateApplied] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    categoryId: "",
    subCategoryId: "",
    shortDescription: "",
    seo: {
      metaTitle: "",
      metaDescription: "",
    },
    customFields: [] as CustomField[],
  });

  // ── Fetch categories on mount ────────────────────────────────────────────
  useEffect(() => {
    fetchCategories();
  }, []);

  // ── Fetch sub-categories + inject template whenever categoryId changes ───
  useEffect(() => {
    if (!form.categoryId) {
      setSubCategories([]);
      return;
    }
    fetchSubCategories();

    // Find the selected category object
    const selected = categories.find((c) => c._id === form.categoryId);
    if (selected && isServicesCategory(selected.title)) {
      setForm((prev) => ({
        ...prev,
        // Deep-clone so each session gets fresh objects
        customFields: SERVICE_TEMPLATE.map((f) => ({ ...f })),
      }));
      setTemplateApplied(true);
    } else {
      // Clear template fields when switching away from a services category
      setForm((prev) => ({
        ...prev,
        customFields: [],
      }));
      setTemplateApplied(false);
    }
  }, [form.categoryId]);

  // ── API helpers ──────────────────────────────────────────────────────────
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const res = await fetch(
        `/api/sub-categories?categoryId=${form.categoryId}`
      );
      const data = await res.json();
      setSubCategories(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  // ── Custom-field CRUD ────────────────────────────────────────────────────
  const addField = () => {
    setForm((prev) => ({
      ...prev,
      customFields: [
        ...prev.customFields,
        { label: "", key: "", type: "text", value: "", required: false },
      ],
    }));
  };

  const removeField = (index: number) => {
    setForm((prev) => ({
      ...prev,
      customFields: prev.customFields.filter((_, i) => i !== index),
    }));
  };

  const updateField = (
    index: number,
    field: keyof CustomField,
    value: any
  ) => {
    const updated = [...form.customFields];
    updated[index] = { ...updated[index], [field]: value };
    setForm((prev) => ({ ...prev, customFields: updated }));
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/services");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="max-w-7xl mx-auto">
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
          <BriefcaseBusiness size={30} />
        </div>

        <h1 className="text-4xl font-bold">Create Service</h1>

        <p className="text-gray-500 mt-3 text-lg">
          Create dynamic service pages with custom content blocks
        </p>
      </div>

      <div className="space-y-8">
        {/* ── Basic Info ───────────────────────────────────────────────── */}
        <div className="bg-white border border-black/5 rounded-[32px] p-8">
          <h2 className="text-2xl font-bold mb-8">Basic Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block mb-3 font-medium">Service Title</label>
              <input
                type="text"
                placeholder="Web Development"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block mb-3 font-medium">Slug</label>
              <input
                type="text"
                placeholder="web-development"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-3 font-medium">Category</label>
              <select
                value={form.categoryId}
                onChange={(e) =>
                  setForm({ ...form, categoryId: e.target.value })
                }
                className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
              >
                <option value="">Select Category</option>
                {categories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub Category */}
            <div>
              <label className="block mb-3 font-medium">Sub Category</label>
              <select
                value={form.subCategoryId}
                onChange={(e) =>
                  setForm({ ...form, subCategoryId: e.target.value })
                }
                className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
              >
                <option value="">Select Sub Category</option>
                {subCategories.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Short Description */}
            <div className="md:col-span-2">
              <label className="block mb-3 font-medium">
                Short Description
              </label>
              <textarea
                rows={5}
                placeholder="Short service description"
                value={form.shortDescription}
                onChange={(e) =>
                  setForm({ ...form, shortDescription: e.target.value })
                }
                className="w-full rounded-2xl border border-black/10 p-5 outline-none"
              />
            </div>
          </div>
        </div>

        {/* ── SEO ──────────────────────────────────────────────────────── */}
        <div className="bg-white border border-black/5 rounded-[32px] p-8">
          <h2 className="text-2xl font-bold mb-8">SEO Information</h2>

          <div className="space-y-6">
            <div>
              <label className="block mb-3 font-medium">Meta Title</label>
              <input
                type="text"
                value={form.seo.metaTitle}
                onChange={(e) =>
                  setForm({ ...form, seo: { ...form.seo, metaTitle: e.target.value } })
                }
                className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
              />
            </div>

            <div>
              <label className="block mb-3 font-medium">Meta Description</label>
              <textarea
                rows={4}
                value={form.seo.metaDescription}
                onChange={(e) =>
                  setForm({
                    ...form,
                    seo: { ...form.seo, metaDescription: e.target.value },
                  })
                }
                className="w-full rounded-2xl border border-black/10 p-5 outline-none"
              />
            </div>
          </div>
        </div>

        {/* ── Custom Fields ─────────────────────────────────────────────── */}
        <div className="bg-white border border-black/5 rounded-[32px] p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Dynamic Custom Fields</h2>
              <p className="text-gray-500 mt-2">
                Add Hero, FAQ, Gallery, CTA, Features and more
              </p>
            </div>

            <button
              type="button"
              onClick={addField}
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-2xl"
            >
              <Plus size={18} />
              Add Field
            </button>
          </div>

          {/* ── Template-applied banner ─────────────────────────────── */}
          {templateApplied && (
            <div
              className="
                flex items-start justify-between gap-4
                bg-emerald-50 border border-emerald-200
                rounded-2xl px-5 py-4 mb-8
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="font-semibold text-emerald-800 text-sm">
                    Service template applied
                  </p>
                  <p className="text-emerald-700 text-sm mt-0.5">
                    {SERVICE_TEMPLATE.length} pre-filled fields have been loaded
                    — just update the values to match your service.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTemplateApplied(false)}
                className="text-emerald-500 hover:text-emerald-700 shrink-0 mt-0.5"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* ── Field list ─────────────────────────────────────────── */}
          <div className="space-y-6">
            {form.customFields.length === 0 && (
              <div className="text-center py-16 text-gray-400 border-2 border-dashed border-black/10 rounded-3xl">
                <p className="font-medium">No fields yet</p>
                <p className="text-sm mt-1">
                  Select a <span className="text-black font-medium">Services</span> category
                  above to auto-load the template, or click{" "}
                  <span className="text-black font-medium">Add Field</span> manually.
                </p>
              </div>
            )}

            {form.customFields.map((field, index) => (
              <div
                key={index}
                className="border border-black/10 rounded-3xl p-6"
              >
                {/* Field index badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold bg-black/5 text-black/40 rounded-lg px-2 py-1">
                    Field {index + 1}
                  </span>
                  {field.key && (
                    <span className="text-xs font-mono text-black/30">
                      {field.key}
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Label */}
                  <div>
                    <label className="block mb-3 font-medium">Label</label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) =>
                        updateField(index, "label", e.target.value)
                      }
                      placeholder="Hero Title"
                      className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
                    />
                  </div>

                  {/* Key */}
                  <div>
                    <label className="block mb-3 font-medium">Key</label>
                    <input
                      type="text"
                      value={field.key}
                      onChange={(e) =>
                        updateField(index, "key", e.target.value)
                      }
                      placeholder="hero_title"
                      className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label className="block mb-3 font-medium">Field Type</label>
                    <select
                      value={field.type}
                      onChange={(e) =>
                        updateField(index, "type", e.target.value)
                      }
                      className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
                    >
                      <option value="text">Text</option>
                      <option value="textarea">Textarea</option>
                      <option value="image">Image</option>
                      <option value="editor">Editor</option>
                      <option value="faq">FAQ</option>
                      <option value="gallery">Gallery</option>
                    </select>
                  </div>

                  {/* Value — adapts to field type */}
                  <div>
                    <label className="block mb-3 font-medium">Value</label>

                    {field.type === "textarea" ||
                    field.type === "editor" ||
                    field.type === "faq" ? (
                      <textarea
                        rows={3}
                        value={field.value}
                        onChange={(e) =>
                          updateField(index, "value", e.target.value)
                        }
                        placeholder={
                          field.type === "faq" || field.type === "editor"
                            ? "Enter JSON value"
                            : "Enter value"
                        }
                        className="w-full rounded-2xl border border-black/10 p-4 outline-none font-mono text-sm resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) =>
                          updateField(index, "value", e.target.value)
                        }
                        placeholder={
                          field.type === "image"
                            ? "https://... or upload path"
                            : "Enter value"
                        }
                        className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none"
                      />
                    )}
                  </div>
                </div>

                {/* Required + Remove */}
                <div className="mt-5 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={field.required || false}
                      onChange={(e) =>
                        updateField(index, "required", e.target.checked)
                      }
                    />
                    <span className="text-sm">Required Field</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Actions ───────────────────────────────────────────────────── */}
        <div className="flex justify-end gap-4 pb-10">
          <button
            type="button"
            onClick={() => router.push("/admin/services")}
            className="px-6 py-3 rounded-2xl border border-black/10"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="bg-black text-white px-7 py-3 rounded-2xl disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Service"}
          </button>
        </div>
      </div>
    </div>
  );
}