const SHOP_DATA = {
    sedan: {
      id: 1,
      title: 'Sedan',
      routeName: 'sedan',
      items: [
        {
          id: 1,
          name: 'KIA',
          imageUrl: 'https://www.autoguide.com/blog/wp-content/uploads//2020/12/2021-Kia-K5-GT-Line-AWD-Review-06-679x453.jpg',
          price: 17490,
          transmission: 'Automatic',
          color: 'Red',
          miles: 0
         
        },
        {
          id: 2,
          name: 'Buick',
          imageUrl: 'https://cdn.carbuzz.com/gallery-images/840x560/563000/600/563635.jpg',
          price: 23200
          ,
          transmission: 'Manual',
          color: 'Silver',
          miles: 0
        },
        {
          id: 3,
          name: 'Nissan',
          imageUrl: 'https://cdn.jdpower.com/ArticleImages/2019%20Nissan%20Altima_Photo_01%20720.jpg',
          price: 19410
          ,
          transmission: 'Automatic',
          color: 'Red',
          miles: 0
        },
        {
          id: 4,
          name: 'Mazda',
          imageUrl: 'https://cdn.jdpower.com/ArticleImages/2018%20Mazda%206_38%20720.jpg',
          price: 20000
          ,
          transmission: 'Automatic',
          color: 'Red',
          miles: 0
        },
        {
          id: 5,
          name: 'Camry',
          imageUrl: 'https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2020/02/2021_Avalon_Limited_AWD_Blueprint_007-1500x895.jpg',
          price: 24970,
          transmission: 'Automatic',
          color: 'Navy-Blue',
          miles: 0
        },
        {
          id: 6,
          name: 'Corolla',
          imageUrl: 'https://gaadiwaadi.com/wp-content/uploads/2020/09/2021-toyota-corolla-apex-edition-7.jpg',
          price: 23615,
          transmission: 'Automatic',
          color: 'Silver',
          miles: 0
        },
        {
          id: 7,
          name: 'Civic',
          imageUrl: 'https://www.carscoops.com/wp-content/uploads/2020/06/2020-honda-civic-sedan-usa-1.jpg',
          price: 22250,
          transmission: 'Automatic',
          color: 'Red',
          miles: 0
        },
        {
          id: 8,
          name: 'Elentra',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NHvvEuyd8FxMN7m7fPOATM21Foo5lZ_v9A&usqp=CAU',
          price: 24100,
          transmission: 'Automatic',
          color: 'Silver',
          miles: 0
        },
        {
          id: 9,
          name: 'Accord',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2018_Honda_Accord_front_4.1.18.jpg/1200px-2018_Honda_Accord_front_4.1.18.jpg',
          price: 24970,
          transmission: 'Automatic',
          color: 'Cherry-Red',
          miles: 0
        }
      ]
    },
   luxury: {
      id: 2,
      title: 'Luxury',
      routeName: 'luxury',
      items: [
        {
          id: 10,
          name: 'Maserati',
          imageUrl: 'https://cdn.justluxe.com/classifieds/75078.jpg?comp=2',
          price: 74390,
          transmission: 'Automatic',
          color: 'Metalic-Gray',
          miles: 0
        },
        {
          id: 11,
          name: 'BMW',
          imageUrl: 'https://cdn.trendhunterstatic.com/thumbs/luxury-sedan.jpeg',
          price: 54200,
          transmission: 'Manual',
          color: 'Royal-Blue',
          miles: 0
        },
        {
          id: 12,
          name: 'Audi',
          imageUrl: 'https://st.motortrend.com/uploads/sites/5/2020/05/2020-Audi-A6-sedan-01.jpg',
          price: 86500,
          transmission: 'Automatic',
          color: 'Metalic-Brown',
          miles: 0
        },
        {
          id: 13,
          name: 'Bentley',
          imageUrl: 'https://i.ytimg.com/vi/b4Evt3KwWm4/maxresdefault.jpg',
          price: 177000,
          transmission: 'Automatic',
          color: 'Royal-Gray',
          miles: 0
        },
        {
          id: 14,
          name: 'Rolls Royce',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png?crop=1.00xw:1.00xh;0,0&resize=1200:*',
          price: 330000,
          transmission: 'Automatic',
          color: 'Mate-Black',
          miles: 0
        },
        {
          id: 15,
          name: 'Benz S-Class',
          imageUrl: 'https://cdn.motor1.com/images/mgl/43yJY/s1/2021-mercedes-benz-s-class-front.webp',
          price: 110850,
          transmission: 'Automatic',
          color: 'Silver',
          miles: 0
        },
        {
          id: 16,
          name: 'XJ',
          imageUrl: 'https://i.pinimg.com/originals/24/34/bf/2434bfd2f45bcb0d1701d6e190bd24aa.jpg',
          price: 75700,
          transmission: 'Automatic',
          color: 'Metalic-Gun',
          miles: 0
        },
        {
          id: 17,
          name: 'Lexus',
          imageUrl: 'https://lexus-cms-media.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/04/2022_ES_Family_009-1500x900.jpg',
          price: 40000,
          transmission: 'Automatic',
          color: 'Metalic-Gun',
          miles: 0
        }
      ]
    },
   hatchback: {
      id: 3,
      title: 'Hatchback',
      routeName: 'hatchback',
      items: [
        {
          id: 18,
          name: 'Corolla',
          imageUrl: 'http://cdn.carbuzz.com/gallery-images/1600/757000/700/757749.jpg',
          price: 20715,
          transmission: 'Automatic',
          color: 'Cherry-Red',
          miles: 0
        },
        {
          id: 19,
          name: 'VW',
          imageUrl: 'https://www.motorbiscuit.com/wp-content/uploads/2020/09/DB2020AU01263_large-1024x683.jpg',
          price: 32665,
          transmission: 'Automatic',
          color: 'Cherry-Red',
          miles: 0
        },
        {
          id: 20,
          name: 'A3',
          imageUrl: 'https://www.motortrend.com/uploads/sites/5/2020/03/2021-Audi-A3-Sportback-8.jpg',
          price: 33300,
          transmission: 'Automatic',
          color: 'Indigo',
          miles: 0
        },
        {
          id: 21,
          name: 'A-Class',
          imageUrl: 'https://cdn.motor1.com/images/mgl/8yEze/s3/2018-mercedes-a-class-hatchback-with-night-package.jpg',
          price: 33650,
          transmission: 'Automatic',
          color: 'Cherry-Red',
          miles: 0
        },
        {
          id: 22,
          name: 'Civic',
          imageUrl: 'https://www.cnet.com/a/img/GAgomH5XDFGMUEnwza5-u67D5Zs=/1200x675/2020/06/08/4c5a5a0e-5c31-47b3-9d84-72e21e7fed08/civic-rear.jpg',
          price: 22200,
          transmission: 'Automatic',
          color: 'Gray',
          miles: 0
        }
      ]
    },
   truck: {
      id: 4,
      title: '4x4',
      routeName: 'truck',
      items: [
        {
          id: 23,
          name: 'Nissan',
          imageUrl: 'https://www.nissanusa.com/content/dam/Nissan/us/experience_nissan/newsevents/Nissan-off-road-4x4-vehicles/nissan-off-road-4x4-vehicle.jpg.ximg.l_12_m.smart.jpg',
          price: 27500,
          transmission: 'Automatic',
          color: 'Dirty-Red',
          miles: 0
        },
        {
          id: 24,
          name: 'Bentley',
          imageUrl: 'https://media.ed.edmunds-media.com/bentley/bentayga/2020/oem/2020_bentley_bentayga_4dr-suv_speed_fq_oem_1_1600.jpg',
          price: 177000,
          transmission: 'Automatic',
          color: 'Orange',
          miles: 0
        },
        {
          id: 25,
          name: 'Jeep',
          imageUrl: 'https://cars.usnews.com/static/images/article/202010/128215/9-use--JP021_077GClbep6ohfvarrfhrv7uodqn9svh_Cropped_640x420.jpg',
          price: 45600,
          transmission: 'Automatic',
          color: 'Grey',
          miles: 0
        },
        {
          id: 26,
          name: 'Ford',
          imageUrl: 'https://pictures.dealer.com/p/phillongatchapelhillsfordfd/1174/effe9dc150146ebc289cb9d6c26e15e4x.jpg?impolicy=downsize&w=568',
          price: 52340,
          transmission: 'Automatic',
          color: 'Blue',
          miles: 0
        },
        {
          id: 27,
          name: 'Ford Lobo',
          imageUrl: 'https://www.usa-car-import.com/upload/heading/usa-car-import-ford-f-150-platinum-4x4-super-crew-500x337_1.jpg',
          price: 28940,
          transmission: 'Automatic',
          color: 'White',
          miles: 0
        },
        {
          id: 28,
          name: 'GMC',
          imageUrl: 'https://cdn.hiconsumption.com/wp-content/uploads/2018/04/GMC-Yukon.jpg',
          price: 59400,
          transmission: 'Automatic',
          color: 'Black',
          miles: 0
        },
        {
          id: 29,
          name: 'X5',
          imageUrl: 'https://d2snyq93qb0udd.cloudfront.net/prod/28378_01-bmw-x5-german-suv-born-in-the-usa.jpg',
          price: 61700,
          transmission: 'Automatic',
          color: 'Blue',
          miles: 0
        }
      ]
    },
    used:{
      id: 5,
      title: 'Used',
      routeName: 'used',
      items: [
        {
          id: 30,
          name: 'Corolla',
          imageUrl: '',
          price: 7800,
          transmission: 'Manual',
          color: 'Cherry-Red',
          miles: 70000
        },
        {
          id: 31,
          name: 'Buick',
          imageUrl: 'https://autotras.com/images/728/buick-regal-gs-usa.jpg',
          price: 11988,
          transmission: 'Automatic',
          color: 'Blue',
          miles: 90000
        },
        {
          id: 32,
          name: 'Chevrolet',
          imageUrl: 'https://www.auto-data.net/images/f111/Chevrolet-Cruze-Sedan_1.jpg',
          price: 12567,
          transmission: 'Automatic',
          color: 'White',
          miles: 60000
        },
        {
          id: 33,
          name: 'Mitsubishi',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/2015_Mitsubishi_Mirage_%28LA_MY15%29_LS_hatchback_%2822644970463%29.jpg',
          price: 7500,
          transmission: 'Automatic',
          color: 'Green',
          miles: 78966
        },
        {
          id: 34,
          name: 'Suzuki SX4',
          imageUrl: 'https://autotras.com/images/1035/suzuki-sx4-sedan-used.jpg',
          price: 4234,
          transmission: 'Automatic',
          color: 'Silver',
          miles: 145666
        },
        {
          id: 35,
          name: 'Camry',
          imageUrl: 'https://i.pinimg.com/736x/ae/99/55/ae9955f4d74651211287720b1ec19614.jpg',
          price: 6740,
          transmission: 'Automatic',
          color: 'Green',
          miles: 45630
        }
      ]
    }
  };
  
  export default SHOP_DATA;