import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const ContactCard = ({ icon, title, value }: ContactCardProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};