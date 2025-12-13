import { MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ProfileSidebar() {
    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Cover Image */}
                <div className="h-24 bg-cover bg-center relative">
                    <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                        alt="Cover"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="px-6 pb-6 text-center relative">
                    {/* Avatar */}
                    <div className="-mt-10 mb-3 flex justify-center relative z-10">
                        <div className="h-20 w-20 rounded-full border-4 border-white overflow-hidden shadow-md relative bg-white">
                            <Image
                                src="https://i.pravatar.cc/150?u=albert"
                                alt="Albert Flores"
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900">Albert Flores</h2>
                    <div className="text-sm text-gray-500 mb-2">
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Clinton, Maryland
                    </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600">Profile Visitors</span>
                        <span className="text-sm font-semibold text-blue-600">140</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600">Resume Viewers</span>
                        <span className="text-sm font-semibold text-blue-600">20</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600">My Jobs</span>
                        <span className="text-sm font-semibold text-blue-600">88</span>
                    </div>
                </div>
            </div>

            {/* My Calendar Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900">My calendar</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>
                <p className="text-sm text-gray-500">Upcoming Interviews</p>
            </div>
        </div>
    );
}
