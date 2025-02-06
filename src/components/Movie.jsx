import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Movie = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 延遲1.5秒後顯示內容
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // 影片資料
  const videos = [
    {
      title: "白爛魔術秀 Lan Lan Cat Magic Show！！",
      videoId: "DaFxQ-eIGXM"
    },
    {
      title: "白爛健康操 Lan Lan Cat Health exercise",
      videoId: "eZUkBuLbEzM"  
    },
    {
      title: "爛爛與魚魚 Lan Lan Cat & That Fish",
      videoId: "Zkpbfio6a6I"
    },
    {
      title: "爛爛餵食記 Lan Lan Cat Feeding record", 
      videoId: "PJIXNB55bQk"
    }
  ];

  // 貼文元件
  const PostCard = ({ title, videoId }) => (
    <div className={`postWall card pb-0 px-0 ${isLoading ? 'hidden' : ''}`}>
      {/* 貼文標題 */}
      <div className="flex px-4">
        <div className="w-[44px] rounded-full overflow-hidden mr-3">
          <img src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
        </div>
        <div className="flex-1">
          <p className="text-white">白爛貓影展</p>
          <div className="flex items-center text-gray-400 text-2xl">
            <div className="text-xl">4小時</div>
            <div>．</div>
            <div className="w-[14px]">
              <img className="w-full" src="https://bruce-fe-fb.web.app/image/earth.svg"/>
            </div>
          </div>
        </div>
        <button className="w-[12px] focus:outline-none">
          <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
        </button>
      </div>

      {/* 貼文內文 */}
      <p className="text-3xl text-gray-300 mt-3 px-4">{title}</p>

      {/* 影片 */}
      <div className="w-full aspect-w-16 aspect-h-11 overflow-hidden">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>

      {/* 讚、留言 */}
      <div className="flex flex-col lg:flex-row lg:justify-between py-3 px-4">
        <div className="flex order-1 justify-between items-center py-2 shrink-0 lg:order-none">
          <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
            <div className="w-[16px]">
              <img src="https://bruce-fe-fb.web.app/image/like.svg" alt=""/>
            </div>
            <p className="text-gray-400 text-xl pl-1.5">讚</p>
          </button>
          <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
            <div className="w-[16px]">
              <img src="https://bruce-fe-fb.web.app/image/chat.svg" alt=""/>
            </div>
            <p className="text-gray-400 text-xl pl-1.5">留言</p>
          </button>
          <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
            <div className="w-[16px]">
              <img src="https://bruce-fe-fb.web.app/image/share.svg" alt=""/>
            </div>
            <p className="text-gray-400 text-xl pl-1.5">分享</p>
          </button>
        </div>
        <div className="flex justify-end items-center py-4 lg:py-2 border-gray-400 border-b lg:border-0">
          <div className="w-[20px] mr-2">
            <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
          </div>
          <p className="text-xl text-gray-400 mr-2">9990</p>
          <p className="text-xl text-gray-400 mr-2">24則留言</p>
          <p className="text-xl text-gray-400">11萬次觀看</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* 影片 */}
      <div id="p2" className="w-full page text-white hidden">
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">
          {videos.map((video, index) => (
            <PostCard key={index} {...video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie
