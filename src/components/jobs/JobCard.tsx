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

export default function JobCard({ title, company, location, type, salary, logo, postedAt, applicants }: JobCardProps) {
    return (
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            {/* Promoted Label - Hardcoded for visual match or conditional */}
            <div className="mb-3">
                <span className="text-xs font-semibold text-gray-900">Promoted</span>
            </div>

            <div className="flex items-start gap-4 mb-4">
                {/* Company Logo */}
                <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-none relative overflow-hidden">
                    {/* Placeholder for dynamic logo, ensuring fallback */}
                    {logo ? (
                        <Image
                            src={logo}
                            alt={company}
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    ) : (
                        <div className="text-indigo-600 font-bold text-lg">M</div>
                    )}
                </div>

                <div>
                    <h3 className="font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
                    <p className="text-sm text-gray-500">{company}</p>
                </div>
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {location}
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {postedAt}
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {applicants} applicants
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Apply Now
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg border border-gray-200 transition-colors">
                    <Bookmark className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}