import axios from 'axios'
import { useEffect, useState } from 'react'

// Move ProductCard component to top level
function ProductCard({ product }) {
  return (
    <div className="px-3 w-2/4 lg:w-2/6 mb-10">
      <div className="card flex flex-col h-full">
        <div className="overflow-hidden rounded-lg mb-2">
          <img
            className="object-cover hover:scale-105 duration-300"
            src={product.imageUrl[0]}
            alt={product.title}
          />
        </div>
        <div className="flex-auto">
          <p>{product.title}</p>
        </div>
        <p className="mb-2">
          NT$
          {product.price}
        </p>
        <div className="text-center border border-fb-active hover:bg-fb-input rounded-xl py-3 cursor-pointer">
          <button type="button" className="text-2xl text-gray-400">詳細資訊</button>
        </div>
      </div>
    </div>
  )
}

function Marketplace() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const cardObj = {
      uuid: 'feec8521-8cf5-41e0-aa0d-3bac8c6c6213',
      apiPath: 'https://course-ec-api.hexschool.io',
    }

    const fetchProducts = async () => {
      try {
        await axios.get(`${cardObj.apiPath}/api/${cardObj.uuid}/ec/products`)
        const data = [
          {
            id: 'E7XravwD5CqpDMdNMpAduCmbojyRm3aPbe6V3ihFJnm3JpNul8jYnvihgufYYug6',
            title: '白爛貓USB隨身手持電風扇',
            category: '生活用品',
            content: '白爛貓USB隨身手持電風扇',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 699,
            price: 499,
            unit: '單位',
          },
          {
            id: '262Sg4aVByy2UJv0wrrrNHLzw2EthRjgCEj2gxgs3Bbos471EjMbChQhijyoQfNE',
            title: '魚魚皮質伸縮證件套(灰)',
            category: '生活用品',
            content: '魚魚皮質伸縮證件套(灰)',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 590,
            price: 390,
            unit: '單位',
          },
          {
            id: 'rpsPELihbhEQXlhW8HyR9Mdsgs3tZ2jGq6nPkPZEhVDxqsUU8otS9u4OnNidbBgi',
            title: '白爛貓保溫瓶(真心白爛款)',
            category: '生活用品',
            content: '白爛貓保溫瓶(真心白爛款)',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 1290,
            price: 890,
            unit: '單位',
          },
          {
            id: 'RuGSIzy1dtJWCr43K8HGyNVZqyf1z5SHl1qkO0L2nuLANpLgzrWOTKQIjdyWhi9E',
            title: '白爛貓電源供應器(太空款-黑)',
            category: '3c用品類',
            content: '白爛貓電源供應器(太空款-黑)',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 599,
            price: 350,
            unit: '單位',
          },
          {
            id: 'Hw4CglzfdCeuPfvLDT7oWm3vkR85wDud9yp6Z9u5hfn75xSjZQavdzQwIZOrztlU',
            title: '白爛貓行動電源(能量正常發揮中款-銀)',
            category: '3c用品類',
            content: '白爛貓行動電源(能量正常發揮中款-銀)',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 790,
            price: 690,
            unit: '單位',
          },
          {
            id: 'WRjczdlikWqF3cazkDI6VgsatixrLbkrRBtWiJZwh6rL3qy9UnPUNu67Navu6Z1q',
            title: '白爛貓無線充電板',
            category: '3c用品類',
            content: '白爛貓無線充電板',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 890,
            price: 690,
            unit: '單位',
          },
          {
            id: 'fbL0plp3uKsxlULVSdtHK3PNLZIwMx3cnDg3RZSlFE3sdixGx1xLOUXN8FTRcmUo',
            title: '白爛貓壓克力自拍棒',
            category: '3c用品類',
            content: '材質:壓克力',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 299,
            price: 199,
            unit: '單位',
          },
          {
            id: 'up1yfqEGhHDLoeFd17ezwCDEWjr8CNzvN5KtHpCNV18F7qlXE04RVbVc6CsdCLIa',
            title: '白爛貓壓克力手機架',
            category: '3c用品類',
            content: '白爛貓壓克力手機架',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 300,
            price: 249,
            unit: '單位',
          },
          {
            id: 'Gw2nfVT6VM9B3mNIZIGc1q9CXW5m1Kq8ca4JfBd5RvIrzcjwPpiIx8LUV8Ek5047',
            title: '白爛貓雙面暖暖毯',
            category: '生活用品',
            content: '白爛貓雙面暖暖毯',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 1000,
            price: 790,
            unit: '單位',
          },
          {
            id: 'L64xqmyXC5VXLRoDRLoEg9WiW9VeJzR1cjmraeprR9BffAd1YcYOgIN4s7fLRDTq',
            title: '白爛貓置物桶',
            category: '生活用品',
            content: '白爛貓置物桶',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 699,
            price: 499,
            unit: '單位',
          },
          {
            id: 'KDbwPHfA61L6rixlWtx0Zk5xdwIv8OnpNmP8wm1oCfOqsIaSaNFXxYpalObj8QMR',
            title: '白爛貓洗衣袋',
            category: '生活用品',
            content: '白爛貓洗衣袋',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 500,
            price: 349,
            unit: '單位',
          },
          {
            id: '5d8ENkAfLmmKHDmuPclO3bCsFd6QeL6kgVPor0hdwMP0765LGUokNgp4aP2C8s7b',
            title: '那條魚絨毛伸縮鑰匙圈',
            category: '生活用品',
            content: '那條魚絨毛伸縮鑰匙圈',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 200,
            price: 159,
            unit: '單位',
          },
          {
            id: 'QfLtOlgciOQGll6RCpKeQTpjBT3B8UDYYgQUsnJyKT9PU8LCETy9plZRmmXhsquI',
            title: '白爛貓刺繡燙片',
            category: '生活用品',
            content: '白爛貓刺繡燙片',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 100,
            price: 60,
            unit: '單位',
          },
          {
            id: 'xmFc4wLcJLqsIvHaIS2itfKutE3MvVo9lnio0KzuLSa1jD4LyTglaE57s9nxsCiB',
            title: '黃金魚造型筆袋',
            category: '包袋類',
            content: '黃金魚造型筆袋',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 399,
            price: 299,
            unit: '單位',
          },
          {
            id: 'BV6XWMYaxCPxfGYMmeO5vP6mfhZL8SbE04RCjt8Jcxz1dbg8J46ieH3AxxP8imLF',
            title: '魚罐罐-那條魚款',
            category: '布偶',
            content: '魚罐罐-那條魚款',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 299,
            price: 199,
            unit: '單位',
          },
          {
            id: 'sleNJiiJ5i4YQCj24z1Q7pGpTVdn5agHZnU2rWohtihC0oCgGKjsiz16tv8xefGH',
            title: '貓罐罐-阿花款',
            category: '布偶',
            content: '貓罐罐-阿花款',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 299,
            price: 199,
            unit: '單位',
          },
          {
            id: 'EHVH6ndiobooUB79BYtTZ1XDkZyG3TBNb5ZY1vmlOiA3Od9ckCQb4Lda99bYEswb',
            title: '貓罐罐-趴姿款',
            category: '布偶',
            content: '貓罐罐-趴姿款',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 299,
            price: 199,
            unit: '單位',
          },
          {
            id: 'D6dsHaLo7MNv3AUj8F1kysSrm0Q8YhSk8nz5iq7vVXpr8Cn0uP2zr8cOghpFcW5B',
            title: '貓罐罐-爛爛款',
            category: '布偶',
            content: '貓罐罐-爛爛款',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 299,
            price: 199,
            unit: '單位',
          },
          {
            id: 'qgWUllk9w9ISuH8zPwCPiyubCbX9ecu9s1ZHsJamQlaorYw5EEux0ajGm2Ij5GdM',
            title: '白爛貓絨毛筆袋',
            category: '布偶',
            content: '白爛貓絨毛筆袋',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 300,
            price: 249,
            unit: '單位',
          },
          {
            id: 'Xn0b71Py09u0ibv5NPbfn6nAo0aNGlXnZuRNi9yIIVNTtDghOFjjaJsGgao2bopi',
            title: '白爛貓合掌磁鐵10CM',
            category: '布偶',
            content: '白爛貓合掌磁鐵10CM',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 299,
            price: 199,
            unit: '單位',
          },
          {
            id: '6Zla0qtQa1PjdvR49JiScYJizn6bmyL5INCfnpUDiE21fXypJP9ypcliQAGXprLo',
            title: '夯魚魚搥背棒-黃金魚款',
            category: '布偶',
            content: '材質:表布及填充物100%聚酯纖維',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 300,
            price: 299,
            unit: '單位',
          },
          {
            id: 'm3mRU7mwF3Eouqcvd4dt8Qy6CJVVTUvSHeqYMaqZJPdLcFHgEOhP5wJvyHb6XAhL',
            title: '白爛貓飛高高搥背棒',
            category: '布偶',
            content: '白爛貓飛高高搥背棒',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 300,
            price: 299,
            unit: '單位',
          },
          {
            id: 'jHZGrvpLzSRMHwQrwbKCD3l5NQMH9EKAiKE27cH1Y7gdahqJ7CYJxXLQXj0xJUjO',
            title: '臭跩貓基本坐姿15CM',
            category: '布偶',
            content: '臭跩貓基本坐姿15CM',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 300,
            price: 249,
            unit: '單位',
          },
          {
            id: 'yZMpEiMPIu2801io6D28FDRGRkwWwbtMkz0bALsXOrRbe3Qo3EcqNeMQX2bXHW1o',
            title: '零食大抱枕-經典薯條風味款',
            category: '布偶',
            content: '零食大抱枕-經典薯條風味款',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 790,
            price: 690,
            unit: '單位',
          },
          {
            id: 'kMN0PIGAsqc09texedTflXld4WRcRZ44eppw1c5gcRB98qlMFjEdN6pRIRewie1y',
            title: '零食大抱枕-經典鹹魚風味款',
            category: '布偶',
            content: '零食大抱枕-經典鹹魚風味款',
            imageUrl: [
              'https://i.imgur.com/dsmf3oq.jpg',
            ],
            enabled: true,
            origin_price: 790,
            price: 690,
            unit: '單位',
          },
        ]
        setProducts(data)
        setIsLoading(false)
      }
      catch (err) {
        // Use error instead of console.log
        console.error(err)
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = [
    '所有商品',
    '文具',
    '居家生活',
    '精選系列',
    '配件',
    '派對遊戲',
    '新品上架',
  ]

  return (
    <>
      {/* Marketplace */}
      <div id="p3" className="w-full page text-white hidden">
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">
          <div className="card">
            <p className="text-left text-3xl pl-3 text-gray-400 mb-6">依照類別瀏覽</p>
            <div className="scrollbar flex overflow-x-auto pb-4">
              {categories.map(category => (
                <div
                  key={category}
                  className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3"
                >
                  <p className="text-gray-400 text-2xl py-3 px-6">{category}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Product List */}
          <div className="flex flex-wrap justify-between mx-[-7.5px]">
            {isLoading
              ? (
                  <div>載入中...</div>
                )
              : (
                  products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Marketplace
