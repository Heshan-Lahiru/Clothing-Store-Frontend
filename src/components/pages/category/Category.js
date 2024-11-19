import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../navigationbar/nav'
import Footer from '../../footer/Footer'
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate();
  const products = {
    men: [
      { id: 1, name: "Men's Shirt", image: "https://img.drz.lazcdn.com/static/lk/p/027006c1b70ccc1a45ad68122b255ef7.jpg_720x720q80.jpg", category: "men", type: "shirt" },
      { id: 2, name: "Men's T-Shirt",  image: "https://m.media-amazon.com/images/I/617IjJArgKL._AC_SL1500_.jpg", category: "men", type: "tshirt" },
      { id: 3, name: "Men's Trousers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlO-rN61widTnEWf8_UVffUBqWBx0xF4LKew&s", category: "men", type: "trousers" },
      { id: 4, name: "Men's Shorts",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-RBBKt-rICHrZ93BQk3nRrSPg0U51ytZtw&s", category: "men", type: "shorts" },
      { id: 5, name: "Men's Jeans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqeEteenL7K7pBGt6tJLIDxJlIFmEMxKIEg&s", category: "men", type: "jeans" },
      { id: 6, name: "Men's Watches",  image: "https://img.drz.lazcdn.com/static/lk/p/bbaa6c6345a63d367273ac23a80a837f.jpg_720x720q80.jpg", category: "men", type: "watches" },
      { id: 7, name: "Men's Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60ZOBVJu0AsZEDcRT0wg16wrgAbc-HMvaQQ&s", category: "men", type: "shoes" },
      { id: 8, name: "Men's Bags",  image: "https://static.tudo.lk/uploads/2024/08/men-crossbody-bag-waterproof-shoulder-bag-17248452670938589.webp", category: "men", type: "bags" }
    ],
    women: [
      { id: 9, name: "Women's T-Shirt",  image: "https://img.drz.lazcdn.com/static/lk/p/e0f6d1a5a22ad5efa92b1294b877cc5a.jpg_720x720q80.jpg", category: "women", type: "tshirt" },
      { id: 10, name: "Women's Shirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQGiiCGV6j5en6QH7FjDmzUaPne3AKXdFwA&s", category: "women", type: "shirt" },
      { id: 11, name: "Women's Jeans",  image: "https://springandsummer.lk/cdn/shop/files/WomenLadiesJeanswithDeepPockets321BC_6.jpg?v=1718256793", category: "women", type: "jeans" },
      { id: 12, name: "Women's Shorts",  image: "https://img.drz.lazcdn.com/collect/my/p/9da6fc95c1d15129c7ef364549b43a73.jpg_960x960q80.jpg_.webp", category: "women", type: "shorts" },
      { id: 13, name: "Women's Skirts",  image: "https://img.drz.lazcdn.com/static/lk/p/2b3474dc9e3f2d0db7e571ae6237ae1a.jpg_960x960q80.jpg_.webp", category: "women", type: "skirts" },
      { id: 14, name: "Women's Watches", image: "https://img.drz.lazcdn.com/static/lk/p/a08a4a0b1b12a7aa2f073dcccd59a85f.jpg_960x960q80.jpg_.webp", category: "women", type: "watches" },
      { id: 15, name: "Women's Shoes",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE3xAbEFpy3AfWuep2x7sq5Aw200K_yr5Hg&s", category: "women", type: "shoes" },
      { id: 16, name: "Women's Bags",  image: "https://i.ebayimg.com/images/g/MbkAAOSwmddf9zGR/s-l500.jpg", category: "women", type: "bags" }
    ],
    kids: [
      { id: 17, name: "Kid's Shirt",  image: "https://www.tenstickers-srilanka.com/webp/t-shirts/large/spider-man-kids-t-shirt-with-name-19709.webp", category: "kids", type: "shirt" },
      { id: 18, name: "Kid's T-Shirt",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOX4FuQD0nRiFrRS4bX9_TfJ_JARAtc-LHg&s", category: "kids", type: "tshirt" },
      { id: 19, name: "Kid's Jeans",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIgQkbQV73ERqRGzmJGERhCjPfpAfhz2-kw&s", category: "kids", type: "jeans" },
      { id: 20, name: "Kid's Shorts",  image: "https://static-01.daraz.lk/p/b376a9b8c5a01cc116c1789c85a416fa.jpg", category: "kids", type: "shorts" },
      { id: 21, name: "Kid's Watches",  image: "https://images-cdn.ubuy.co.in/6546021939561c70e1631d09-2-pieces-3d-unicorn-kids-watches-cute.jpg", category: "kids", type: "watches" },
      { id: 22, name: "Kid's Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ntQkTOzC5cM-E3YxFy6j2xxnW8lQ6w0RUw&s", category: "kids", type: "shoes" },
      { id: 23, name: "Kid's Bags",  image: "https://img.drz.lazcdn.com/3rd/q/aHR0cHM6Ly9wc3BrLmxvbmdwZWFuLmNvbS8xNjk1NjIxMDI2OTcxLzUxNDY2MzcyOTQ4NjgwMTkwLmpwZz9pbWFnZU1vZ3IyL3RodW1ibmFpbC8xMDAweDEwMDAh_960x960q80.png_.webp", category: "kids", type: "bags" }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('men');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const filtered = products[selectedCategory].filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  const handleCardClick = (productId) => {
    switch(productId){
        case 1 :   navigate(`/clothingstore?name=men-shirts`); break;
        case 2 :navigate(`/clothingstore?name=men-tshirts`);break;
        case 3 : navigate(`/clothingstore?name=men-trousers`);break;
        case 4 : navigate(`/clothingstore?name=men-shorts`);break;
        case 5 : navigate(`/clothingstore?name=men-jeans`);break;
        case 6 :  navigate(`/clothingstore?name=men-watches`);break;
        case 7 : navigate(`/clothingstore?name=men-shoes`);break;
        case 8 :  navigate(`/clothingstore?name=men-bags`);break;

        case 9 :navigate(`/clothingstore?name=women-tshirt`);break;
        case 10 :navigate(`/clothingstore?name=women-shirt`);break;
        case 11 :navigate(`/clothingstore?name=women-jeans`);break;
        case 12 :navigate(`/clothingstore?name=women-shorts`);break;
        case 13 :navigate(`/clothingstore?name=women-skirts`);break;
        case 14 :navigate(`/clothingstore?name=women-watches`);break;
        case 15 :navigate(`/clothingstore?name=women-shoes`);break;
        case 16 :navigate(`/clothingstore?name=women-bags`);break;

        case 17 :navigate(`/clothingstore?name=kid-shirts`);break;
        case 18 :navigate(`/clothingstore?name=kid-tshirts`);break;
        case 19 :navigate(`/clothingstore?name=kid-jeans`);break;
        case 20 :navigate(`/clothingstore?name=kid-shorts`);break;
        case 21 :navigate(`/clothingstore?name=kid-watches`);break;
        case 22 :navigate(`/clothingstore?name=kid-shoes`);break;
        case 23 :navigate(`/clothingstore?name=kid-bags`);break;
        default : navigate('/'); break;
    }
  };

  return (
    <div>
    <Nav />
    <div className="container py-5">
      {/* Category Navigation */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="btn-group w-100">
            <button
              className={`btn ${selectedCategory === 'men' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('men')}
            >
              Men
            </button>
            <button
              className={`btn ${selectedCategory === 'women' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('women')}
            >
              Women
            </button>
            <button
              className={`btn ${selectedCategory === 'kids' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('kids')}
            >
              Kids
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className={`col-md-3 mb-4 ${animate ? 'fade-in' : ''}`}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Category;