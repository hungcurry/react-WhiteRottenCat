import axios from 'axios'
import { useEffect, useState } from 'react'

function AdPanel({ id, activeAdPanel }) {
  return (
    <div className={`popover-panel ad-panel z-20 ${activeAdPanel === id ? '' : 'hidden'}`} onClick={e => e.stopPropagation()}>
      <div className="flex p-1 mb-4 items-center hover:bg-fb-input rounded-lg cursor-pointer">
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
  )
}

function ContactPerson() {
  const [contacts, setContacts] = useState([])
  const [activeAdPanel, setActiveAdPanel] = useState(null)
  const [showAdBtn, setShowAdBtn] = useState(null)

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=20')
        setContacts(res.data.results)
      }
      catch (err) {
        // Only log error, not full response
        console.error('Error fetching contacts:', err.message)
      }
    }
    fetchContacts()
  }, [])

  const renderContactItem = (contact) => {
    const isOld = contact.dob.age >= 50
    const ringClass = isOld ? 'ring-2 ring-fb ring-offset-2 ring-offset-fb-input' : ''
    const textClass = isOld ? 'text-white' : ''

    return (
      <div key={contact.email} className="flex items-center w-full py-4 px-2 mb-6 rounded hover:bg-fb-input cursor-pointer relative text-gray-600 js-contactPerson">
        <div className={`w-[32px] cursor-pointer mr-6 rounded-full ${ringClass}`}>
          <div className="overflow-hidden rounded-full">
            <img className="object-cover" src={contact.picture.large} alt="" />
          </div>
        </div>
        <p className={`text-2xl ${textClass}`}>{`${contact.name.first} ${contact.name.last}`}</p>

        <div className="message absolute w-[400px] top-[50%] left-[-410px] translate-y-[-50%]
          items-center p-6 rounded-xl bg-fb-input cursor-pointer border border-gray-400 z-50"
        >
          <div className="w-full flex">
            <div className={`w-[80px] h-[80px] cursor-pointer mr-6 rounded-full shrink-0 ${ringClass}`}>
              <div className="overflow-hidden rounded-full">
                <img className="object-cover" src={contact.picture.large} alt="" />
              </div>
            </div>
            <div className="flex-1 text-2xl text-white">
              <h4 className="text-4xl mb-6">{`${contact.name.first} ${contact.name.last}`}</h4>
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] mr-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <p>{contact.gender}</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="break-all">{contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleAdBlockMouseEnter = (id) => {
    setShowAdBtn(id)
  }

  const handleAdBlockMouseLeave = () => {
    if (!activeAdPanel) {
      setShowAdBtn(null)
    }
  }

  const handleAdBtnClick = (id) => {
    if (activeAdPanel === id) {
      setActiveAdPanel(null)
      setShowAdBtn(null)
    }
    else {
      setActiveAdPanel(id)
    }
  }

  const handleClickOutside = () => {
    setActiveAdPanel(null)
    setShowAdBtn(null)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div id="right-block" className="w-full hidden sticky top-main-span max-w-[360px] h-full pl-6 lg:block z-30">
        {/* AD */}
        <p className="text-2xl text-gray-400 mb-6">贊助</p>
        <div
          className="flex items-center w-full py-2 px-2 mb-3 rounded cursor-pointer text-white relative ad-block"
          onMouseEnter={() => handleAdBlockMouseEnter(1)}
          onMouseLeave={handleAdBlockMouseLeave}
          onClick={e => e.stopPropagation()}
        >
          <div className="w-[130px] mr-6 shrink-0">
            <a href="#" onClick={e => e.preventDefault()} className="rounded-2xl block">
              <img className="object-cover user-drag" src="https://i.ibb.co/gj8K19F/flote.jpg" alt="" />
            </a>
          </div>
          <div>
            <p className="mb-3 select-none">贈品還是送折扣碼 NFJ54</p>
            <p className="text-xl text-gray-400 tracking-wide select-none">flotemp.com</p>
          </div>
          <button
            type="button"
            className={`popover-btn w-[36px] h-[36px] absolute right-3 top-[-5px] ${showAdBtn === 1 ? '' : 'hidden'} z-10`}
            onClick={() => handleAdBtnClick(1)}
          >
            <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
          </button>
          <AdPanel id={1} activeAdPanel={activeAdPanel} />
        </div>

        <div
          className="flex items-center w-full py-2 px-2 mb-6 rounded cursor-pointer text-white relative ad-block"
          onMouseEnter={() => handleAdBlockMouseEnter(2)}
          onMouseLeave={handleAdBlockMouseLeave}
          onClick={e => e.stopPropagation()}
        >
          <div className="w-[130px] mr-6 shrink-0">
            <a href="#" onClick={e => e.preventDefault()} className="rounded-2xl block">
              <img className="object-cover user-drag" src="https://i.ibb.co/jLPdjhB/222.jpg" alt="" />
            </a>
          </div>
          <div>
            <p className="mb-3 select-none">一鍵下單｜24 小時即刻出貨</p>
            <p className="text-xl text-gray-400 tracking-wide select-none"></p>
          </div>
          <button
            type="button"
            className={`popover-btn w-[36px] h-[36px] absolute right-3 top-[-5px] ${showAdBtn === 2 ? '' : 'hidden'} z-10`}
            onClick={() => handleAdBtnClick(2)}
          >
            <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="" />
          </button>
          <AdPanel id={2} activeAdPanel={activeAdPanel} />
        </div>

        {/* 聯絡人 */}
        <div>
          <p className="text-2xl text-gray-400 mb-6 border-t border-gray-700 pt-6">聯絡人</p>
          {contacts.map(contact => renderContactItem(contact))}
        </div>
      </div>
    </>
  )
}

export default ContactPerson
