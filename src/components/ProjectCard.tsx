import { useEffect, useRef, useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "completed" | "in_development" | "planed";
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  status,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    window.open(liveUrl, "_blank");
  };

  const statusConfig = {
    completed: {
      label: "Completed",
      className: "bg-green-600",
    },
    in_development: {
      label: "In development",
      className: "bg-yellow-600",
    },
    planed: {
      label: "Planed",
      className: "bg-blue-600",
    },
  };

  const statusInfo = statusConfig[status];

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className={`bg-[#141625] rounded-lg overflow-hidden shadow-lg mb-6 transform transition-all duration-700 cursor-pointer hover:shadow-xl hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-[#1E2139] flex items-center justify-center">
          <div className="text-[#7C5DFA] text-4xl font-bold">
            {title.split(" ")[0]}
          </div>
        </div>

        {/* Tag de status */}
        <div
          className={`absolute top-3 right-3 ${statusInfo.className} text-white text-xs px-2 py-1 rounded-full`}
        >
          {statusInfo.label}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 text-sm text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={liveUrl}
            className="text-[#7C5DFA] hover:underline"
            onClick={(e) => e.stopPropagation()} 
            target="_blank"
            rel="noopener noreferrer"
          >
            Read
          </a>
          <a
            href={githubUrl}
            className="text-[#7C5DFA] hover:underline"
            onClick={(e) => e.stopPropagation()} 
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
