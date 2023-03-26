import React, { useState } from "react";
import { FcDownload } from "react-icons/fc";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import Modal from "./Modal";

const Card = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative mb-5 w-screen sm:w-auto -ml-4 sm:ml-0">
        <div className="absolute w-full h-full z-10 flex flex-col justify-between p-6">
          <div className="flex justify-end gap-4"></div>
          <div className="flex gap-2 justify-end items-center">
            <a href={post.viewURL} target="_blank">
              <div
                className="bg-white rounded p-2 opacity-60 hover:cursor-pointer hover:opacity-100"
                // onClick={() => {
                //   setIsModalOpen(true);
                // }}
              >
                <HiOutlineViewfinderCircle
                  className="text-blue-600 !opacity-100"
                  size={20}
                />
              </div>
            </a>
            <a href={post.downloadURL} target="_blank">
              <div className="bg-white rounded p-2 opacity-60 hover:cursor-pointer hover:opacity-100">
                <FcDownload className="!opacity-100" size={20} />
              </div>
            </a>
          </div>
        </div>
        <img className="w-full" src={post.img} alt={post.img} loading="eager" />
      </div>
      <div>
        {isModalOpen ? (
          <Modal post={post} setIsModalOpen={setIsModalOpen} />
        ) : null}
      </div>
    </>
  );
};

export default Card;
