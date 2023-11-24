import { useState } from 'react';

const UserProfile = () => {
  // Kullanıcı bilgilerini tutacak state'leri tanımlayın
  const [username, setUsername] = useState('kullanici_adi');
  const [email, setEmail] = useState('ornek@eposta.com');
  const [phone, setPhone] = useState('555-555-5555');
  const [address, setAddress] = useState('1234 Örnek Sokak, Örnek Şehir');

  const [isEditing, setIsEditing] = useState(false);

  // Bilgileri güncelleme fonksiyonu
  const updateProfile = () => {
    // Burada, kullanıcının profil bilgilerini güncelleyebilirsiniz
    // Örneğin, bu bilgileri bir API'ye gönderebilirsiniz.
    // API çağrısı sonucunda başarılı bir güncelleme gerçekleştiğinde
    // state'leri güncelleyebilirsiniz.
    setIsEditing(false); // Düzenleme modunu kapat
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-center">
          <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="Profil Resmi"
            className="rounded-full w-20 h-20 mx-auto"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kullanıcı Adı:
          </label>
          {isEditing ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p>{username}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-posta:
          </label>
          {isEditing ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p>{email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Telefon Numarası:
          </label>
          {isEditing ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p>{phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Adres:
          </label>
          {isEditing ? (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p>{address}</p>
          )}
        </div>
        <div className="text-center">
          {isEditing ? (
            <button
              onClick={updateProfile}
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Kaydet
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Profili Düzenle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
