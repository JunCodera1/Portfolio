import { FaCode, FaRocket, FaStar } from "react-icons/fa";

export const StatsBar = () => (
  <div className="flex justify-center gap-8 mt-8 text-sm text-gray-400">
    <div className="flex items-center gap-2">
      <FaCode className="text-blue-400" />
      <span>10+ Projects</span>
    </div>
    <div className="flex items-center gap-2">
      <FaRocket className="text-purple-400" />
      <span>3+ Years</span>
    </div>
    <div className="flex items-center gap-2">
      <FaStar className="text-yellow-400" />
      <span>Clean Code</span>
    </div>
  </div>
);