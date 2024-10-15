import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/facebook.png";
import gg from "../assets/google.png";
import VieON from "../assets/Logo_VieON.jpg";
//
const Login = () => {
  return (
    <div className="relative min-h-screen bg-bglogin bg-center bg-no-repeat bg-cover flex items-center justify-center">
      <div className="absolute inset-0 ">
        <Link to="/" className="text-white text-[30px] mb-4 absolute p-10 items-center">
          Trang Chủ
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl text-white font-bold mb-4">
          Đăng ký tài khoản / Đăng nhập VieON để tận hưởng kho Phim, Show, Thể
          thao, Truyền hình cực đỉnh
        </h1>
        <p className="text-gray-400 mb-4">
          Vui lòng nhập số điện thoại của bạn để bắt đầu
        </p>
        <div className="mb-4">
          <div className="flex items-center bg-gray-700 rounded-lg p-2">
            <span className="text-white mr-2">+84</span>
            <input
              type="text"
              placeholder="Số điện thoại"
              className="bg-transparent text-white flex-1 outline-none"
            />
          </div>
        </div>
        <button
          className="w-full bg-gray-600 text-gray-400 py-2 rounded-lg mb-4"
          disabled
        >
          Bắt đầu
        </button>
        <div className="flex justify-between mb-4">
          <button className="flex items-center bg-blue-600 text-white py-2 px-4 mr-5 rounded-lg">
            <img src={fb} alt="facebook" className="w-5 h-5"/> 
            <div>Đăng nhập bằng Facebook</div>
          </button>
          <button className="flex items-center bg-red-600 text-white py-2 px-4 ml-5 rounded-lg">
            <img src={gg} alt="google" className="w-5 h-5"/> 
            <div>Đăng nhập bằng Google</div>
          </button>
        </div>
        <p className="text-gray-400 text-center">Hợp đồng và Chính sách</p>
      </div>
    </div>
  );
};

export default Login;
