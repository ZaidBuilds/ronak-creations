import { WhatsAppIcon } from "@/components/Icons";

const WHATSAPP_NUMBER = "917988174542";
const WHATSAPP_MSG = "Hi%20Ronak%20Creations!%20I%20have%20a%20query.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
