import { Search, MapPin, ChevronDown } from 'lucide-react';

export default function HeroSearch() {
    return (
        <div className="bg-white rounded-xl p-6 mb-8 border border-gray-100 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Find your <span className="text-blue-600 underline decoration-4 decoration-blue-100 underline-offset-4">dream job</span>
            </h1>
            <p className="text-gray-500 mb-6">
                Explore the latest job openings for the best opportunities available today!
            </p>

            <div className="flex flex-col gap-4 mb-6">
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder="Job Title, Company, or Keywords"
                        className="w-full pl-4 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-gray-400"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Select Location"
                            className="w-full pl-4 pr-8 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none cursor-pointer text-gray-700"
                            readOnly
                        />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>

                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Job Type"
                            className="w-full pl-4 pr-8 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none cursor-pointer text-gray-700"
                            readOnly
                        />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>

                    <button className="md:w-auto w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-200">
                        <Search className="h-4 w-4" />
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                <span className="text-gray-400 whitespace-nowrap">Similar:</span>
                <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-50 hover:bg-white">Frontend</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-50 hover:bg-white">Backend</button>
                    <button className="px-3 py-1 border border-gray-200 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors bg-gray-50 hover:bg-white">Graphic Designer</button>
                </div>
            </div>
        </div>
    );
}
