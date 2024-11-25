import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  link: string;
}

export function VideoCard({ title, thumbnail, link }: VideoCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <Play className="text-white w-12 h-12 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
    </a>
  );
}