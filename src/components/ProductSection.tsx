import { useState } from "react";

export default function ProductSection() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };


   const producto = {
    id: 1,
    name: "C9200L-24P-4G-E",
    price: 1979,
    marca: "CISCO",
    img: [
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front_large.jpg",
      "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_back.jpg"
    ],
    description:
      "Switch Cisco Catalyst C9200L-24P, capa L3 con 24 puertos Gigabit PoE+ (370W), 04 puertos SFP.",
    esptecnicas: [
      "Modelo: C9200L-24P-4G-E",
      "Puertos: 24 x 10/100/1000 PoE+ , 4 x SFP",
      "Capacidad de Switching: 128 Gbps",
      "Memoria DRAM: 2 GB",
    ],
    protocolos: [
      "OSPF, BGP, EIGRP, PIM-SM, IGMPv3, SSH, HTTPS"
    ],
    normas: [
      "IEEE 802.1D, IEEE 802.1Q, IEEE 802.3af, IEEE 802.3x"
    ],
    certificaciones: [
      "CE, UL, VCCI, RCM"
    ],
  };
  

  const sections = [
    { id: "esptecnicas", title: "Especificaciones Técnicas", data: producto.esptecnicas },
    { id: "protocolos", title: "Protocolos", data: producto.protocolos },
    { id: "normas", title: "Normas", data: producto.normas },
    { id: "certificaciones", title: "Certificaciones", data: producto.certificaciones },
  ];

  const images = [
    "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front_large.jpg",
            "https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_back.jpg"
  ];

  return (
    <>
    <div className="bg-white  py-3 flex px-4 justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-8 flex items-center justify-center relative aspect-square">
          <img
            src={images[selectedImage]}
            alt="Magnesol Polvo"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="flex gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`border-2 rounded-lg p-2 bg-white ${selectedImage === idx ? 'border-blue-800' : 'border-gray-200'}`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-20 h-20 object-contain" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">CISCO</p>
          <h1 className="text-xl font-bold text-gray-900 mb-4">C9200L-24P-4G-E</h1>

          <div className="flex items-baseline gap-4 mb-4">
           
            <div>
              <p className="text-xs text-gray-500">Precio Promocional</p>
              <p className="text-3xl font-bold text-primary">U$ 1,979</p>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <p className="text-sm text-gray-700">Switch Cisco Catalyst C9200L-24P, capa L3 con 24 puertos Gigabit PoE+ (370W) , 04 puertos para fibra SFP C9200L-24P-4G-E.</p>
            <p className="text-sm text-gray-600">• RS: DN0466</p>
            <button className="text-sm text-primary hover:underline font-semibold">Ver más</button>
          </div>
        </div>


        {/* Delivery Methods */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Métodos de entrega disponibles:</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rounded"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Despacho a domicilio</p>
                  <p className="text-xs text-gray-500">Disponible</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Retiro en tienda (Gratis)</p>
                  <p className="text-xs text-gray-500">Disponible</p>
                </div>
              </div>
              <button className="text-sm text-primary hover:underline">Consultar</button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 text-white">
          <div className="bg-[#F5BA52] p-2 rounded-lg">
            <a href="">
            Ficha Tecnica
            </a>
          </div>
          <div className="bg-[#F5BA52] p-2  rounded-lg">
            <a href="">
           Manual
            </a>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-4">
          <button className="flex-1 bg-primary hover:bg-[#0c35eb] text-white py-6 text-base font-semibold rounded-full">
            COMPRAR AHORA
          </button>
          
        </div>
      </div>

      
    </div>
    </div>

     <div className="mb-12 space-y-4">
      {sections.map((sec) => (
        <div key={sec.id} className="bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => toggleSection(sec.id)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            <h3 className="text-lg font-bold">{sec.title}</h3>

            <span
              className={`transform transition ${
                openSections.includes(sec.id) ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {openSections.includes(sec.id) && (
            <div className="px-6 pb-4 text-sm text-gray-700 space-y-2">
              {sec.data?.map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    </>

  );
}
