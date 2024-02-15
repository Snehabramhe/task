export class CartService {
  static watchCart = [
        {
          id: "AA001",
          imageUrl:
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2466412/2023/2/23/f98fb842-58a0-477e-9448-956821729a101677146618712DanielKleinWomenRoseGoldAnalogueWatchDK11467-31.jpg",
          name: "Rolex watch",
          price: 1800,
          qty: 2,
        },
        {
          id: "AA002",
          imageUrl:
            "https://www.jiomart.com/images/product/original/rveitzdped/fancy-braceletblack-women-watches-ladies-wrist-watch-for-girls-style-analog-fashion-female-clock-with-magnet-mash-strap-stylish-girls-watch-new-model-2020-diamond-analog-watch-for-girls-product-images-rveitzdped-2-202302080606.jpg?im=Resize=(500,630)",
          name: "Apple watch",
          price: 1700,
          qty: 2,
        },
        {
          id: "AA003",
          imageUrl:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71i+fVDV0nL._AC_UY1000_.jpg",
          name: "Oppo watch",
          price: 1600,
          qty: 2,
        },
        {
          id: "AA004",
          imageUrl:
            "https://danielklein.in/cdn/shop/products/DK12046-2.jpg?v=1671616264&width=320",
          name: "Lenovo watch",
          price: 1500,
          qty: 2,
        },
        {
          id: "AA005",
          imageUrl:
            "https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2020-07-03at20.06.19_580x.jpg?v=1593787329",
          name: "Mi watch",
          price: 1400,
          qty: 2,
        },
      ]

 static getCartInfo(){
        return this.watchCart;
      }
}