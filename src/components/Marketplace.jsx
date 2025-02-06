import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Swiper, { Navigation, Pagination } from 'swiper'

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cardObj = {
      uuid: 'feec8521-8cf5-41e0-aa0d-3bac8c6c6213',
      apiPath: 'https://course-ec-api.hexschool.io'
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${cardObj.apiPath}/api/${cardObj.uuid}/ec/products`);
        setProducts(res.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    "所有商品",
    "文具",
    "居家生活", 
    "精選系列",
    "配件",
    "派對遊戲",
    "新品上架"
  ];

  const ProductCard = ({ product }) => (
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
        <p className="mb-2">NT${product.price}</p>
        <div className="text-center border border-fb-active hover:bg-fb-input rounded-xl py-3 cursor-pointer">
          <button className="text-2xl text-gray-400">詳細資訊</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Marketplace */}
      <div id="p3" className="w-full page text-white hidden">
        <div className="w-full max-w-[744px] mx-auto px-4 pb-28 lg:pb-10">
          <div className="card">
            <p className="text-left text-3xl pl-3 text-gray-400 mb-6">依照類別瀏覽</p>
            <div className="scrollbar flex overflow-x-auto pb-4">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="shrink-0 rounded-lg bg-fb-active hover:bg-fb-input flex items-center justify-center cursor-pointer mr-3 mb-3"
                >
                  <p className="text-gray-400 text-2xl py-3 px-6">{category}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Product List */}
          <div className="flex flex-wrap justify-between mx-[-7.5px]">
            {isLoading ? (
              <div>載入中...</div>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace
