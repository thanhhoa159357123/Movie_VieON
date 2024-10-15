import PropType from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [textSearch, setSearch] = useState('')
  return (
    <div className="p-2 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1
          className="text-[40px]
        font-bold text-red-700"
        >
          VieON
        </h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Trang chủ
          </a>
          <a href="#" className="text-white">
            Truyền hình
          </a>
          <a href="#" className="text-white">
            HBO GO
          </a>
          <a href="#" className="text-white">
            Thể thao
          </a>
          <a href="#" className="text-white">
            Thiếu nhi
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/mua-goi"
          className="p-1 text-black rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-300"
        >
          Đăng ký gói
        </Link>
        <Link
          to="/ma-vieon"
          className="p-1 text-white border bg-transparent rounded-md focus:outline-none"
        >
          Nhập mã VieON
        </Link>
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="p-1 text-white border bg-transparent  rounded-md focus:outline-none" onChange={(e) => setSearch(e.target.value)} value={textSearch}
        />
        <button
          className="p-2 text-white bg-red-600"
          onClick={() => onSearch(textSearch)}
        >
          Tìm kiếm
        </button>
        <Link
          to="/login"
          className="p-1 text-white border bg-transparent rounded-md focus:outline-none"
        >
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

Header.propType = {
  onSearch: PropType.func,
};

export default Header;
