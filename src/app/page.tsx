import Navbar from '@/components/layout/Navbar';
import ProfileSidebar from '@/components/layout/ProfileSidebar';
import HeroSearch from '@/components/jobs/HeroSearch';
import JobSection from '@/components/jobs/JobSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - 3 columns on large screens */}
          <aside className="w-full lg:w-80 flex-none space-y-8">
            <ProfileSidebar />
          </aside>

          {/* Main Content - Remaining width */}
          <div className="flex-1 min-w-0">
            <HeroSearch />

            <div className="space-y-4">
              <JobSection title="Featured Jobs" />
              <JobSection title="Recommended Jobs" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}