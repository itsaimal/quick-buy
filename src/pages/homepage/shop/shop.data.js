const SHOP_DATA = [
    {
      id: 1,
      title: 'Sedan',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'KIA',
          imageUrl: 'https://www.autoguide.com/blog/wp-content/uploads//2020/12/2021-Kia-K5-GT-Line-AWD-Review-06-679x453.jpg',
          price: 17490
        },
        {
          id: 2,
          name: 'Buick',
          imageUrl: 'https://cdn.carbuzz.com/gallery-images/840x560/563000/600/563635.jpg',
          price: 23200
        },
        {
          id: 3,
          name: 'Nissan',
          imageUrl: 'https://cdn.jdpower.com/ArticleImages/2019%20Nissan%20Altima_Photo_01%20720.jpg',
          price: 19410
        },
        {
          id: 4,
          name: 'Mazda',
          imageUrl: 'https://cdn.jdpower.com/ArticleImages/2018%20Mazda%206_38%20720.jpg',
          price: 20000
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Luxury',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Maserati',
          imageUrl: 'https://cdn.justluxe.com/classifieds/75078.jpg?comp=2',
          price: 74390
        },
        {
          id: 11,
          name: 'BMW',
          imageUrl: 'https://cdn.trendhunterstatic.com/thumbs/luxury-sedan.jpeg',
          price: 54200
        },
        {
          id: 12,
          name: 'Audi',
          imageUrl: 'https://st.motortrend.com/uploads/sites/5/2020/05/2020-Audi-A6-sedan-01.jpg',
          price: 86500
        },
        {
          id: 13,
          name: 'Bentley',
          imageUrl: 'https://i.ytimg.com/vi/b4Evt3KwWm4/maxresdefault.jpg',
          price: 177000
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Hatchback',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Corolla',
          imageUrl: 'http://cdn.carbuzz.com/gallery-images/1600/757000/700/757749.jpg',
          price: 20715
        },
        {
          id: 19,
          name: 'VW',
          imageUrl: 'https://www.motorbiscuit.com/wp-content/uploads/2020/09/DB2020AU01263_large-1024x683.jpg',
          price: 32665
        },
        {
          id: 20,
          name: 'A3',
          imageUrl: 'https://www.motortrend.com/uploads/sites/5/2020/03/2021-Audi-A3-Sportback-8.jpg',
          price: 33300
        },
        {
          id: 21,
          name: 'A-Class',
          imageUrl: 'https://cdn.motor1.com/images/mgl/8yEze/s3/2018-mercedes-a-class-hatchback-with-night-package.jpg',
          price: 33650
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: '4x4',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Nissan',
          imageUrl: 'https://www.nissanusa.com/content/dam/Nissan/us/experience_nissan/newsevents/Nissan-off-road-4x4-vehicles/nissan-off-road-4x4-vehicle.jpg.ximg.l_12_m.smart.jpg',
          price: 27500
        },
        {
          id: 24,
          name: 'Bentley',
          imageUrl: 'https://media.ed.edmunds-media.com/bentley/bentayga/2020/oem/2020_bentley_bentayga_4dr-suv_speed_fq_oem_1_1600.jpg',
          price: 177000
        },
        {
          id: 25,
          name: 'Jeep',
          imageUrl: 'https://cars.usnews.com/static/images/article/202010/128215/9-use--JP021_077GClbep6ohfvarrfhrv7uodqn9svh_Cropped_640x420.jpg',
          price: 45600
        },
        {
          id: 26,
          name: 'Ford',
          imageUrl: 'https://pictures.dealer.com/p/phillongatchapelhillsfordfd/1174/effe9dc150146ebc289cb9d6c26e15e4x.jpg?impolicy=downsize&w=568',
          price: 52340
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Used',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Corolla',
          imageUrl: 'https://lh3.googleusercontent.com/proxy/F5stjCf3XTofwvyqt7NHwEV1GP1N4NILasFnpAb23ag2NPWVa7av3OpS3UReyZU48ga1wdDVglkPpQYQt4s8W3hraRUcy_VUTDm06LLd5zPSuLUterYBZyU5ljdEl8in-pYIpuQTeSDJtn0',
          price: 7800
        },
        {
          id: 31,
          name: 'Buick',
          imageUrl: 'https://www.motortrend.com/uploads/sites/5/2011/05/2010-buick-lacrosse-CXS-promo.jpg',
          price: 11988
        },
        {
          id: 32,
          name: 'Chevrolet',
          imageUrl: 'https://www.auto-data.net/images/f111/Chevrolet-Cruze-Sedan_1.jpg',
          price: 12567
        },
        {
          id: 33,
          name: 'Mitsubishi',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/2015_Mitsubishi_Mirage_%28LA_MY15%29_LS_hatchback_%2822644970463%29.jpg',
          price: 7500
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;