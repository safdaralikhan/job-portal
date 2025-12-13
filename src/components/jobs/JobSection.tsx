import Link from 'next/link';
import JobCard from './JobCard';
import { JOBS } from '@/data/jobs';

interface JobSectionProps {
    title: string;
}

export default function JobSection({ title }: JobSectionProps) {
    return (
        <section className="mb-10">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <Link href="#" className="text-sm font-medium text-gray-400 hover:text-blue-600 transition-colors">
                    See {title}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {JOBS.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        company={job.company}
                        logo={job.logo}
                        location={job.location}
                        type={job.type}
                        salary={job.salary}
                        postedAt={job.time}
                        applicants={job.applicants}
                    />
                ))}
            </div>
        </section>
    );
}