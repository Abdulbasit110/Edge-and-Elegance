import { MessageCircleMore } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923182820766"; // Adding 92 as the country code for Pakistan
  const message = "Hello! I would like to know more about your products.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 hover:scale-105 text-white p-5 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={32} />
    </button>
  );
};

export default WhatsAppButton;
