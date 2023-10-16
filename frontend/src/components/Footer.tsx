import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 p-8 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold ml-2">RESTAURANT</h2>
        </div>
        <p className="text-sm text-gray-400">© 2023 Tüm hakları saklıdır.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-300 hover:text-white transition">Gizlilik Politikası</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-gray-300 hover:text-white transition">Kullanım Şartları</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-gray-300 hover:text-white transition">İletişim</a>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaFacebookSquare className="text-2xl mx-2" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaTwitter className="text-2xl mx-2" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaInstagram className="text-2xl mx-2" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
