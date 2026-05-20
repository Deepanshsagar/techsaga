// app/admin/meta/edit/[id]/page.tsx

import MetaForm from "@/components/MetaForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function getMeta(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/meta/${id}`,
    {
      cache: "no-store",
    }
  );


  return response.json();
}

export default async function EditMetaPage({
  params,
}: Props) {
  const { id } = await params;

  const data = await getMeta(id);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Edit Meta Data
        </h1>

        <p className="text-gray-500 mt-1">
          Update SEO metadata and compare URL
          information
        </p>
      </div>

      <div
        className="
          bg-white rounded-3xl
          border border-black/5
          p-8
        "
      >
        <MetaForm
          initialData={data.data}
          isEdit
        />
      </div>
    </div>
  );
}