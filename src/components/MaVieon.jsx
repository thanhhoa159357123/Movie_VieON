import React from "react";
import { Link } from "react-router-dom";
import codeVieon from "../assets/voucher_vieon.png";

const MaVieon = () => {
  return (
    <div className="bg-white">
      <div>
        <header className="bg-black text-white flex justify-between items-center p-4">
          <Link to="/" className="flex items-center">
            Trang Chủ
          </Link>
          <div className="text-sm">Hotline Miễn Phí: 0392055477</div>
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            <img
              src={codeVieon}
              alt="Two people jumping in joy"
              className="mx-auto mb-6"
            />
            <h1 className="text-2xl font-bold mb-4">Nhập mã VieON</h1>
            <div className="mb-4">
              <input
                type="text"
                id="vieon-code"
                placeholder="Mã VieON"
                className="border border-gray-300 p-2 w-full max-w-xs"
              />
            </div>
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded w-full max-w-xs">
              Xác nhận
            </button>
            <p className="text-gray-700 text-sm mt-4">
              Bằng việc nhập và xác nhận Mã VieON, bạn xác nhận <br /> đã đọc và đồng ý
              với Hợp đồng và Chính sách của VieON
            </p>
          </div>
        </main>
        <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full">
          <i className="fas fa-comment-dots"></i>
        </div>
      </div>
      <div className="bg-black text-white w-full h-[400px]">
        <div className="grid grid-cols-1 divide-y">
          <div className="w-full h-[200px] flex items-center justify-between p-5">
            <div>Footer 1</div>
            <div className="grid grid-cols-3 divide-x-4 w-[700px] h-full divide-black">
              <div>
                GIỚI THIỆU <br />
                Giới thiệu về VieON
              </div>
              <div>
                QUY ĐỊNH <br />
                Hợp đồng điện tử <br />
                Điều khoản và điều kiện <br />
                Chính sách bảo vệ thông tin cá nhân
              </div>
              <div>
                THÔNG TIN <br />
                Thông báo <br />
                FAQs <br />
                Liên hệ <br />
                Góp ý
              </div>
            </div>
          </div>
          <div className="w-full h-[200px] text-[15px] flex items-center justify-between p-5">
            <div>
              Công ty Cổ phần VieON - Địa chỉ: Tầng 5, 222 Pasteur, Phường Võ
              Thị Sáu, Quận 3, Thành phố Hồ Chí Minh.
              <br />
              Email: support@vieon.vn | Hotline: 1800.599.920 (miễn phí)
              <br />
              Giấy phép Cung cấp Dịch vụ Phát thanh, Truyền hình trả tiền số
              247/GP-BTTTT cấp ngày 21/07/2023.
              <br />
              Giấy Chứng Nhận Đăng Ký Doanh Nghiệp số: 0314415573 do Sở Kế Hoạch
              Đầu Tư Thành Phố Hồ Chí Minh cấp ngày 19/05/2017
            </div>
            <div>Footer 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaVieon;
