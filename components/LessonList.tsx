'use client';

import { useState, useMemo } from 'react';
import LessonCard from './LessonCard';
import FilterBar from './FilterBar';

interface Lesson {
  id: string;
  title?: string;
  course?: string;
  unit?: string;
  type?: string;
  description?: string;
  link?: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

export default function LessonList({ lessons }: LessonListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');

  // Filter lessons based on search term and course
  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      // Course filter
      const matchesCourse =
        selectedCourse === 'All' || lesson.course === selectedCourse;

      // Search filter (searches in title, description, and unit)
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        searchTerm === '' ||
        (lesson.title || '').toLowerCase().includes(searchLower) ||
        (lesson.description || '').toLowerCase().includes(searchLower) ||
        (lesson.unit || '').toLowerCase().includes(searchLower);

      return matchesCourse && matchesSearch;
    });
  }, [lessons, searchTerm, selectedCourse]);

  return (
    <>
      {/* Filter Bar */}
      <FilterBar
        searchTerm={searchTerm}
        selectedCourse={selectedCourse}
        onSearchChange={setSearchTerm}
        onCourseChange={setSelectedCourse}
      />

      {/* Lessons Grid */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              title={lesson.title || 'Untitled Lesson'}
              course={lesson.course || 'General'}
              unit={lesson.unit || ''}
              type={lesson.type || 'Lesson'}
              description={lesson.description || ''}
              link={lesson.link || '#'}
            />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
            <p className="text-zinc-600 dark:text-zinc-400">
              {lessons.length === 0
                ? 'No lessons found. Make sure you have added lessons to your Firestore collection named "lessons".'
                : 'No lessons match your search criteria. Try adjusting your filters.'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

