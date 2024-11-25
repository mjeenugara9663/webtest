import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialCardProps {
  title: string;
  icon: LucideIcon;
  link: string;
  username: string;
  bgColor: string;
}

export function SocialCard({ title, icon: Icon, link, username, bgColor }: SocialCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} transform hover:scale-105 transition-transform duration-300 rounded-xl p-6 text-white shadow-lg flex items-center space-x-4`}
    >
      <Icon size={32} />
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="opacity-90">@{username}</p>
      </div>
    </a>
  );
}