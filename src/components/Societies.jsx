import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Societies = () => {

  return (
    <>
      {/* 社團 */}
      <div id="p4" className="w-full page text-white hidden">
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">
          <div className="card text-gray-400 mb-10">
            <p className="text-left text-3xl pl-3 mb-6">最新動態</p>
            <div className="box">
              <div className="base box-1"></div>
              <div className="base box-2"></div>
              <div className="base box-3"></div>
              <div className="base box-4"></div>
              <div className="base box-5"></div>
            </div>
          </div>
          <div className="card text-gray-400">
            <p className="text-left text-3xl pl-3 mb-6">精選社團</p>
            <div className="masonry">
              <div className="base item item-span-3"></div>
              <div className="base item"></div>
              <div className="base item item-span-2"></div>
              <div className="base item"></div>
              <div className="base item item-span-3"></div>
              <div className="base item item-span-2"></div>
              <div className="base item item-span-2"></div>
              <div className="base item item-span-1"></div>
              <div className="base item item-span-2"></div>
              <div className="base item"></div>
              <div className="base item"></div>
              <div className="base item item-span-2"></div>
              <div className="base item"></div>
              <div className="base item item-span-2"></div>
              <div className="base item"></div>
              <div className="base item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Societies
