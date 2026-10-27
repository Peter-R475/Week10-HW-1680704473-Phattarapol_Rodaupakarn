import ProductCard, { type ProductData } from "./components/ProductCard"

function App() {
  const items: ProductData[] = [
    {
      id: "001",
      name: "iPhone 15",
      description: "6.1-inch Super Retina XDR display, Dynamic Island, A16 Bionic chip, and 48MP main camera.",
      price: 25900,
      image: "https://static-jaymart.com/ecom/public/2VN3bn6hWSsp1yBNltvegeeWS2Y.jpg"
    },
    {
      id: "002",
      name: "Samsung Galaxy S23",
      description: "Compact flagship with Snapdragon 8 Gen 2, 6.1-inch 120Hz Dynamic AMOLED 2X, and 50MP triple camera.",
      price: 23000,
      image: "https://images.samsung.com/is/image/samsung/p6pim/th/2302/gallery/th-galaxy-s23-s911-sm-s911blicthl-534847063?$624_624_PNG$"
    },
    {
      id: "003",
      name: "Xiaomi 13",
      description: "Leica professional optical lenses, Snapdragon 8 Gen 2, and 67W wired turbo charging.",
      price: 20000,
      image: "https://i02.appmifile.com/302_item_th/09/04/2024/c503a967001fb10c8394924aa7c1243d.png"
    },
    {
      id: "004",
      name: "OPPO Find X6",
      description: "Hasselblad mobile imaging system, Dimensity 9200 processor, and 6.74-inch 120Hz AMOLED.",
      price: 22000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wU81MKPome8iEWxHCRAliv8JI1SqR2ccXfxZeZidJxdS8sNYgIENEik&s=10"
    },
    {
      id: "005",
      name: "vivo X90",
      description: "Zeiss T coated optics, MediaTek Dimensity 9200, and 120W Dual-Cell FlashCharge.",
      price: 19000,
      image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1672822347373/32e5861310591744ac06727019f97635.png"
    },
    {
      id: "006",
      name: "realme 12 Pro+ 5G",
      description: "Periscope portrait camera, Snapdragon 7s Gen 2, and 120Hz curved vision display.",
      price: 16990,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxKmmQhmMRoKZ0lK31IqsVwxEvFWLE1F7Xz6fijOZNC-SMZLtBAYqwqGN&s=10"
    },
    {
      id: "007",
      name: "Google Pixel 8",
      description: "Google Tensor G3, Actua OLED display, and advanced computational photography with Google AI.",
      price: 22000,
      image: "https://m.media-amazon.com/images/I/713eEl39eLL._AC_SL1500_.jpg"
    },
    {
      id: "008",
      name: "Samsung Galaxy Z Fold6",
      description: "Book-style foldable with Galaxy AI, Snapdragon 8 Gen 3 for Galaxy, and dual Dynamic AMOLED 2X displays.",
      price: 63900,
      image: "https://media-cdn.bnn.in.th/408474/Samsung-Galaxy-Z-Fold6-Silver-5G--6-square_medium.jpg"
    }
  ]

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 m-10 gap-28">
        {items.map((item) => (
          <ProductCard key={item.id} name={item.name} id={item.id} description={item.description} price={item.price} image={item.image} />

        ))}
      </div>
    </>
  )
}

export default App