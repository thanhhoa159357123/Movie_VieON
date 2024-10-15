import React from "react";
import { Link, useNavigate } from "react-router-dom";
import leftchevron from "../assets/left-chevron.png";
import check from "../assets/check.png";
import zalo from "../assets/Zalo_logo.png";
import mobifone from "../assets/LOGO_MOBIFONE_PNG.png";
import vip from "../assets/thumb_vip.png";
import viphbogo from "../assets/thumb_vip_hbo_go.png";
import vipsport from "../assets/thumb_vip_sport.png";
import vipall from "../assets/thumb_vip_access_all.png";

const Premium = () => {
  return (
    <div className="container mx-auto bg-white">
      <header className="flex justify-between items-center py-4 p-5 bg-black">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-lg">
            Trang Chủ
          </Link>
        </div>
        <div className="text-sm">
          <span className="mr-4 text-white">Hotline Miễn Phí: 1800 599920</span>
        </div>
      </header>
      <div className="flex justify-between items-center py-4 p-5">
        <div className="flex items-center">
          <Link to="/" className="text-green-500 text-lg flex items-center">
            <img
              src={leftchevron}
              alt="VieON Logo"
              className="mr-2 w-10 h-10"
            />
            <span>Trở về</span>
          </Link>
        </div>
      </div>
      <div className="p-5 my-4">
        <h1 className="text-2xl font-bold">Đặc quyền VIP</h1>
        <div className="flex flex-wrap mt-2">
          <span className="flex items-center mr-4 text-green-500">
            <span className="mr-2">•</span>
            <span>100.000+ giờ giải trí</span>
          </span>
          <span className="flex items-center mr-4 text-green-500">
            <span className="mr-2">•</span>
            <span>Xem sớm nhất</span>
          </span>
          <span className="flex items-center mr-4 text-green-500">
            <span className="mr-2">•</span>
            <span>Không quảng cáo</span>
          </span>
          <span className="flex items-center mr-4 text-green-500">
            <span className="mr-2">•</span>
            <span>Thuyết minh/Lồng tiếng/Phụ đề</span>
          </span>
          <span className="flex items-center text-green-500">
            <span className="mr-2">•</span>
            <span>Full HD/4K</span>
          </span>
        </div>
        <div className="flex justify-end mt-4">
          <span className="text-sm mr-4">
            *Dành cho khách hàng có mã ưu đãi tặng gói
          </span>
          <button className="border border-gray-300 px-4 py-2 rounded">
            Nhập mã VieON
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  p-5">
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">VIP</h2>
            <span className="text-xl font-bold text-green-500">69.000 đ</span>
          </div>
          <img src={vip} alt="VIP Package Image" className="mb-4 w-full" />
          <button className="bg-green-500 text-white w-full py-2 rounded">
            Chọn gói VIP
          </button>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li className="mb-2">Phim/Show VieON độc quyền</li>
            <li className="mb-2">Kho phim châu Á lớn nhất</li>
            <li>Xem trên nhiều thiết bị</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Chương trình ưu đãi</h3>
            <div className="flex items-center mt-2">
              <img
                src={mobifone}
                alt="Mobifone Logo"
                className="mr-2 w-10 h-10"
              />
              <p className="text-sm">
                Dành riêng cho TB Mobifone! Chỉ 90K, có ngay gói VIP, 30GB data
                4G. Mua ngay{" "}
                <a href="#" className="text-green-500">
                  tại đây
                </a>
              </p>
            </div>
            <div className="flex items-center mt-2">
              <img src={zalo} alt="ZaloPay Logo" className="mr-2 w-10 h-10" />
              <p className="text-sm">
                Giảm 20% (tối đa 30.000đ) khi thanh toán qua ZaloPay với mã
                ANHTRAI. Xem chi tiết{" "}
                <a href="#" className="text-green-500">
                  tại đây
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">VIP HBO GO</h2>
            <span className="text-xl font-bold text-green-500">99.000 đ</span>
          </div>
          <img
            src={viphbogo}
            alt="VIP HBO GO Package Image"
            className="mb-4 w-full"
          />
          <button className="bg-green-500 text-white w-full py-2 rounded">
            Chọn gói VIP HBO GO
          </button>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li className="mb-2">Phim/Show VieON độc quyền</li>
            <li className="mb-2">Kho phim châu Á lớn nhất</li>
            <li className="mb-2">Xem trên nhiều thiết bị</li>
            <li>Trọn vẹn kho phim HBO GO mới nhất</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Chương trình ưu đãi</h3>
            <div className="flex items-center mt-2">
              <img src={zalo} alt="ZaloPay Logo" className="mr-2 w-10 h-10" />
              <p className="text-sm">
                Giảm 20% (tối đa 30.000đ) khi thanh toán qua ZaloPay với mã
                ANHTRAI. Xem chi tiết{" "}
                <a href="#" className="text-green-500">
                  tại đây
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">SPORT K+</h2>
            <span className="text-xl font-bold text-green-500">
              189.000 VND
            </span>
          </div>
          <img
            src={vipsport}
            alt="SPORT K+ Package Image"
            className="mb-4 w-full"
          />
          <button className="bg-green-500 text-white w-full py-2 rounded">
            Chọn gói SPORT K+
          </button>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li className="mb-2">Phim/Show VieON độc quyền</li>
            <li className="mb-2">Kho phim châu Á lớn nhất</li>
            <li className="mb-2">Xem trên nhiều thiết bị</li>
            <li>Giải Ngoại hạng Anh với 5 kênh K+</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Chương trình ưu đãi</h3>
            <div className="flex items-center mt-2">
              <img src={zalo} alt="ZaloPay Logo" className="mr-2 w-10 h-10" />
              <p className="text-sm">
                Giảm 20% (tối đa 30.000đ) khi thanh toán qua ZaloPay với mã
                ANHTRAI. Xem chi tiết{" "}
                <a href="#" className="text-green-500">
                  tại đây
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">ALL ACCESS</h2>
            <span className="text-xl font-bold text-green-500">229.000 đ</span>
          </div>
          <img
            src={vipall}
            alt="ALL ACCESS Package Image"
            className="mb-4 w-full"
          />
          <button className="bg-green-500 text-white w-full py-2 rounded">
            Chọn gói All Access
          </button>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li className="mb-2">Phim/Show VieON độc quyền</li>
            <li className="mb-2">Kho phim châu Á lớn nhất</li>
            <li className="mb-2">Xem trên nhiều thiết bị</li>
            <li className="mb-2">Trọn vẹn kho phim HBO GO mới nhất</li>
            <li>Giải Ngoại hạng Anh với 5 kênh K+</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Chương trình ưu đãi</h3>
            <div className="flex items-center mt-2">
              <img src={zalo} alt="ZaloPay Logo" className="mr-2 w-10 h-10" />
              <p className="text-sm">
                Giảm 20% (tối đa 30.000đ) khi thanh toán qua ZaloPay với mã
                ANHTRAI. Xem chi tiết{" "}
                <a href="#" className="text-green-500">
                  tại đây
                </a>
              </p>
            </div>
          </div>
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

export default Premium;
