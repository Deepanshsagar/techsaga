// app/admin/meta/create/page.tsx

import MetaForm from "@/components/MetaForm";


export default function CreateMetaPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Meta Data
        </h1>

        <p className="text-gray-500 mt-1">
          Add SEO metadata for a new page
        </p>
      </div>

      <div
        className="
          bg-white rounded-3xl
          border border-black/5
          p-8
        "
      >
        <MetaForm />
      </div>
    </div>
  );
}