'use client';

interface LessonCardProps {
  title: string;
  course: string;
  unit: string;
  type: string;
  description: string;
  link: string;
}

export default function LessonCard({
  title,
  course,
  unit,
  type,
  description,
  link,
}: LessonCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Color mapping for course badges
  const getCourseColor = (course: string) => {
    const colors: Record<string, string> = {
      'Algebra': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Geometry': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Calculus': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Statistics': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Trigonometry': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    };
    return colors[course] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  };

  // Color mapping for type badges
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Video': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Notes': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'Exercise': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Quiz': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    };
    return colors[type] || 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200';
  };

  return (
    <div
      className="group relative flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer h-full"
      onClick={handleClick}
    >
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCourseColor(course)}`}
        >
          {course}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(type)}`}
        >
          {type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      {/* Unit */}
      {unit && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
          Unit: {unit}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>
          {description}
        </p>
      )}

      {/* View Button */}
      <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          View Lesson
        </button>
      </div>
    </div>
  );
}

