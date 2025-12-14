import Link from 'next/link';
import JobCard from './JobCard';
import { JOBS } from '@/data/jobs';

interface JobSectionProps {
    title: string;
    limit?: number;
}

export default function JobSection({ title, limit }: JobSectionProps) {
    const jobsToDisplay = limit ? JOBS.slice(0, limit) : JOBS;

    return (
        <section className="mb-10">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[18px] font-medium text-main-dark">{title}</h2>
                <Link href="#" className="text-[14px] font-medium text-main-blue transition-colors underline">
                    See {title}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[15px]">
                {jobsToDisplay?.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        company={job.company}
                        logo={job.logo}
                        location={job.location}
                        postedAt={job.time}
                        applicants={job.applicants}
                    />
                ))}
            </div>
        </section>
    );
}