import { contactInfo } from "./contact-data";
import { ContactCard } from "./ContactCard";

export const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <ContactCard
            key={index}
            icon={info.icon}
            title={info.title}
            value={info.value}
          />
        ))}
      </div>
    </div>
  );
};