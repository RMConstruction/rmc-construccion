import { CheckCircle } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
}

export const BenefitCard = ({ title, description }: BenefitCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex items-start gap-4 hover:shadow-lg transition-all duration-300">
      <div className="text-primary">
        <CheckCircle className="h-8 w-8" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};