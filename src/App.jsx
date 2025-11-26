import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => setVideos(data.results));
  }, []);

  return (
    <div className="p-4 max-w-[480px] mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Video Player</h1>

      <div className="grid gap-4">
        {videos.map((v, i) => (
          <div key={i} className="bg-gray-900 p-3 rounded-xl shadow-lg">
            <video
              src={v.video_url}
              controls
              className="w-full rounded-lg"
            ></video>

            <div className="mt-2">
              <h2 className="text-lg font-semibold">{v.title}</h2>
              <p className="text-sm text-gray-400">
                {v.views} • {v.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
