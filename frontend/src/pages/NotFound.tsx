import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[600px] max-w-[1440px] bg-slate-200 mx-auto">
      <div className=" flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
        <p className="text-gray-800">Aradığınız sayfa mevcut değil.</p>
        <Link to="/" className="bg-orange-500 px-4 py-2 text-white rounded-lg">Ana Sayfaya Dön</Link>
      </div>
    </div>
  );
};

export default NotFound;
