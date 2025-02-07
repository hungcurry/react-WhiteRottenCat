import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Modal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 當 modal 開啟時，禁止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpen]);

  let shortcutAry = [
    '白爛貓家族俱樂部' , 
    '漫漫人生' ,
    'Front-End Taiwan' , 
    'Costco好市多',
    'MASS FOR THE DEAD' , 
    'JavaScript.tw' ,
    '白爛貓家族俱樂部' , 
    '漫漫人生' ,
    'Front-End Taiwan' , 
    'Costco好市多',
    'MASS FOR THE DEAD' , 
  ];

  const ShortcutItem = ({ name, index }) => (
    <li className="flex items-center justify-between w-full p-2 mb-6 rounded">
      <div className="flex items-center w-full">
        <div className="w-[32px] overflow-hidden rounded-xl mr-4">
          <img className="object-cover" src={`https://picsum.photos/800/800/?random=${index}`} alt={name} />
        </div>
        <p className="text-white text-2xl">{name}</p>
      </div>
      <select 
        className="px-16 py-2.5 rounded-lg text-2xl text-center text-white bg-fb-input focus:border-fb-input focus:ring-fb-input"
        defaultValue=""
      >
        <option value="" disabled hidden>請選擇</option>
        <option value="自動排序">自動排序</option>
        <option value="置頂">置頂</option>
        <option value="隱藏">隱藏</option>
      </select>
    </li>
  );

  return (
    <>
      <div id="modal" 
        className={`
        fixed left-0 top-0 right-0 w-full h-full bg-black/80
        flex justify-center items-start lg:items-center 
        duration-300 z-50 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="w-[90%] p-6 bg-fb-header mt-[150px] rounded-lg lg:mt-0 lg:w-[600px] relative">
          <p className="text-3xl my-4 font-medium text-center text-white mb-6">編輯你的捷徑</p>
          <div onClick={onClose} className="bg-fb-input rounded-full p-2 mr-4 flex justify-center items-center absolute right-3 top-6 cursor-pointer z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[25px] text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-400 mb-6">捷徑可讓你快速前往你最常在 Facebook 瀏覽的粉絲專頁、社團或遊戲。捷徑是自動排序，但你可以釘選粉絲專頁、社團或遊戲，讓它一律顯示在清單頂端，也可以從清單中隱藏。</p>
          <div className="flex w-full bg-fb-input py-2 px-3 rounded-full items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] mr-2" fill="none" viewBox="0 0 24 24"
              stroke="#9ba3af">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              className="w-full bg-transparent text-white focus:outline-none border-0 text-2xl" 
              placeholder="搜尋粉絲專頁、社團和遊戲"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* 捷徑render */}
          <ul className="overflow-y-auto h-[250px] no-scrollbar">
            {shortcutAry
              .filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((name, index) => (
                <ShortcutItem key={index} name={name} index={index + 1} />
              ))
            }
          </ul>
          <div className="flex justify-end items-center">
            <button type="button" onClick={onClose} className="hover:bg-fb-input text-2xl text-fb tracking-wide rounded-lg mt-4 px-6 py-4 mr-6">取消</button>
            <button type="button" disabled={shortcutAry.length === 0} className="bg-fb text-2xl text-white tracking-wide rounded-lg mt-4 px-12 py-4">儲存</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal
