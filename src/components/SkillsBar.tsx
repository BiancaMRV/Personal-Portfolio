interface SkillBarProps {
  name: string;
  level?: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        {level && <span>{level}%</span>}
      </div>
      {level && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#7C5DFA] h-2.5 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
