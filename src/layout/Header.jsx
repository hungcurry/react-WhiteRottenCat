// import { NavLink } from '<react-router-dom></react-router-dom>'
import { useEffect } from 'react'

function Header() {
  useEffect(() => {
    const popoverBtn = document.querySelectorAll('.nav-btn')
    const popoverPanel = document.querySelectorAll('.popover-panel')

    function panelClickHandler(e) {
      e.stopPropagation()
    }

    function openPanel(index) {
      popoverPanel.forEach((item, idx) => {
        if (item) {
          item.classList.add('hidden')
          item.addEventListener('click', panelClickHandler)
          if (index === idx + 1) {
            item.classList.remove('hidden')
          }
        }
      })
    }

    function clickPopoverFn(e) {
      e.stopPropagation()
      const id = Number(e.currentTarget.getAttribute('id').substr(3))
      openPanel(id)
    }

    function handleWindowClick() {
      openPanel(-1)
    }

    window.addEventListener('click', handleWindowClick)

    popoverBtn.forEach((item) => {
      if (item) {
        item.addEventListener('click', clickPopoverFn)
      }
    })

    // header menu相關
    const navBtn = document.querySelectorAll('.nav')
    const page = document.querySelectorAll('.page')
    const idx = 0

    if (page[idx]) {
      page[idx].classList.remove('hidden')
    }

    function btnClickFn(e) {
      e.stopPropagation()
      const nav = e.currentTarget
      const id = Number(nav.getAttribute('id').substr(1))

      navBtn.forEach((btn) => {
        if (btn && btn.children[0] && btn.children[0].children[0]) {
          const svgAll = btn.children[0].children[0]
          btn.classList.remove('js-nav-active')
          svgAll.classList.remove('text-fb')
        }
      })

      if (nav && nav.children[0] && nav.children[0].children[0]) {
        nav.classList.add('js-nav-active')
        nav.children[0].children[0].classList.add('text-fb')
      }
      openPage(id)
    }

    function openPage(index) {
      page.forEach((item, idx) => {
        if (item) {
          item.classList.add('hidden')
          if (index === idx + 1) {
            item.classList.remove('hidden')
          }
        }
      })
    }

    navBtn.forEach((item) => {
      if (item) {
        item.addEventListener('click', btnClickFn)
      }
    })

    // Cleanup function
    return () => {
      window.removeEventListener('click', handleWindowClick)

      popoverBtn.forEach((item) => {
        if (item) {
          item.removeEventListener('click', clickPopoverFn)
        }
      })

      navBtn.forEach((item) => {
        if (item) {
          item.removeEventListener('click', btnClickFn)
        }
      })

      popoverPanel.forEach((item) => {
        if (item) {
          item.removeEventListener('click', panelClickHandler)
        }
      })
    }
  }, [])

  return (
    <>
      {/* <header>
        <div className="nav-link">
          <NavLink className="text-white" to="/">
            <p>Home</p>
          </NavLink>
          <NavLink className="text-white ml-5" to="/todo">
            <p>Todo頁面</p>
          </NavLink>
          <NavLink className="text-white ml-5" to="/todo-redux">
            <p>Todo Redux</p>
          </NavLink>
        </div>
      </header> */}

      <header className="w-full h-[56px] bg-fb-header lg:fixed lg:top-0 lg:left-0 lg:right-0 flex justify-between items-center px-6 z-50">
        {/* header left */}
        <div className="flex items-center">
          {/* FB logo */}
          <svg viewBox="0 0 36 36" className="fill-current text-fb" height="39" width="39">
            <defs>
              <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%">
                <stop offset="0%" stopColor="#0062E0"></stop>
                <stop offset="100%" stopColor="#19AFFF"></stop>
              </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z">
            </path>
            <path
              className="fill-current text-white"
              d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            >
            </path>
          </svg>
          {/* search bar */}
          <button type="button" className="popover-btn lg:hidden p-">
            <img src="https://bruce-fe-fb.web.app/image/search.svg" />
          </button>
          {/* (只在電腦版顯示) */}
          <div className="bg-fb-input ml-2 py-2 px-3 w-[240px] rounded-full items-center hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9ba3af"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" className="w-full bg-transparent text-white focus:outline-none border-0" placeholder="搜尋 Facebook" />
          </div>
        </div>

        {/* header menu */}
        <ul className="navbox text-white bg-fb-header
        w-full fixed left-0 bottom-0 flex justify-between items-center
        lg:justify-center lg:static lg:left-auto lg:bottom-auto lg:w-auto z-50"
        >
          <li className="nav flex-1 lg:flex-grow-0 items-center border-b-4 border-transparent lg:mr-6 js-nav-active" id="n1">
            <a href="#" onClick={(e) => { e.preventDefault() }} className="flex justify-center px-10 lg:px-20 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-fb" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </li>
          <li className="nav flex-1 lg:flex-grow-0 items-center border-b-4 border-transparent lg:mr-6" id="n2">
            <a href="#" onClick={(e) => { e.preventDefault() }} className="flex justify-center px-10 lg:px-20 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </a>
          </li>
          <li className="nav flex-1 lg:flex-grow-0 items-center border-b-4 border-transparent lg:mr-6" id="n3">
            <a href="#" onClick={(e) => { e.preventDefault() }} className="flex justify-center px-10 lg:px-20 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </a>
          </li>
          <li className="nav flex-1 lg:flex-grow-0 items-center border-b-4 border-transparent lg:mr-6" id="n4">
            <a href="#" onClick={(e) => { e.preventDefault() }} className="flex justify-center px-10 lg:px-20 py-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </a>
          </li>
        </ul>

        {/* header right */}
        <div className="flex items-center relative z-50">

          <div className="hidden items-center mr-4 lg:flex">
            <div className="w-[40px] rounded-full overflow-hidden">
              <img src="https://i.ibb.co/G2jbbtS/cat1.jpg" />
            </div>
            <p className="text-left text-2xl pl-2 text-gray-400">白爛貓</p>
          </div>
          <button type="button" className="popover-btn nav-btn" id="btn1">
            <img src="https://bruce-fe-fb.web.app/image/plus.svg" />
          </button>
          <button type="button" className="popover-btn nav-btn" id="btn2">
            <img src="https://bruce-fe-fb.web.app/image/messenger.svg" />
          </button>
          <button type="button" className="popover-btn nav-btn" id="btn3">
            <img src="https://bruce-fe-fb.web.app/image/bell.svg" />
          </button>
          <button type="button" className="popover-btn nav-btn" id="btn4">
            <img src="https://bruce-fe-fb.web.app/image/down.svg" />
          </button>

          {/* 下拉選單 1 plus */}
          <div className="popover-panel hidden" id="panel1">
            <p className="text-white mb-3 text-2xl">建立</p>
            <div className="flex items-center p-1 mb-2 hover:bg-fb-input rounded-lg cursor-pointer">
              <div className=" bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xl text-white mb-[2px]">貼文</p>
                <p className="text-xl text-gray-400">在動態消息分享貼文。</p>
              </div>
            </div>
          </div>
          {/* 下拉選單 2 messenger */}
          <div className="popover-panel hidden" id="panel2">
            <p className="text-white mb-3 text-2xl">Messenger</p>
            <div className="bg-fb-input rounded-full py-1 px-3 flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9ba3af"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input type="text" className="w-full bg-transparent focus:outline-none text-white border-0" placeholder="搜尋 Messenger" />
            </div>
            <div className="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
                <img className="w-full object-cover" src="https://i.ibb.co/G2jbbtS/cat1.jpg" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-white mb-[2px]">白爛貓</p>
                <p className="text-xl text-gray-400">白爛貓 雜貨鋪讚讚！・1分鐘前</p>
              </div>
            </div>
          </div>
          {/* 下拉選單 3 notification */}
          <div className="popover-panel hidden" id="panel3">
            <p className="text-white mb-3 text-2xl">通知</p>
            <div className="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
                <img className="w-full object-cover" src="https://i.ibb.co/G2jbbtS/cat1.jpg" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-white mb-[2px]">白爛貓 87分雜貨鋪開幕囉！！</p>
                <p className="text-xl text-fb">1分鐘前</p>
              </div>
            </div>
          </div>
          {/* 下拉選單 4 more */}
          <div className="popover-panel hidden" id="panel4">
            <div className="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
                <img className="w-full object-cover" src="https://i.ibb.co/G2jbbtS/cat1.jpg" alt="" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-white mb-[2px]">白爛貓</p>
                <p className="text-xl text-gray-400">查看你的個人檔案</p>
              </div>
            </div>
            <div className="flex p-1 mb-4 items-center hover:bg-fb-input rounded-lg cursor-pointer" id="color-theme-switcher">
              <div className="bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <p className="flex-1 text-white text-2xl">暗夜</p>
            </div>
            <div className="flex p-1 mb-2 items-center hover:bg-fb-input rounded-lg cursor-pointer">
              <div className="bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <p className="flex-1 text-white text-2xl">登出</p>
            </div>
          </div>

        </div>
      </header>

    </>
  )
}

export default Header
