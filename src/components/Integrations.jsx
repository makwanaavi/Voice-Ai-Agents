import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaGithub, FaCode, FaServer, FaTerminal, FaPlug } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import { useTheme } from './ThemeContext'

// ✅ Import logo images
import twilioLogo from '../assets/logos/twilio.svg'
import zapierLogo from '../assets/logos/zapier.svg'
import openaiLogo from '../assets/logos/openai.svg'
import awsLogo from '../assets/logos/aws.svg'
import stripeLogo from '../assets/logos/stripe.svg'
import shopifyLogo from '../assets/logos/shopify.svg'

// ✅ Add more logos here
const logos = [
  { img: twilioLogo, name: 'Twilio' },
  { img: zapierLogo, name: 'Zapier' },
  { img: openaiLogo, name: 'OpenAI' },
  { img: awsLogo, name: 'AWS' },
  { img: stripeLogo, name: 'Stripe' },
  { img: shopifyLogo, name: 'Shopify' },
  { img: twilioLogo, name: 'Twilio 2' },
  { img: zapierLogo, name: 'Zapier 2' },
  { img: openaiLogo, name: 'OpenAI 2' },
  { img: awsLogo, name: 'AWS 2' }
]

const devTools = [
  {
    icon: <FaGithub className="text-3xl text-purple-400" />,
    title: 'GitHub Repos',
    desc: 'Sample implementations & SDKs with ready-to-use templates'
  },
  {
    icon: <FaTerminal className="text-3xl text-blue-400" />,
    title: 'CLI Tools',
    desc: 'Command line interface for quick setup and management'
  },
  {
    icon: <FaPlug className="text-3xl text-green-400" />,
    title: 'Webhooks',
    desc: 'Real-time event notifications with secure endpoints'
  }
]

export default function Integrations() {
  const { darkMode } = useTheme()

  return (
    <section className={`relative overflow-hidden py-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gray-100'}`}>
      <div className="container relative z-10 mx-auto px-6">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className={`mb-4 text-4xl font-bold md:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Plug into Your Stack
          </h2>
          <p className={`mx-auto max-w-2xl text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Seamless integration with your existing tools and infrastructure
          </p>
        </div>

        {/* Logos Carousel */}
        <div className="mb-20">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
            loop
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              el: '.logo-pagination',
              bulletClass: `swiper-pagination-bullet ${darkMode ? 'bg-gray-500' : 'bg-gray-300'}`,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-500'
            }}
            spaceBetween={30}
            className="py-8"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="h-12 object-contain"
                  title={logo.name}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="logo-pagination flex justify-center mt-6 gap-2"></div>
        </div>

        {/* Developer Tools Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className={`text-2xl font-semibold text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="relative inline-block">
              <span className={`relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Developer Tools Ready
              </span>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-all backdrop-blur-sm shadow-lg hover:scale-105 ${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>{tool.icon}</div>
                  <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tool.title}</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="#"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors group border hover:border-transparent ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-purple-600' : 'bg-gray-100 border-gray-200 hover:bg-purple-500'}`}
            >
              <FaCode className={`group-hover:text-white transition-colors ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>API Reference</span>
            </a>
            <a
              href="#"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors group border hover:border-transparent ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-blue-600' : 'bg-gray-100 border-gray-200 hover:bg-blue-500'}`}
            >
              <FaServer className={`group-hover:text-white transition-colors ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Webhook Docs</span>
            </a>
            <a
              href="#"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors group border hover:border-transparent ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-green-600' : 'bg-gray-100 border-gray-200 hover:bg-green-500'}`}
            >
              <FaTerminal className={`group-hover:text-white transition-colors ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>CLI Docs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}