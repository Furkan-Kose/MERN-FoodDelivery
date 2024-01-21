import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { UserType } from "../../types";
import { getAllUsers, deleteUser } from "../../services/userService";
import { MdPerson } from "react-icons/md";
import { toast } from "react-toastify";

const Users = () => {

  const [users, setUsers] = useState<UserType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        console.error('Veri alınamadı:', error);
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      
      const response = await getAllUsers();
      setUsers(response);

      console.log('User deleted successfully!');
      toast.success("Kullanıcı Başarıyla Silindi!", {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error('User delete failed:', error);
      toast.error("Kullanıcı Silinirken Bir Hata Oluştu!", {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-2 py-1 px-3 rounded-md ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          } font-medium`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="p-12 w-full">
      <div className="flex justify-between items-center border-b border-slate-600 pb-2 mb-4">
        <h1 className="text-white text-2xl font-bold">Kullanıcılar</h1>
        <Link to="/admin/users/add">
          <button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg">
            Kullanıcı Ekle
          </button>
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-white py-2">Kullanıcı Adı</th>
            <th className="text-left text-white py-2">E-posta</th>
            <th className="text-left text-white py-2">Rolü</th>
            <th className="text-left text-white py-2">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-white font-light">
              <td className="py-2">
                <div className="flex items-center gap-4">
                  {user.image ? <img src={user.image} alt={user.username} width={40} height={40} className="object-cover rounded-full"/> : <MdPerson size="30"/>}
                  {user.username}
                </div>
              </td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.isAdmin ? "Admin": "Kullanıcı"}</td>
              <td className="py-2">
                <div className="flex gap-4">
                  <Link to={`/admin/users/${user._id}`}>
                    <button className="py-1 px-3 rounded-md bg-green-500 text-xs font-medium">Güncelle</button>
                  </Link>
                  <button 
                    className="py-1 px-3 rounded-md bg-red-500 text-xs font-medium"
                    onClick={() => handleDelete(user._id)}
                  >
                    Sil
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4">
          {renderPageNumbers()}
        </div>
      )}

    </div>
  );
};

export default Users;
