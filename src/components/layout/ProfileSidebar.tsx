import { MapPin } from 'lucide-react';
import Image from 'next/image';
import SidbarProfile from "../../../public/images/sidbarprofile.png"
import CoverImage from "../../../public/images/sidbarbg.png"

export default function ProfileSidebar() {
    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Cover Image */}
                <div className="h-24 bg-cover bg-center relative">
                    <Image
                        src={CoverImage}
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
                                src={SidbarProfile}
                                alt="Albert Flores"
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-[18px] font-semibold text-main-dark">Albert Flores</h2>
                    <div className="text-[14px] font-medium text-main-dark mb-2">
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
                    </div>
                    <div className="text-[12px] font-medium text-main-gray-medium flex items-center justify-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Clinton, Maryland
                    </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-[14px] font-medium text-main-dark">Profile Visitors</span>
                        <span className="text-[14px] font-medium text-main-blue">140</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-[14px] font-medium text-main-dark">Resume Viewers</span>
                        <span className="text-[14px] font-medium text-main-blue">20</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-[14px] font-medium text-main-dark">My Jobs</span>
                        <span className="text-[14px] font-medium text-main-blue">88</span>
                    </div>
                </div>
            </div>

            {/* My Calendar Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-[16px] text-main-dark">My calendar</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>
                <p className="text-[14px] font-medium text-main-gray">Upcoming Interviews</p>
            </div>
        </div>
    );
}
