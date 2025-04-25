import { Clock } from "lucide-react";

export const ServiceCard = ({ number, title, description, time }: {
  number: number;
  title: string;
  description: string;
  time: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <div className="mb-6">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>Estimated time: {time}</span>
    </div>
  </div>
);