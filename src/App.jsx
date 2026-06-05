import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState("")
  
  const foodItems = [
    { id: 1, name: "Crunchy Chicken Burger", brand: "KFC", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Pepperoni Feast Pizza", brand: "Pizza Hut", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Fries with Garlic Mayo", brand: "McDonald's", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Hazelnut Chocolate Donut", brand: "Dunkin' Donuts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "Submarine Sandwich (Sub)", brand: "Subway", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Caramel Macchiato Coffee", brand: "Starbucks", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Dairy Milk Silk", brand: "Cadbury", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnVnaUqDOY2PBXnTaUo1TAxtyuyZAzcRd-Q&s" },
    { id: 8, name: "Spicy Chicken Biryani", brand: "Student Biryani", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=60" },
    { id: 9, name: "Chocobar Ice Cream", brand: "Walls", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop&q=60" },
    { id: 10, name: "Original Potato Chips", brand: "Lays", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=60" },
    { id: 11, name: "Cheese Loaded Nachos", brand: "Hardee's", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=60" },
    { id: 12, name: "Chocolate Fudge Cake", brand: "Kitchen Cuisine", image: "data:image/jpeg;base64,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" }
  ];

  const show = (e) => {
    setData(e.target.value)
  }


  let filterdata = foodItems.filter((current) => {
    return current.name.toLowerCase().includes(data.toLowerCase()) || current.brand.toLowerCase().includes(data.toLowerCase())
  })

  return (

    <div className='bg-gray-50 min-h-screen font-sans antialiased pb-12'>
      

      <div className='pt-8 flex justify-center px-4'>
        <div className="w-full max-w-md relative">
          <input 
            onChange={show} 
            className='w-full p-3.5 pl-5 bg-white text-gray-800 rounded-2xl shadow-sm border
             border-gray-200 outline-none transition-all duration-300
              focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 placeholder-gray-400
               font-medium' 
            type="text" 
            placeholder='Search by food or brand...' 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-gray-900 via-orange-600 to-amber-500 bg-clip-text text-transparent uppercase border-l-4 border-orange-500 pl-4">
          Premium Food Menu
        </h1>
      </div>

  
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6'>
        {filterdata.map((item) => {
          return (
           
            <div className='group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between' key={item.id}>
              
              {/* Image Container: Hover par image halki si zoom hogi */}
              <div className="overflow-hidden h-48 w-full relative bg-gray-100">
                <img 
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' 
                  src={item.image} 
                  alt={item.name} 
                />
                {/* Brand Badge Image ke upar chipka diya */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
                  {item.brand}
                </span>
              </div>
              
              {/* Text Area */}
              <div className='p-5 flex-1 flex flex-col justify-between'>
                <div>
                  <h1 className='font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors duration-200 line-clamp-1'>
                    {item.name}
                  </h1>
                  <p className='text-xs text-gray-400 font-medium mt-1 tracking-wide uppercase'>
                    Official {item.brand} Product
                  </p>
                </div>
                
       
                <button className="mt-4 w-full bg-gray-50 text-gray-700 font-semibold text-sm py-2.5 rounded-xl transition-colors duration-200 group-hover:bg-orange-500 group-hover:text-white">
                  View Details
                </button>
              </div>

            </div>
          )
        })}
      </div>

   
      {filterdata.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl font-semibold text-gray-400">No delicious food found for "{data}"</p>
          <p className="text-sm text-gray-400 mt-1">Try searching for something else!</p>
        </div>
      )}
      <h1 className='text-3xl font-bold bg-gradient-to-r from-pink-800 via-purple-600 to-green-600 bg-clip-text text-transparent'>END Check Color</h1>

    </div>
  )
}

export default App