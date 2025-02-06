      {/* 左側資訊欄 */}
      <div id="left-block" className="w-full hidden sticky top-main-span max-w-[360px] h-full pl-6 lg:block">
        <ul id="left-block-list">
          <li className="flex items-center  w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
            <div className="w-[32px] overflow-hidden rounded-full mr-4">
              <img className="object-cover" src="https://media1.giphy.com/media/H1eshAZvAfiofm870b/giphy.webp" alt="" />
            </div>
            <p className="text-white text-2xl">白爛貓</p>
          </li>
          <li className="flex items-center  w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
            <div className="w-[32px] overflow-hidden rounded-full mr-4">
              <img className="object-cover" src="https://bruce-fe-fb.web.app/image/left/activity.svg" alt="" />
            </div>
            <p className="text-white text-2xl">活動</p>
          </li>
          <li className="flex items-center  w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
            <div className="w-[32px] overflow-hidden rounded-full mr-4">
              <img className="object-cover" src="https://bruce-fe-fb.web.app/image/left/cloudy.png" alt="" />
            </div>
            <p className="text-white text-2xl">天氣</p>
          </li>
          <li className="flex items-center  w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
            <div className="w-[32px] overflow-hidden rounded-full mr-4">
              <img className="object-cover" src="https://bruce-fe-fb.web.app/image/left/dynamic.svg" alt="" />
            </div>
            <p className="text-white text-2xl">災害應變中心</p>
          </li>
          <li className="flex items-center  w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
            <div className="w-[32px] overflow-hidden rounded-full mr-4">
              <img className="object-cover" src="https://bruce-fe-fb.web.app/image/left/facemask.svg" alt="" />
            </div>
            <p className="text-white text-2xl">新冠病毒資訊中心</p>
          </li>
          <li className="flex items-center  w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
            <div className="w-[32px] overflow-hidden rounded-full mr-4">
              <img className="object-cover" src="https://bruce-fe-fb.web.app/image/left/friend.svg" alt="" />
            </div>
            <p className="text-white text-2xl">社團</p>
          </li>
        </ul>
        {/* 按鈕 */}
        <div className="w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
          {/* 展開 */}
          <div id="left-more-btn">
            <div className="flex items-center ">
              <div className=" bg-fb-input rounded-full p-2 mr-4 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-white text-2xl w-full">顯示更多</p>
            </div>
          </div>
          {/* 收合 */}
          <div className="hidden" id="left-fold-btn">
            <div className="flex items-center ">
              <div className=" bg-fb-input rounded-full p-2 mr-4 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <p className="text-white text-2xl w-full">顯示較少</p>
            </div>
          </div>
        </div>
        {/* 你的捷徑 */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl text-gray-400">你的捷徑</p>
            <p className="text-2xl text-fb hover:bg-fb-input px-4 py-2 cursor-pointer rounded-lg" id="login">編輯</p>
          </div>
          {/* 捷徑列表 */}
          <ul id="shortcutList"></ul>
        </div>
      </div>

      {/* 首頁 */}
      <div id="p1" className="w-full page text-white hidden">
        {/* 動態牆 */}
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">

          {/* 限時動態 */}
          <div className="relative">
            <div className="flex overflow-x-auto no-scrollbar lg:px-6" id="story-list">
              <div className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
                <div className="h-full flex flex-col">
                  <div className="overflow-hidden flex-1">
                    <img className="object-cover w-full h-full duration-500 hover:scale-105 select-none" src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
                  </div>
                  <div className="bg-fb-card pt-6 px-2 pb-2 relative">
                    <button className="w-[32px] h-[32px] p-2 absolute -top-7 left-[calc(50%-16px)] bg-fb rounded-full focus:outline-none 
                    ring-fb-card ring flex justify-center items-center">
                      <img src="https://bruce-fe-fb.web.app/image/plus.svg" />
                    </button>
                    <p className="w-full text-center text-white">建立限時動態</p>
                  </div>
                </div>
              </div>
              {/* 限時動態列表 */}
            </div>
            <button className="absolute popover-btn -right-3 top-[calc(50%-22.5px)] z-10 w-[45px] h-[45px]">
              <img src="https://bruce-fe-fb.web.app/image/right-arrow.svg" />
            </button>
          </div>

          {/* 在想些什麼？ */}
          <div className="card">
            <div className="flex pb-4">
              <div className="w-[40px] rounded-full overflow-hidden mr-3">
                <img src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
              </div>
              <div className="bg-fb-input flex-1 rounded-full flex items-center">
                <p className="text-left text-2xl pl-3 text-gray-400 ">
                  白爛貓，在想些什麼？
                </p>
              </div>
            </div> 
            <div className="border-t border-gray-700 flex pt-3">
              <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div className="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/camera.svg" alt="" />
                </div>
                <p className="text-gray-400 text-2xl pl-1.5">直播視訊</p>
              </button>
              <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div className="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/photo.svg" alt="" />
                </div>
                <p className="text-gray-400 text-2xl pl-1.5">相片／影片</p>
              </button>
              <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div className="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/feel.svg" alt="" />
                </div>
                <p className="text-gray-400 text-2xl pl-1.5">感受／活動</p>
              </button>
            </div>
          </div>

          {/* 開包廂 */}
          <div className="card pr-0 flex">
            {/* Swiper */}
            <div className="swiper fb-live">
              <div className="swiper-wrapper" id="swiper-wrapper-live">
                <div className="swiper-slide">
                  <button className="mr-4 px-4 h-[40px] ring-2 ring-gray-600 flex items-center rounded-full focus:outline-none">
                    <div className="w-[24px]">
                      <img src="https://bruce-fe-fb.web.app/image/video.svg" alt="" />
                    </div>
                    <p className="ml-2 text-fb text-xl font-bold">建立包廂</p>
                  </button>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>

          {/* 貼文牆 */}
          <div className="postWall card pb-0 px-0 hidden">
            {/* 貼文標題 */}
            <div className="flex px-4">
              <div className="w-[44px] rounded-full overflow-hidden mr-3">
                <img src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
              </div>
              <div className="flex-1">
                <p className="text-white">白爛貓 87分雜貨鋪</p>
                <div className="flex items-center text-gray-400 text-2xl">
                  <div className="text-xl">5小時</div>
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
            <p className="text-3xl text-gray-300 mt-3 px-4">【白爛貓】87分雜貨鋪 隆重開幕囉！！</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-15 overflow-hidden">
                <img src="https://i.ibb.co/P5DBVtW/cat3.jpg" className="object-cover w-full"/>
              </div>
              <div className="bg-fb-input w-full px-4 py-2 text-white">
                <p className="text-gray-400 text-xl">WWW.xxxxxx.COM</p>
                <p className="text-2xl">白爛貓 87分雜貨鋪開幕囉！！</p>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="px-4">
              <div className="border-b border-gray-700 flex justify-between py-3">
                <div className="flex items-center">
                  <div className="w-[20px] mr-2">
                    <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
                  </div>
                  <p className="text-xl text-gray-400">990</p>
                </div>
                <div className="flex items-center">
                  <p className="text-xl text-gray-400 mr-2">4則留言</p>
                  <p className="text-xl text-gray-400">1次分享</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">分享</p>
                </button>
              </div>
            </div>
          </div>
          <div className="postWall card pb-0 px-0 hidden">
            {/* 貼文標題 */}
            <div className="flex px-4">
              <div className="w-[44px] rounded-full overflow-hidden mr-3">
                <img src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
              </div>
              <div className="flex-1">
                <p className="text-white">白爛貓 87分雜貨鋪</p>
                <div className="flex items-center text-gray-400 text-2xl">
                  <div className="text-xl">5小時</div>
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
            <p className="text-3xl text-gray-300 mt-3 px-4">【白爛貓】87分雜貨鋪 隆重開幕囉！！</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-15 overflow-hidden">
                <img src="https://i.ibb.co/HNB3t6w/cat4.jpg" className="object-cover w-full"/>
              </div>
              <div className="bg-fb-input w-full px-4 py-2 text-white">
                <p className="text-gray-400 text-xl">WWW.xxxxxx.COM</p>
                <p className="text-2xl">白爛貓 87分雜貨鋪開幕囉！！</p>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="px-4">
              <div className="border-b border-gray-700 flex justify-between py-3">
                <div className="flex items-center">
                  <div className="w-[20px] mr-2">
                    <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
                  </div>
                  <p className="text-xl text-gray-400">990</p>
                </div>
                <div className="flex items-center">
                  <p className="text-xl text-gray-400 mr-2">4則留言</p>
                  <p className="text-xl text-gray-400">1次分享</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">分享</p>
                </button>
              </div>
            </div>
          </div>
          <div className="postWall card pb-0 px-0 hidden">
            {/* 貼文標題 */}
            <div className="flex px-4">
              <div className="w-[44px] rounded-full overflow-hidden mr-3">
                <img src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
              </div>
              <div className="flex-1">
                <p className="text-white">白爛貓 87分雜貨鋪</p>
                <div className="flex items-center text-gray-400 text-2xl">
                  <div className="text-xl">5小時</div>
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
            <p className="text-3xl text-gray-300 mt-3 px-4">【白爛貓】87分雜貨鋪 隆重開幕囉！！</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-15 overflow-hidden">
                <img src="https://i.ibb.co/Nrnh9Xy/cat5.jpg" className="object-cover w-full"/>
              </div>
              <div className="bg-fb-input w-full px-4 py-2 text-white">
                <p className="text-gray-400 text-xl">WWW.xxxxxx.COM</p>
                <p className="text-2xl">白爛貓 87分雜貨鋪開幕囉！！</p>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="px-4">
              <div className="border-b border-gray-700 flex justify-between py-3">
                <div className="flex items-center">
                  <div className="w-[20px] mr-2">
                    <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
                  </div>
                  <p className="text-xl text-gray-400">990</p>
                </div>
                <div className="flex items-center">
                  <p className="text-xl text-gray-400 mr-2">4則留言</p>
                  <p className="text-xl text-gray-400">1次分享</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">分享</p>
                </button>
              </div>
            </div>
          </div>
          <div className="postWall card pb-0 px-0 hidden">
            {/* 貼文標題 */}
            <div className="flex px-4">
              <div className="w-[44px] rounded-full overflow-hidden mr-3">
                <img src="https://i.ibb.co/G2jbbtS/cat1.jpg"/>
              </div>
              <div className="flex-1">
                <p className="text-white">白爛貓 87分雜貨鋪</p>
                <div className="flex items-center text-gray-400 text-2xl">
                  <div className="text-xl">5小時</div>
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
            <p className="text-3xl text-gray-300 mt-3 px-4">【白爛貓】87分雜貨鋪 隆重開幕囉！！</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-15 overflow-hidden">
                <img src="https://i.ibb.co/XsvbW3z/cat6.jpg" className="object-cover w-full"/>
              </div>
              <div className="bg-fb-input w-full px-4 py-2 text-white">
                <p className="text-gray-400 text-xl">WWW.xxxxxx.COM</p>
                <p className="text-2xl">白爛貓 87分雜貨鋪開幕囉！！</p>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="px-4">
              <div className="border-b border-gray-700 flex justify-between py-3">
                <div className="flex items-center">
                  <div className="w-[20px] mr-2">
                    <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
                  </div>
                  <p className="text-xl text-gray-400">990</p>
                </div>
                <div className="flex items-center">
                  <p className="text-xl text-gray-400 mr-2">4則留言</p>
                  <p className="text-xl text-gray-400">1次分享</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">分享</p>
                </button>
              </div>
            </div>
          </div>

          {/* 貼文牆 (Loading) */}
          <div className="loadBlock card pb-0 px-0 animate-pulse">
            {/* 貼文標題 */}
            <div className="flex px-4 items-center mb-4">
              <div className="w-[44px] h-[44px] rounded-full overflow-hidden mr-3bg-fb-input"></div>
              <div className="flex content-evenly flex-wrap w-[200px] h-[50px]">
                <div className="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
                <div className="bg-fb-input h-[12px] w-[100px] rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-[260px] bg-fb-input"></div>
          </div>
          <div className="loadBlock card pb-0 px-0 animate-pulse">
            {/* 貼文標題 */}
            <div className="flex px-4 items-center mb-4">
              <div className="w-[44px] h-[44px] rounded-full overflow-hidden mr-3bg-fb-input"></div>
              <div className="flex content-evenly flex-wrap w-[200px] h-[50px]">
                <div className="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
                <div className="bg-fb-input h-[12px] w-[100px] rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-[260px] bg-fb-input"></div>
          </div>
          <div className="loadBlock card pb-0 px-0 animate-pulse">
            {/* 貼文標題 */}
            <div className="flex px-4 items-center mb-4">
              <div className="w-[44px] h-[44px] rounded-full overflow-hidden mr-3bg-fb-input"></div>
              <div className="flex content-evenly flex-wrap w-[200px] h-[50px]">
                <div className="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
                <div className="bg-fb-input h-[12px] w-[100px] rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-[260px] bg-fb-input"></div>
          </div>

        </div>
      </div>
      {/* 影片 */}
      <div id="p2" className="w-full page text-white hidden">
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">
          <div className="postWall card pb-0 px-0 hidden">
            {/* 貼文標題 */}
            <div className="flex px-4">
              <div className="w-[44px] rounded-full overflow-hidden mr-3">
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
            <p className="text-3xl text-gray-300 mt-3 px-4">白爛魔術秀 Lan Lan Cat Magic Show！！</p>
            {/* 貼文圖片 */}
              <div className="w-full aspect-w-16 aspect-h-11 overflow-hidden">
                <iframe src="https://www.youtube.com/embed/DaFxQ-eIGXM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            {/* 讚、留言 */}
            <div className="flex flex-col lg:flex-row lg:justify-between py-3 px-4">
              <div className="flex order-1 justify-between items-center py-2 shrink-0 lg:order-none">
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
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
          <div className="postWall card pb-0 px-0 hidden">
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
            <p className="text-3xl text-gray-300 mt-3 px-4">白爛健康操 Lan Lan Cat Health exercise</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-11 overflow-hidden">
                <iframe src="https://www.youtube.com/embed/eZUkBuLbEzM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="flex flex-col lg:flex-row lg:justify-between py-3 px-4">
              <div className="flex order-1 justify-between items-center py-2 shrink-0 lg:order-none">
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
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
          <div className="postWall card pb-0 px-0 hidden">
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
            <p className="text-3xl text-gray-300 mt-3 px-4">爛爛與魚魚 Lan Lan Cat & That Fish</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-11 overflow-hidden">
                <iframe src="https://www.youtube.com/embed/Zkpbfio6a6I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="flex flex-col lg:flex-row lg:justify-between py-3 px-4">
              <div className="flex order-1 justify-between items-center py-2 shrink-0 lg:order-none">
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
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
          <div className="postWall card pb-0 px-0 hidden">
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
            <p className="text-3xl text-gray-300 mt-3 px-4">爛爛餵食記 Lan Lan Cat Feeding record</p>
            {/* 貼文圖片 */}
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="block mt-3">
              <div className="w-full aspect-w-16 aspect-h-11 overflow-hidden">
                <iframe src="https://www.youtube.com/embed/PJIXNB55bQk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </a>
            {/* 讚、留言 */}
            <div className="flex flex-col lg:flex-row lg:justify-between py-3 px-4">
              <div className="flex order-1 justify-between items-center py-2 shrink-0 lg:order-none">
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/like.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">讚</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/chat.svg"alt=""/>
                  </div>
                  <p className="text-gray-400 text-xl pl-1.5">留言</p>
                </button>
                <button className="w-[80px] h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center mr-2">
                  <div className="w-[16px]">
                    <img src="https://bruce-fe-fb.web.app/image/share.svg"alt=""/>
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
        </div>
      </div>
      {/* Marketplace */}
      <div id="p3" className="w-full page text-white hidden">
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">
          <div className="card">
            <p className="text-left text-3xl pl-3 text-gray-400 mb-6">依照類別瀏覽</p>
            <div className="scrollbar flex overflow-x-auto pb-4">
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">所有商品</p>
              </div>
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">文具</p>
              </div>
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">居家生活</p>
              </div>
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">精選系列</p>
              </div>
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">配件</p>
              </div>
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">派對遊戲</p>
              </div>
              <div className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3">
                <p className="text-gray-400 text-2xl py-3 px-6">新品上架</p>
              </div>
            </div> 
          </div>
          {/* renderCardList */}
          <div className="flex flex-wrap justify-between mx-[-7.5px]" id="marketCard"></div>
        </div>
      </div>
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

      {/* 右側聯絡人 */}
      <div id="right-block" className="w-full hidden sticky top-main-span max-w-[360px] h-full pl-6 lg:block z-30">
        {/* AD */}
        <p className="text-2xl text-gray-400 mb-6">贊助</p>
        <div className="flex items-center w-full py-2 px-2 mb-3 rounded cursor-pointer text-white relative ad-block">
          <div className="w-[130px] mr-6 shrink-0">
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="rounded-2xl block">
              <img className="object-cover user-drag" src="https://i.ibb.co/gj8K19F/flote.jpg" alt="" />
            </a>
          </div>
          <div>
            <p className="mb-3 select-none">贈品還是送折扣碼 NFJ54</p>
            <p className="text-xl text-gray-400 tracking-wide select-none">flotemp.com</p>
          </div>
          <button className="popover-btn w-[36px] h-[36px] absolute right-3 top-[-5px] hidden z-10 js-adBtn" id="ad-btn1">
            <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
          </button>
          {/* 下拉選單 1 more */}
          <div className="popover-panel ad-panel z-20 hidden" id="ad-panel1">
            <div className="flex p-1 mb-4 items-center hover:bg-fb-input rounded-lg cursor-pointer" id="color-theme-switcher">
              <div className="popover-btn bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="flex-1 text-white text-2xl">隱藏廣告</p>
                <p className="text-xl text-gray-400">不要再看到這則廣告</p>
              </div>
            </div>
            <div className="flex p-1 mb-2 items-center hover:bg-fb-input rounded-lg cursor-pointer">
              <div className="popover-btn bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white text-2xl">檢舉廣告</p>
                <p className="text-xl text-gray-400">為什麼會看到這廣告</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full py-2 px-2 mb-6 rounded cursor-pointer text-white relative ad-block">
          <div className="w-[130px] mr-6 shrink-0">
            <a href="#" onClick={ (e) => { e.preventDefault()} } className="rounded-2xl block">
              <img className="object-cover user-drag" src="https://i.ibb.co/jLPdjhB/222.jpg" alt="" />
            </a>
          </div>
          <div>
            <p className="mb-3 select-none">一鍵下單｜24 小時即刻出貨</p>
            <p className="text-xl text-gray-400 tracking-wide select-none"></p>
          </div>
          <button className="popover-btn w-[36px] h-[36px] absolute right-3 top-[-5px] hidden z-10 js-adBtn" id="ad-btn2">
            <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
          </button>
            {/* 下拉選單 2 more */}
          <div className="popover-panel ad-panel z-20 hidden" id="ad-panel2">
            <div className="flex p-1 mb-4 items-center hover:bg-fb-input rounded-lg cursor-pointer" id="color-theme-switcher">
              <div className="popover-btn bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="flex-1 text-white text-2xl">隱藏廣告</p>
                <p className="text-xl text-gray-400">不要再看到這則廣告</p>
              </div>
            </div>
            <div className="flex p-1 mb-2 items-center hover:bg-fb-input rounded-lg cursor-pointer">
              <div className="popover-btn bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white text-2xl">檢舉廣告</p>
                <p className="text-xl text-gray-400">為什麼會看到這廣告</p>
              </div>
            </div>
          </div>
        </div>
        {/* 聯絡人 */}
        <div id="contactPerson"></div>
      </div>
