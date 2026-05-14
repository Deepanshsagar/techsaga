// app/services/[slug]/page.tsx

import connectDB from "@/app/lib/mongodb";
import Service from "@/app/models/Service";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  await connectDB();

  const service = await Service.findOne({
    slug: params.slug,
  });

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-20">
      <h1 className="text-5xl font-bold mb-6">
        {service.title}
      </h1>

      <p className="text-gray-600 mb-10">
        {service.shortDescription}
      </p>

      <div className="space-y-10">
        {service.customFields.map(
          (field: any, index: number) => {
            switch (field.type) {
              case "text":
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold mb-3">
                      {field.label}
                    </h2>

                    <p>{field.value}</p>
                  </div>
                );

              case "image":
                return (
                  <img
                    key={index}
                    src={field.value}
                    alt={field.label}
                    className="rounded-2xl"
                  />
                );

              case "textarea":
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold mb-3">
                      {field.label}
                    </h2>

                    <div>{field.value}</div>
                  </div>
                );

              default:
                return null;
            }
          }
        )}
      </div>
    </div>
  );
}