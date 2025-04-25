import { ReactNode } from 'react';

interface SocialLinkProps {
  name: string;
  label: string;
  url: string;
  icon: ReactNode;
}

export const SocialLink = ({ name, label, url, icon }: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:w-[70%] h-10 mt-4 rounded-full bg-white/10 flex items-center justify-start pl-2 px-4 hover:bg-primary transition-colors duration-300"
      aria-label={name}
    >
      {icon}
      <p>{label}</p>
    </a>
  );
};
