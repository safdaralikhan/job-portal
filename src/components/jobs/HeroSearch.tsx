import { Search, ChevronDown } from 'lucide-react';

export default function HeroSearch() {
    return (
        <div className="p-6 mb-8 ">
            <h1 className="text-[22px] font-semibold text-main-dark mb-2">
                Find your Dream Job ,<span className="text-main-blue underline decoration-4 decoration-blue-100 underline-offset-4"> Albert!</span>
            </h1>
            <p className="text-[14px] font-medium text-main-gray-medium mb-6">
                Explore the latest job openings for the best opportunities available today!
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 mb-6">
                <div className="flex flex-col md:flex-row md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="flex-1 relative p-2">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hidden md:block" />
                        <input
                            type="text"
                            placeholder="Job Title, Company, or Keywords"
                            className="w-full text-[14px] font-medium pl-4 md:pl-12 pr-4 py-2 bg-transparent border-none focus:outline-none placeholder:text-gray-400 text-gray-700"
                        />
                    </div>

                    <div className="relative p-2 md:w-64">
                        <input
                            type="text"
                            placeholder="Select Location"
                            className="w-full text-[14px] font-medium pl-4 pr-8 py-2 bg-transparent border-none focus:outline-none cursor-pointer text-gray-700 placeholder:text-gray-400"
                            readOnly
                        />
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>

                    <div className="relative p-2 md:w-48">
                        <input
                            type="text"
                            placeholder="Job Type"
                            className="w-full text-[14px] font-medium pl-4 pr-8 py-2 bg-transparent border-none focus:outline-none cursor-pointer text-gray-700 placeholder:text-gray-400"
                            readOnly
                        />
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>

                    <div className="p-2">
                        <button className="w-full md:w-auto bg-main-blue hover:bg-main-blue/80 cursor-pointer text-white px-8 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                            <Search className="h-4 w-4" />
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[12px]">
                <span className="text-main-gray whitespace-nowrap">Similar:</span>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-main-gray hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-50 hover:bg-white">Frontend</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-main-gray hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-50 hover:bg-white">Backend</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-main-gray hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-50 hover:bg-white">Graphic Designer</button>
                </div>
            </div>
        </div>
    );
}
