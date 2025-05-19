import { useEffect, useRef, useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
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

  return (
    <div
      ref={cardRef}
      className={`bg-[#141625] rounded-lg overflow-hidden shadow-lg mb-6 transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-[#1E2139] flex items-center justify-center">
          <div className="text-[#7C5DFA] text-4xl font-bold">
            {title.split(" ")[0]}
          </div>
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
          <a href="#" className="text-[#7C5DFA] hover:underline">
            Read
          </a>
          <a href="#" className="text-[#7C5DFA] hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
