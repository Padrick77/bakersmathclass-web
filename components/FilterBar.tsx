'use client';

interface FilterBarProps {
  searchTerm: string;
  selectedCourse: string;
  onSearchChange: (term: string) => void;
  onCourseChange: (course: string) => void;
}

export default function FilterBar({
  searchTerm,
  selectedCourse,
  onSearchChange,
  onCourseChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Search Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Course Dropdown */}
      <div className="sm:w-64">
        <select
          value={selectedCourse}
          onChange={(e) => onCourseChange(e.target.value)}
          className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
        >
          <option value="All">All Courses</option>
          <option value="AP Calculus">AP Calculus</option>
          <option value="Algebra 2">Algebra 2</option>
          <option value="Statistics">Statistics</option>
        </select>
      </div>
    </div>
  );
}

