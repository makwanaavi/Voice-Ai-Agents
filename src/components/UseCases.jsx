import { FaHospital, FaCreditCard, FaShoppingCart, FaHeadset } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

export default function UseCases() {
  const { darkMode } = useTheme();
  const cases = [
    {
      icon: <FaHospital className="text-4xl text-blue-500" />,
      title: "Healthcare",
      desc: "Automate appointment scheduling & patient check-ins",
      color: darkMode ? "bg-blue-900/20" : "bg-blue-100"
    },
    {
      icon: <FaCreditCard className="text-4xl text-green-500" />,
      title: "Fintech",
      desc: "Voice KYC verification & real-time fraud alerts",
      color: darkMode ? "bg-green-900/20" : "bg-green-100"
    },
    {
      icon: <FaShoppingCart className="text-4xl text-pink-500" />,
      title: "E-Commerce",
      desc: "Smart product assistant & voice-enabled returns",
      color: darkMode ? "bg-pink-900/20" : "bg-pink-100"
    },
    {
      icon: <FaHeadset className="text-4xl text-yellow-500" />,
      title: "Customer Support",
      desc: "Answer FAQs & route complex queries using voice bots",
      color: darkMode ? "bg-yellow-900/20" : "bg-yellow-100"
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"} ${darkMode ? "text-white" : "text-gray-900"}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Voice AI in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-xl transition-transform hover:scale-105`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}