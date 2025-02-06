import { useState } from 'react'

const Information = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const leftArr = [
    {
      name: "企業管理平台",
      img: "https://bruce-fe-fb.web.app/image/left/job.png",
    },
    {
      name: "Messenger", 
      img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    },
    {
      name: "近期廣告動態",
      img: "https://bruce-fe-fb.web.app/image/left/pay.png", 
    },
    {
      name: "朋友名單",
      img: "https://bruce-fe-fb.web.app/image/left/sale.png",
    },
    {
      name: "最愛",
      img: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
    {
      name: "Marketplace",
      img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      name: "Watch",
      img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
    {
      name: "廣告管理員",
      img: "https://i.ibb.co/6bFz3s2/C949oxkze-S.png",
    },
    {
      name: "動態回顧",
      img: "https://i.ibb.co/zZWnQnf/lqym-E2i-RETE.png",
    },
    {
      name: "最新資訊",
      img: "https://i.ibb.co/b6jWqqx/k-Y1-UFd6n2-O.png",
    },
    {
      name: "我的珍藏",
      img: "https://i.ibb.co/BLYFmxv/oc-BBGg-g-Rd5.png",
    },
  ];

  const defaultItems = [
    {
      name: "白爛貓",
      img: "https://media1.giphy.com/media/H1eshAZvAfiofm870b/giphy.webp"
    },
    {
      name: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/activity.svg"
    },
    {
      name: "天氣",
      img: "https://bruce-fe-fb.web.app/image/left/cloudy.png"
    },
    {
      name: "災害應變中心",
      img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg"
    },
    {
      name: "新冠病毒資訊中心",
      img: "https://bruce-fe-fb.web.app/image/left/facemask.svg"
    },
    {
      name: "社團",
      img: "https://bruce-fe-fb.web.app/image/left/friend.svg"
    }
  ];

  const ListItem = ({ name, img }) => (
    <li className="flex items-center w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
      <div className="w-[32px] overflow-hidden rounded-full mr-4">
        <img className="object-cover" src={img} alt={name} />
      </div>
      <p className="text-white text-2xl">{name}</p>
    </li>
  );

  return (
    <>
      {/* 左側資訊欄 */}
      <div id="left-block" className="w-full hidden sticky top-main-span max-w-[360px] h-full pl-6 lg:block">
        <ul id="left-block-list">
          {defaultItems.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
          
          {isExpanded && (
            <div className="list transition-all duration-700">
              {leftArr.map((item, index) => (
                <ListItem key={`expanded-${index}`} {...item} />
              ))}
            </div>
          )}
        </ul>
        
        {/* 按鈕 */}
        <div className="w-full p-2 mb-6 rounded hover:bg-fb-input cursor-pointer">
          {!isExpanded ? (
            <div onClick={() => setIsExpanded(true)} className="flex items-center">
              <div className="bg-fb-input rounded-full p-2 mr-4 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-white text-2xl w-full">顯示更多</p>
            </div>
          ) : (
            <div onClick={() => setIsExpanded(false)} className="flex items-center">
              <div className="bg-fb-input rounded-full p-2 mr-4 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <p className="text-white text-2xl w-full">顯示較少</p>
            </div>
          )}
        </div>

        {/* 你的捷徑 */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl text-gray-400">你的捷徑</p>
            <p className="text-2xl text-fb hover:bg-fb-input px-4 py-2 cursor-pointer rounded-lg">編輯</p>
          </div>
          <ul id="shortcutList"></ul>
        </div>
      </div>
    </>
  );
};

export default Information
