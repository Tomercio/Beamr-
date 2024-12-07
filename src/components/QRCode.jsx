import React from "react";

const QRCode = ({ url = "https://tawebstudio.com" }) => {
  // Generate QR code URL using the QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <img
        src={qrCodeUrl}
        alt={`QR Code for ${url}`}
        className="border border-gray-200 rounded-lg shadow-sm"
        width={100}
        height={100}
      />
      <p className="scanme text-sm text-gray-400">Scan me !</p>
    </div>
  );
};

export default QRCode;
