import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdPerson,
    MdTurnLeft,
} from "react-icons/md";
import { Link } from "react-router-dom";


const menuItems = [
    {
      title: "Sayfalar",
      list: [
        {
          title: "Admin Paneli",
          path: "/admin",
          icon: <MdDashboard />,
        },
        {
          title: "Kullanıcılar",
          path: "/admin/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Yemekler",
          path: "/admin/foods",
          icon: <MdShoppingBag />,
        },
      ],
    },
  ];

const Sidebar = () => {
  return (
    <div className='sticky w-1/5 border-r border-slate-600 h-screen top-10 p-8 text-white'>
        <div className='flex items-center gap-4 mb-10'>
            <MdPerson size="25"/>
            <div className="flex flex-col">
                <span className="font-medium">Admin</span>
                <span className="text-xs text-gray-400">Administrator</span>
            </div>
        </div>
        <ul>
            {menuItems.map((cat) => (
                <li key={cat.title}>
                    <span className="font-bold text-sm my-3 text-gray-400">{cat.title}</span>
                    {cat.list.map((item) => (
                        <Link to={item.path} key={item.title} className="p-4 flex items-center gap-4 my-2 rounded-lg hover:bg-slate-900">
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                </li>
            ))}
        </ul>
        <button 
            onClick={() => window.location.pathname="/"}
            className="p-4 my-2 flex items-center gap-4 cursor-pointer rounded-lg hover:bg-slate-900 bottom-2 absolute"
        >
            <MdTurnLeft size="25"/>
            Siteye Geri Dön
        </button>
    </div>
  )
}

export default Sidebar