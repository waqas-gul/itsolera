import React from "react";

const MapSection = () => {
  return (
    <div
      className="relative w-full h-[70vh] font-inter"
      style={{
        width: "100%",
        height: "70vh", // Fallback inline style in case Tailwind fails
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.286560436528!2d72.97422147573889!3d33.64973607331119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9793f9cd6adb%3A0xc80413c445adc703!2sITSOLERA!5e0!3m2!1sen!2s!4v1737130539671!5m2!1sen!2s"
        className="absolute inset-0 w-full h-full"
        style={{
          border: 0,
          width: "100%", // Ensures iframe takes full width
          height: "100%", // Ensures iframe takes full height
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
