import React from 'react'
import './NewArrival.css'

// import './NewArivals.css'

const bestSellerList = [
  {
      id: 1,
      name: 'Broken Heart Plant',
      img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/brokenheart45-_1__1_360x.png?v=1661340336',
      newPrice: 300,
      oldPrice: 400,
  },
  {
      id: 2,
      name: 'Jade Plant Mini',
      img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/ficus_eyelevel_360x.png?v=1661439848',
      newPrice: 700,
      oldPrice: 849,
  },
  {
      id: 3,
      name: 'Fittonia Green Plant',
      img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/fittonia45-_1__1_360x.png?v=1661340310',
      newPrice: 100,
      oldPrice: 150,
  },
  {
      id: 4,
      name: 'Multivitamin Plant',
      img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/276ae162-93ba-41d9-bbc8-1d5dd8d3a04b_360x.png?v=1661340834',
      newPrice: 2499,
      oldPrice: 2999,
  },
  // {
  //     id: 5,
  //     name: 'Tulsi',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 6,
  //     name: 'Hibiscus',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 7,
  //     name: 'Rose',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 8,
  //     name: 'Cactus',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 9,
  //     name: 'Succelents',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // },
  // {
  //     id: 10,
  //     name: 'Bonsai',
  //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
  //     newPrice: 300,
  //     oldPrice: 400,
  // }
]

function NewArivals() {
  return (
    <div className='home-bestseller-container'>
        <p className='section-heading'>
            <img src='https://cdn.shopify.com/s/files/1/0579/7924/0580/files/New-Plants_2x_d5110dfd-b698-4342-ba8d-9aa908711a32_small.png?v=1656414976' />
            New Arrivals
        </p>
        <div className='home-bestseller-list'>
            {
                bestSellerList.map((item) => (
                        <div key={item.id} className="home-bestseller-item">
                            <img src={item.img} alt={item.name} />
                            <div className='item-body'>
                                <p className='plantName'>{item.name}</p>
                                <div className='price'>
                                    <p className='oldPrice'>{item.oldPrice}</p>
                                    <p className='newPrice'>{item.newPrice}</p>
                                </div>
                            </div>
                            <div className='addToCart'>
                                Add to Cart
                            </div>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default NewArivals