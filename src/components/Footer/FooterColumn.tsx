import { ReactNode } from 'react';

interface LinkItem {
  text: string;
  url: string;
}

interface ScheduleItem {
  label: string;
  text: string;
}

interface FooterColumnProps {
  title: string;
  links?: LinkItem[];
  items?: ScheduleItem[];
  contact?: {
    title: string;
    email: string;
    phone: string;
  };
}

export const FooterColumn = ({ title, links, items, contact }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">{title}</h4>
      
      {links && (
        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}

      {items && (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <span className="text-white/70">{item.label}</span><br />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}

      {contact && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-3">{contact.title}</h4>
          <p className="text-white/70">
            {contact.email}
            <br />
            {contact.phone}
          </p>
        </div>
      )}
    </div>
  );
};