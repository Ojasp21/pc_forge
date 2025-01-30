import { useParams } from 'react-router-dom';
import './product.css'

const allProducts = [
  // Mouse & Mouse Pads
  { id: 1, name: 'Logitech G502 HERO', category: 'Mouse & Mouse Pads', price: 5500, image: 'logitech_g502.jpg' },
  { id: 2, name: 'Razer DeathAdder V2', category: 'Mouse & Mouse Pads', price: 4500, image: 'razer_deathadder.jpg' },
  { id: 3, name: 'SteelSeries QcK Mouse Pad', category: 'Mouse & Mouse Pads', price: 1200, image: 'steelseries_qck.jpg' },
  { id: 4, name: 'Corsair MM300 Mouse Pad', category: 'Mouse & Mouse Pads', price: 2000, image: 'corsair_mm300.jpg' },
  { id: 5, name: 'HyperX Pulsefire Haste', category: 'Mouse & Mouse Pads', price: 3500, image: 'hyperx_pulsefire.jpg' },
  
  // Keyboard
  { id: 6, name: 'Razer BlackWidow V3', category: 'Keyboard', price: 12000, image: 'razer_blackwidow.jpg' },
  { id: 7, name: 'Corsair K95 RGB', category: 'Keyboard', price: 16000, image: 'corsair_k95.jpg' },
  { id: 8, name: 'Logitech G Pro X', category: 'Keyboard', price: 14000, image: 'logitech_gpro.jpg' },
  { id: 9, name: 'SteelSeries Apex Pro', category: 'Keyboard', price: 18000, image: 'steelseries_apex.jpg' },
  { id: 10, name: 'HyperX Alloy Origins', category: 'Keyboard', price: 11000, image: 'hyperx_alloy.jpg' },
  
  // Monitor
  { id: 11, name: 'LG UltraGear 27GL850', category: 'Monitor', price: 35000, image: 'lg_ultragear.jpg' },
  { id: 12, name: 'ASUS ROG Swift PG259QN', category: 'Monitor', price: 60000, image: 'asus_rog.jpg' },
  { id: 13, name: 'Dell Alienware AW2521H', category: 'Monitor', price: 55000, image: 'alienware_aw2521h.jpg' },
  { id: 14, name: 'MSI Optix MAG274QRF', category: 'Monitor', price: 40000, image: 'msi_optix.jpg' },
  { id: 15, name: 'Acer Predator X27', category: 'Monitor', price: 120000, image: 'acer_predator.jpg' },
  
  // Speaker
  { id: 16, name: 'Bose Companion 2 Series III', category: 'Speaker', price: 9000, image: 'bose_companion.jpg' },
  { id: 17, name: 'Logitech Z623', category: 'Speaker', price: 12000, image: 'logitech_z623.jpg' },
  { id: 18, name: 'Creative Pebble V3', category: 'Speaker', price: 3500, image: 'creative_pebble.jpg' },
  { id: 19, name: 'Edifier R1280T', category: 'Speaker', price: 10000, image: 'edifier_r1280t.jpg' },
  { id: 20, name: 'JBL Professional 305P', category: 'Speaker', price: 16000, image: 'jbl_305p.jpg' },
  
  // Headphones
  { id: 21, name: 'Sony WH-1000XM4', category: 'Headphones', price: 25000, image: 'sony_wh1000xm4.jpg' },
  { id: 22, name: 'Bose QuietComfort 45', category: 'Headphones', price: 28000, image: 'bose_qc45.jpg' },
  { id: 23, name: 'Sennheiser HD 660S', category: 'Headphones', price: 50000, image: 'sennheiser_hd660s.jpg' },
  { id: 24, name: 'Razer Kraken X', category: 'Headphones', price: 4000, image: 'razer_krakenx.jpg' },
  { id: 25, name: 'HyperX Cloud Alpha', category: 'Headphones', price: 8000, image: 'hyperx_cloudalpha.jpg' },
  
  // Webcameras
  { id: 26, name: 'Logitech C920', category: 'Webcameras', price: 9000, image: 'logitech_c920.jpg' },
  { id: 27, name: 'Razer Kiyo Pro', category: 'Webcameras', price: 15000, image: 'razer_kiyo.jpg' },
  { id: 28, name: 'Elgato Facecam', category: 'Webcameras', price: 20000, image: 'elgato_facecam.jpg' },
  { id: 29, name: 'Microsoft LifeCam Studio', category: 'Webcameras', price: 8000, image: 'microsoft_lifecam.jpg' },
  { id: 30, name: 'AverMedia PW513', category: 'Webcameras', price: 18000, image: 'avermedia_pw513.jpg' },
];

export default function ProductsPage() {
    const { categoryName } = useParams();
    const decodedCategory = decodeURIComponent(categoryName); // Ensure proper category matching
    const products = allProducts.filter((product) => product.category === decodedCategory);
  
    return (
      <div className="products-container">
        <h1>{decodedCategory} Products</h1>
        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
              </div>
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    );
  }
