// "use client";

// import { useState, useRef } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// export default function Home() {
//   const [text, setText] = useState<string>("");
//   const [size, setSize] = useState<number>(200);
//   const [fgColor, setFgColor] = useState<string>("#000000");
//   const [bgColor, setBgColor] = useState<string>("#ffffff");

//   const qrRef = useRef<HTMLDivElement>(null);

//   const downloadQRCode = () => {
//     if (qrRef.current) {
//       const canvas = qrRef.current.querySelector("canvas");
//       if (canvas) {
//         const url = canvas.toDataURL("image/png");
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "qrcode.png";
//         link.click();
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
//       <h1 className="text-2xl text-black font-bold mb-4">QR Code Generator</h1>

//       {/* Input Field */}
//       <input
//         type="text"
//         placeholder="Enter text or URL"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         className="border  text-black p-2 w-80 mb-4 rounded"
//       />

//       {/* Customization Options */}
//       <div className="flex gap-4 mb-4">
//         <div>
//           <label className="block text-sm  text-black font-semibold">Size (px)</label>
//           <input
//             type="number"
//             title="number"
//             value={size}
//             onChange={(e) => setSize(Number(e.target.value))}
//             className="border p-2 w-24 rounded  text-black"
//           />
//         </div>
//         <div>
//           <label className="block text-sm  text-black font-semibold">Foreground Color</label>
//           <input
//             type="color"
//             title="color"
//             value={fgColor}
//             onChange={(e) => setFgColor(e.target.value)}
//             className="w-24  text-black h-10 rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm  text-black font-semibold">Background Color</label>
//           <input
//             type="color"
//             title="color"
//             value={bgColor}
//             onChange={(e) => setBgColor(e.target.value)}
//             className="w-24 h-10  text-black rounded"
//           />
//         </div>
//       </div>

//       {/* QR Code Display */}
//       <div className="bg-white p-4 rounded shadow" ref={qrRef}>
//         {text && <QRCodeCanvas value={text} size={size} fgColor={fgColor} bgColor={bgColor} />}
//       </div>

//       {/* Download Button */}
//       {text && (
//         <button
//           onClick={downloadQRCode}
//           className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition"
//         >
//           Download QR Code
//         </button>
//       )}
//     </div>
//   );
// }

import React from "react";
import HomeHeader from "./components/home-header";
import HomeContent from "./components/home-content";
import HomeFooter from "./components/home-footer";

const Homepage: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
      {/* <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, Im Jamal Hasan Mahmud Mahaboob</h1>
          <p className="text-lg md:text-xl text-gray-300">
            Full Stack Developer | Software Engineer | IT Enthusiast
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div> */}
    </>

  );
};

export default Homepage;

