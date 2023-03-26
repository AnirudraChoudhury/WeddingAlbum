import React from "react";
import { Toaster } from "react-hot-toast";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";

const App = () => {
  const url =
    "https://opensheet.elk.sh/1Gaj-uOC--nSvmWBUiII2tLhI5nvmo2N6UuIE6Qh9swc/sheet1";
  const { data: images, error } = useFetch(url);
  if (error) {
    return (
      <>
        <Toaster />
      </>
    );
  }
  if (!images) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }
  return (
    <section className="grid items-center p-3">
      <div className="mx-auto sm:columns-2 md:columns-3 lg:columns-4 max-w-7xl">
        {images.map((post) => (
          <Card
            key={post.id}
            post={{
              ...post,
              downloadURL: `https://docs.google.com/uc?export=download&confirm=no_antivirus&id=${post.imgId}`,
              img: `https://drive.google.com/thumbnail?id=${post.imgId}`,
              viewURL: `https://drive.google.com/uc?export=view&id=${post.imgId}`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default App;
