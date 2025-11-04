import React from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

const NewsCard = () => {
  return (
    <div className="p-4 rounded-2xl mb-4 shadow-sm bg-white hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-semibold">
          S
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 leading-tight">Sarah Johnson</h3>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
        <span className="ml-auto text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
          Project Launch
        </span>
      </div>

      {/* Body */}
      <h2 className="font-bold text-lg mb-2 text-gray-900">
        Revolutionary AI Smart Home System Launches
      </h2>
    <p className="text-gray-700 text-sm leading-relaxed max-h-40 min-h-24 overflow-y-auto pr-2">
        Sarah Johnson has just launched an innovative AI-powered smart home
        system that promises to revolutionize home automation. The project has
        already raised <span className="font-semibold">$85,000</span> in its first week.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque
        dicta dolores natus eaque culpa et aperiam, quisquam nisi deserunt optio
        nam ut deleniti? Ullam nisi dicta sunt molestias, eveniet facilis
        ducimus, debitis, labore amet possimus impedit. Laudantium consectetur
        porro expedita. Quaerat nisi aspernatur, dignissimos maiores quia animi
        odio voluptates itaque rerum dolores harum ipsa nostrum repudiandae
        sequi dicta ullam unde dolor a eaque ab id, error vero reprehenderit
        neque. Eum accusamus dolor accusantium id repellat molestiae aut
        consectetur labore ratione voluptatum explicabo ad iusto, maiores sequi
        architecto perspiciatis dolore quia. Iste rerum, atque consequuntur
        eaque voluptatem sint debitis sed.
      </p>
      {/* Footer */}
      <div className="flex items-center justify-between text-gray-500 text-sm  pt-2">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-red-500 transition">
            <Heart size={18} /> 124
          </button>
       
          <button className="hover:text-green-500 transition">
            <Share2 size={18} />
          </button>
        </div>
        <button className="hover:text-yellow-500 transition">
          <Bookmark size={18} />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
