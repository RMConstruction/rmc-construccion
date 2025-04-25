import { Clock } from "lucide-react";

export const NotarySection = () => (
    <section className="py-16 bg-secondary/50">
      <div className="container-custom">
        <h2 className="text-2xl font-display font-bold text-center mb-12">
          Notary Services
        </h2>
        <p className="mx-auto mb-6 max-w-4xl text-center">
        We offer secure and convenient notary services to authenticate essential documents for personal, business, and legal use. Whether you need agreements, contracts, or property deeds notarized, we ensure precision, compliance, and flexibility, including mobile notary services at your location.
        </p>
        <p className="flex gap-2 items-center justify-center text-gray-500"><Clock className="h-4 w-4" />Estimated time: 40 minutes</p>
      </div>
    </section>
  );