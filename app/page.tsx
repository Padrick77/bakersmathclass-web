import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import LessonList from '@/components/LessonList';

async function getLessons() {
  try {
    const lessonsCollection = collection(db, 'lessons');
    const lessonsSnapshot = await getDocs(lessonsCollection);
    const lessons = lessonsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return lessons;
  } catch (error) {
    console.error('Error fetching lessons:', error);
    return [];
  }
}

export default async function Home() {
  const lessons = await getLessons();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-zinc-50 mb-2">
            Math Education Dashboard
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explore our collection of math lessons and resources
          </p>
        </div>

        {/* Lesson List with Filtering */}
        <LessonList lessons={lessons} />
      </main>
    </div>
  );
}
