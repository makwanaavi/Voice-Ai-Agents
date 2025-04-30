import { useTheme } from "./ThemeContext";
import { FaRobot, FaHeadset, FaCogs, FaPhone, FaGlobe } from "react-icons/fa";

import { motion } from "framer-motion";

const features = [
  {
    icon: FaRobot,
    title: "Natural Voice Conversations",
    desc: "Powered by cutting-edge LLMs for human-like responses.",
  },
  {
    icon: FaCogs,
    title: "Flexible APIs & SDKs",
    desc: "Easy RESTful APIs + language SDKs for quick integration.",
  },
  {
    icon: FaHeadset,
    title: "Real-Time Transcription",
    desc: "Streaming STT + TTS with low latency for seamless experience.",
  },
  {
    icon: FaRobot,
    title: "Custom Voice Flows with AI",
    desc: "Define intents, fallback logic, and actions for customized interactions.",
  },
  {
    icon: FaPhone,
    title: "Built-in Telephony & SIP Integration",
    desc: "Easily integrate with Twilio, Vonage, and more.",
  },
  {
    icon: FaGlobe,
    title: "Multilingual Support",
    desc: "Speak your user's language with multilingual capabilities.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function FeatureCards() {
  const { darkMode } = useTheme();

  return (
    <section className={`py-20 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-6">
        <h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Build Smarter Voice Experiences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-xl transition-all duration-300 shadow-md ${darkMode ? "bg-gray-800 hover:shadow-purple-500/20" : "bg-white border border-gray-200 hover:shadow-purple-300/30"}`}
              >
                <Icon className={`text-3xl mb-4 ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
