import { useState } from "react";

type Producto = {
  id: number;
  name: string;
  esptecnicas?: string[];
  protocolos?: string[];
  normas?: string[];
  certificaciones?: string[];
};

interface Props {
  producto: Producto;
}

export default function ProductDetalle({ producto }: Props) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const sections = [
    { id: "esptecnicas", title: "Especificaciones Técnicas", data: producto.esptecnicas },
    { id: "protocolos", title: "Protocolos", data: producto.protocolos },
    { id: "normas", title: "Normas", data: producto.normas },
    { id: "certificaciones", title: "Certificaciones", data: producto.certificaciones },
  ];

  return (
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
  );
}
