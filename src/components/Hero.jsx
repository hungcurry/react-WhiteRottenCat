import { useEffect, useRef, useState } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'

function Hero() {
  const [stories, setStories] = useState([])
  const [liveRooms, setLiveRooms] = useState([])
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const storyListRef = useRef(null)

  // Generate story data
  useEffect(() => {
    const storyData = Array.from({ length: 6 }).fill().map((_, i) => ({
      id: `story-${i}`,
      name: '阿貓',
      title: '白爛貓',
      image: 'https://i.ibb.co/9sPFqKz/cat2.jpg',
    }))
    setStories(storyData)
  }, [])

  // Generate live room data
  useEffect(() => {
    const liveData = Array.from({ length: 20 }).fill().map((_, i) => ({
      id: `live-${i}`,
      image: 'https://i.ibb.co/G2jbbtS/cat1.jpg',
      isOnline: true,
    }))
    setLiveRooms(liveData)
  }, [])

  // Generate post data
  useEffect(() => {
    const postData = [
      {
        id: 1,
        image: 'https://i.ibb.co/P5DBVtW/cat3.jpg',
        likes: 990,
        comments: 4,
        shares: 1,
      },
      {
        id: 2,
        image: 'https://i.ibb.co/HNB3t6w/cat4.jpg',
        likes: 990,
        comments: 4,
        shares: 1,
      },
      {
        id: 3,
        image: 'https://i.ibb.co/Nrnh9Xy/cat5.jpg',
        likes: 990,
        comments: 4,
        shares: 1,
      },
      {
        id: 4,
        image: 'https://i.ibb.co/XsvbW3z/cat6.jpg',
        likes: 990,
        comments: 4,
        shares: 1,
      },
    ]
    setPosts(postData)

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Story list scroll handling
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  // Initialize Swiper
  useEffect(() => {
    const swiper = new Swiper('.fb-live', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    return () => {
      if (swiper)
        swiper.destroy()
    }
  }, [])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - storyListRef.current.offsetLeft)
    setScrollLeft(storyListRef.current.scrollLeft)
    setHasMoved(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging)
      return
    e.preventDefault()
    const x = e.pageX - storyListRef.current.offsetLeft
    const walk = x - startX
    storyListRef.current.scrollLeft = scrollLeft - walk
    setHasMoved(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleStoryClick = (e) => {
    if (hasMoved) {
      e.preventDefault()
    }
  }

  return (
    <>
      {/* 首頁 */}
      <div id="p1" className="w-full page text-white hidden">
        {/* 動態牆 */}
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">

          {/* 限時動態 */}
          <div className="relative">
            <div
              ref={storyListRef}
              className="flex overflow-x-auto no-scrollbar lg:px-6"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Create Story Button */}
              <div className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
                <div className="h-full flex flex-col">
                  <div className="overflow-hidden flex-1">
                    <img className="object-cover w-full h-full duration-500 hover:scale-105 select-none" src="https://i.ibb.co/G2jbbtS/cat1.jpg" />
                  </div>
                  <div className="bg-fb-card pt-6 px-2 pb-2 relative">
                    <button type="button" className="w-[32px] h-[32px] p-2 absolute -top-7 left-[calc(50%-16px)] bg-fb rounded-full focus:outline-none ring-fb-card ring flex justify-center items-center">
                      <img src="https://bruce-fe-fb.web.app/image/plus.svg" />
                    </button>
                    <p className="w-full text-center text-white">建立限時動態</p>
                  </div>
                </div>
              </div>

              {/* Story List */}
              {stories.map(story => (
                <div key={story.id} className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
                  <a
                    href="https://google.com/"
                    className="relative overflow-hidden"
                    onClick={handleStoryClick}
                  >
                    <div className="hidden absolute w-full h-full top-0 left-0 bg-orange/30 z-20"></div>
                    <div className="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-10">
                      <p className="text-white text-sm">{story.name}</p>
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-orange-600/30 to-transparent"></div>
                    <img
                      className="w-full h-full duration-500 select-none hover:scale-105"
                      src={story.image}
                    />
                    <p className="absolute bottom-2 left-2 text-white">{story.title}</p>
                  </a>
                </div>
              ))}
            </div>
            <button type="button" className="absolute popover-btn -right-3 top-[calc(50%-22.5px)] z-10 w-[45px] h-[45px]">
              <img src="https://bruce-fe-fb.web.app/image/right-arrow.svg" />
            </button>
          </div>

          {/* 在想些什麼？ */}
          <div className="card">
            <div className="flex pb-4">
              <div className="w-[40px] rounded-full overflow-hidden mr-3">
                <img src="https://i.ibb.co/G2jbbtS/cat1.jpg" />
              </div>
              <div className="bg-fb-input flex-1 rounded-full flex items-center">
                <p className="text-left text-2xl pl-3 text-gray-400">
                  白爛貓，在想些什麼？
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 flex pt-3">
              <button type="button" className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div className="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/camera.svg" alt="" />
                </div>
                <p className="text-gray-400 text-2xl pl-1.5">直播視訊</p>
              </button>
              <button type="button" className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div className="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/photo.svg" alt="" />
                </div>
                <p className="text-gray-400 text-2xl pl-1.5">相片／影片</p>
              </button>
              <button type="button" className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div className="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/feel.svg" alt="" />
                </div>
                <p className="text-gray-400 text-2xl pl-1.5">感受／活動</p>
              </button>
            </div>
          </div>

          {/* 開包廂 */}
          <div className="card pr-0 flex">
            <div className="swiper fb-live">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <button type="button" className="mr-4 px-4 h-[40px] ring-2 ring-gray-600 flex items-center rounded-full focus:outline-none">
                    <div className="w-[24px]">
                      <img src="https://bruce-fe-fb.web.app/image/video.svg" alt="" />
                    </div>
                    <p className="ml-2 text-fb text-xl font-bold">建立包廂</p>
                  </button>
                </div>
                {liveRooms.map(room => (
                  <div key={room.id} className="swiper-slide">
                    <div className="w-[55px]">
                      <div className="relative w-[40px] cursor-pointer">
                        <div className="overflow-hidden rounded-full">
                          <img src={room.image} />
                        </div>
                        {room.isOnline && (
                          <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>

          {/* Posts */}
          {!isLoading
            ? posts.map(post => (
                <div key={post.id} className="card pb-0 px-0">
                  {/* Post Header */}
                  <div className="flex px-4">
                    <div className="w-[44px] rounded-full overflow-hidden mr-3">
                      <img src="https://i.ibb.co/G2jbbtS/cat1.jpg" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white">白爛貓 87分雜貨鋪</p>
                      <div className="flex items-center text-gray-400 text-2xl">
                        <div className="text-xl">5小時</div>
                        <div>．</div>
                        <div className="w-[14px]">
                          <img className="w-full" src="https://bruce-fe-fb.web.app/image/earth.svg" />
                        </div>
                      </div>
                    </div>
                    <button type="button" className="w-[12px] focus:outline-none">
                      <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
                    </button>
                  </div>

                  {/* Post Content */}
                  <p className="text-3xl text-gray-300 mt-3 px-4">【白爛貓】87分雜貨鋪 隆重開幕囉！！</p>

                  {/* Post Image */}
                  <a href="#" onClick={e => e.preventDefault()} className="block mt-3">
                    <div className="w-full aspect-w-16 aspect-h-15 overflow-hidden">
                      <img src={post.image} className="object-cover w-full" />
                    </div>
                    <div className="bg-fb-input w-full px-4 py-2 text-white">
                      <p className="text-gray-400 text-xl">WWW.xxxxxx.COM</p>
                      <p className="text-2xl">白爛貓 87分雜貨鋪開幕囉！！</p>
                    </div>
                  </a>

                  {/* Post Actions */}
                  <div className="px-4">
                    <div className="border-b border-gray-700 flex justify-between py-3">
                      <div className="flex items-center">
                        <div className="w-[20px] mr-2">
                          <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" />
                        </div>
                        <p className="text-xl text-gray-400">{post.likes}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-xl text-gray-400 mr-2">
                          {post.comments}
                          則留言
                        </p>
                        <p className="text-xl text-gray-400">
                          {post.shares}
                          次分享
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center py-2">
                      <button type="button" className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                        <div className="w-[16px]">
                          <img src="https://bruce-fe-fb.web.app/image/like.svg" alt="" />
                        </div>
                        <p className="text-gray-400 text-xl pl-1.5">讚</p>
                      </button>
                      <button type="button" className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                        <div className="w-[16px]">
                          <img src="https://bruce-fe-fb.web.app/image/chat.svg" alt="" />
                        </div>
                        <p className="text-gray-400 text-xl pl-1.5">留言</p>
                      </button>
                      <button type="button" className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                        <div className="w-[16px]">
                          <img src="https://bruce-fe-fb.web.app/image/share.svg" alt="" />
                        </div>
                        <p className="text-gray-400 text-xl pl-1.5">分享</p>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <div key={`skeleton-${i}-${Date.now()}`} className="card pb-0 px-0 animate-pulse">
                  <div className="flex px-4 items-center mb-4">
                    <div className="w-[44px] h-[44px] rounded-full overflow-hidden mr-3 bg-fb-input"></div>
                    <div className="flex content-evenly flex-wrap w-[200px] h-[50px]">
                      <div className="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
                      <div className="bg-fb-input h-[12px] w-[100px] rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full h-[260px] bg-fb-input"></div>
                </div>
              ))}

        </div>
      </div>
    </>
  )
}

export default Hero
