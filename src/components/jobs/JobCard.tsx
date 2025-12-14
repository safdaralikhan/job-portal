import { MapPin, Clock, Users, Bookmark } from 'lucide-react';
import Image from 'next/image';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    type: string;
    salary?: string;
    logo: string;
    postedAt: string;
    applicants: number;
}

// ... props interface ...
export default function JobCard({ title, company, location, type, salary, logo, postedAt, applicants }: JobCardProps) {
    return (
        <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            {/* Promoted Label */}
            <div className="mb-2">
                <span className="text-[10px] font-semibold text-main-dark tracking-wide">Promoted</span>
            </div>

            <div className="flex items-start gap-3 mb-3">
                {/* Company Logo */}
                <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-none relative overflow-hidden">
                    {logo ? (
                        <Image
                            src={logo}
                            alt={company}
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    ) : (
                        <div className="text-indigo-600 font-bold text-base">M</div>
                    )}
                </div>

                <div className="min-w-0">
                    <h3 className="text-[14px] font-medium text-black leading-none tracking-normal mb-1 group-hover:text-main-blue transition-colors line-clamp-2">{title}</h3>
                    <p className="text-[12px] font-medium text-main-gray-medium leading-none tracking-normal truncate">{company}</p>
                </div>
            </div>

            <div className="space-y-4 mb-4">
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 leading-none tracking-normal">
                    <MapPin className="h-3.5 w-3.5 text-gray-400 flex-none" />
                    <span className="truncate">{location}</span>
                </div>
                <div className="flex items-center gap-3 text-[12px] font-medium text-gray-400 leading-none tracking-normal">
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="whitespace-nowrap">{postedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>|</span> {/* <Users className="h-3 w-3" /> */}
                        <span className="whitespace-nowrap text-main-blue">{applicants} applicants</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-2">
                <button className="flex-1 bg-main-blue hover:bg-main-blue/80 text-white py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap">
                    Apply Now
                </button>
                <button className="p-1.5 text-gray-400 hover:text-main-blue hover:bg-blue-50 rounded-lg border border-gray-200 transition-colors">
                    <Bookmark className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}