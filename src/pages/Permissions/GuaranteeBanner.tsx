import { guaranteeContent } from "./permissions-data";

export const GuaranteeBanner = () => (
  <div className="max-w-4xl mx-auto mt-12 p-8 bg-primary/10 rounded-lg shadow-md">
    <div className="flex items-start gap-4">
      <guaranteeContent.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{guaranteeContent.title}</h3>
        <p>{guaranteeContent.description}</p>
      </div>
    </div>
  </div>
);