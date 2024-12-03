import React, { useEffect, useState } from "react";

function Six() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [category, setCategory] = useState("all"); 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); 
      } catch (error) {
        console.error("Mahsulotlarni yuklashda xatolik:", error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category
      );
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Mahsulotlar Ro'yxati</h1>

      <div className="mb-6">
        <label htmlFor="category" className="mr-3 font-semibold">
          Kategoriya tanlang:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="all">Barcha mahsulotlar</option>
          <option value="electronics">Elektronika</option>
          <option value="jewelery">Kosmetika</option>
          <option value="men's clothing">Erkaklar kiyimlari</option>
          <option value="women's clothing">Ayollar kiyimlari</option>
        </select>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md bg-white flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <span className="text-sm text-gray-500 italic">
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Six;
