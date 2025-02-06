import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Modal = () => {

  return (
    <>
      {/* modal */}
      <div id="modal" 
        class="
        fixed left-0 top-0 right-0 w-full h-full bg-black/80
        flex justify-center items-start lg:items-center 
        duration-300 z-50 pointer-events-none opacity-0">
        <div class="w-[90%] p-6 bg-fb-header mt-[150px] rounded-lg lg:mt-0 lg:w-[600px] relative">
          <p class="text-3xl my-4 font-medium text-center text-white mb-6">編輯你的捷徑</p>
          <div class=" bg-fb-input rounded-full p-2 mr-4 flex justify-center items-center absolute right-3 top-6 cursor-pointer z-10 js-close">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[25px] w-[25px] text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-gray-400 mb-6">捷徑可讓你快速前往你最常在 Facebook 瀏覽的粉絲專頁、社團或遊戲。捷徑是自動排序，但你可以釘選粉絲專頁、社團或遊戲，讓它一律顯示在清單頂端，也可以從清單中隱藏。</p>
          <div class="flex w-full bg-fb-input py-2 px-3 rounded-full items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px] mr-2" fill="none" viewBox="0 0 24 24"
              stroke="#9ba3af">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" class="w-full bg-transparent text-white focus:outline-none border-0 text-2xl" placeholder="搜尋粉絲專頁、社團和遊戲"/>
          </div>
          {/* 捷徑render */}
          <ul class="overflow-y-auto h-[250px] no-scrollbar" id="edit-shortcutList"></ul>
          <div class="flex justify-end items-center">
            <button type="button" class="hover:bg-fb-input text-2xl text-fb tracking-wide rounded-lg mt-4 px-6 py-4 mr-6 js-close">取消</button>
            <button type="button" class="bg-fb text-2xl text-white tracking-wide rounded-lg mt-4 px-12 py-4">儲存</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal
