import { Phone, Mail, Facebook } from "lucide-react";
import { ReactNode } from "react";

interface ContactInfoItem {
  icon: ReactNode;
  title: string;
  value: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+1 619-292-1668"
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "info@rmcdesignstudio.co"
  },
  {
    icon: <Facebook className="h-6 w-6" />,
    title: "Facebook",
    value: "RM Construction & Design Studio Inc."
  }
];

export const serviceOptions = [
  { value: "Construction-Zone", label: "Construction Zone" },
  { value: "Project-Management", label: "Project Management" },
  { value: "2D-Plans", label: "2D Plans" },
  { value: "3D-Renders", label: "3D Renders" },
  { value: "Building-Permits", label: "Building Permits" }
];