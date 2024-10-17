import React from "react";
import { Link} from "react-router-dom";
import mobifone from "../assets/LOGO_MOBIFONE_PNG.png";
import logovieon from "../assets/Logo_VieON.jpg";
import mvf250 from "../assets/combo_data_mfv250.png";
import v90 from "../assets/combo_data_v90.png";
import v180 from "../assets/combo_data_v180.png";
import imgphone from "../assets/signup_mobifone.png";

const Mobifone = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-300 text-white">
      <div className="w-full bg-[#1A1A72] py-4 flex justify-between items-center px-8">
        <Link to="/">
          <img src={logovieon} alt="VieON Logo" className="w-24 h-12" />
        </Link>
        <img src={mobifone} alt="MobiFone Logo" className="h-12" />
      </div>
      <div className="mt-8">
        <h1 className="text-center text-3xl font-bold">
          ĐĂNG KÝ GÓI COMBO DATA GIẢI TRÍ
        </h1>
        <div class="mt-5 w-full h-full rounded-lg bg-blue-600 p-3">
          <p class="text-lg">
            <span class="font-bold">VieON</span> cùng{" "}
            <span class="font-bold">MobiFone</span> ra mắt siêu COMBO DATA GIẢI
            TRÍ. Bạn yên tâm trải nghiệm các bộ <br /> phim BOM TẤN chất lượng
            siêu nét trên VieON không sợ bị gián đoạn.
          </p>
          <p class="mt-2 text-lg font-bold">Đăng ký nhanh thôi nào!</p>
        </div>
      </div>
      <div class="grid grid-cols-1 divide-y divide-x divide-none">
        {/* Combo mfv250 */}
        <div class="flex mt-8">
          <div class="bg-[#1A1A72] p-4 rounded-lg">
            <img src={mvf250} alt="VieON Promo Image" class="rounded-lg" />
            <p class="mt-4 text-lg">
              Gói combo data giải trí <span class="font-bold">MFV250</span>
            </p>
            <img
              src="https://placehold.co/100x100?text=QR+Code"
              alt="QR Code"
              class="rounded-lg"
            />
            <p class="mt-2 text-sm">Quét mã QR để đăng ký hoặc ấn vào</p>
            <button class="mt-4 bg-green-500 text-white py-2 px-4 rounded-full">
              Đăng ký ngay
            </button>
          </div>
          <div class="ml-8 text-left">
            <h2 class="text-2xl font-bold">
              Combo data giải trí
              <span class="text-green-500">NHÓM</span>
            </h2>
            <div class="flex items-center mt-4">
              <span class="bg-blue-500 text-white py-1 px-3 rounded-full">
                MFV250
              </span>
              <span class="ml-4 text-xl font-bold">250.000 đồng / 30 ngày</span>
            </div>
            <ul class="mt-4 text-lg">
              <li>
                • <span className="text-green-500 font-bold">250 GB</span> data
                lướt internet
              </li>
              <li>
                • <span className="text-green-500 font-bold">500 phút</span> nội
                mạng
              </li>
              <li>
                • <span className="text-green-500 font-bold">250 phút</span>{" "}
                ngoại mạng
              </li>
              <li>
                • <span className="text-green-500 font-bold">Miễn phí</span>{" "}
                Data truy cập VieON, Facebook, Youtube (*)
              </li>
            </ul>
            <h3 class="mt-4 text-xl font-bold">
              TẶNG GÓI GIẢI TRÍ VieON Telco 3
            </h3>
            <ul class="mt-2 text-lg">
              <li>⭐ Đặc quyền VIP</li>
              <li>⭐ Xem giải VĐQG Châu Âu</li>
              <li>⭐ Độc quyền Saudi Pro League</li>
            </ul>
            <h2 class="mt-4 text-xl">
              (*) Chỉ áp dụng cho thuê bao trưởng nhóm
            </h2>
            <h2 class="mt-4 text-xl">(Đăng nhập đồng thời 05 thiết bị)</h2>
          </div>
        </div>
        {/* Combo v90 */}
        <div className="flex mt-8 gap-8">
          <div className="ml-8 text-left">
            <h2 className="text-2xl font-bold">
              Combo data giải trí{" "}
              <span className="text-green-500">THEO THÁNG</span>
            </h2>
            <div className="flex items-center mt-4">
              <span className="bg-blue-500 text-white py-1 px-3 rounded-full">
                V90
              </span>
              <span className="ml-4 text-xl font-bold">
                90.000 đồng / 30 ngày
              </span>
            </div>
            <ul className="mt-4 text-lg">
              <li>
                • <span className="text-green-500 font-bold">1.0Gb/ngày</span>{" "}
                lướt internet
              </li>
              <li>• Miễn phí data truy cập VieON</li>
              <li>
                • Tặng gói nội dung{" "}
                <span className="text-green-500 font-bold">VieON Telco 2</span>
              </li>
            </ul>
            <h2 className="mt-4 text-xl">(Đăng nhập đồng thời 05 thiết bị)</h2>
          </div>
          <div className="bg-[#1A1A72] p-4 rounded-lg">
            <img src={v90} alt="QR Code" className="mt-4" />
            <p className="mt-4 text-lg">
              Gói combo data giải trí <span className="font-bold">V90</span>
            </p>
            <img
              src="https://placehold.co/100x100?text=QR+Code"
              alt="QR Code"
              className="rounded-lg"
            />
            <p className="mt-2 text-sm">Quét mã QR để đăng ký hoặc ấn vào</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full">
              Đăng ký ngay
            </button>
          </div>
        </div>
        {/* Combo v180 */}
        <div className="flex mt-8">
          <div className="bg-[#1A1A72] p-4 rounded-lg">
            <img src={v180} alt="VieON Promo Image" className="rounded-lg" />
            <p className="mt-4 text-lg">
              Gói combo data giải trí <span className="font-bold">MFV180</span>
            </p>
            <img
              src="https://placehold.co/100x100?text=QR+Code"
              alt="QR Code"
              className="mt-4 rounded-lg"
            />
            <p className="mt-2 text-sm">Quét mã QR để đăng ký hoặc ấn vào</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full">
              Đăng ký ngay
            </button>
          </div>
          <div className="ml-8 text-left">
            <h2 className="text-2xl font-bold">
              Combo data giải trí{" "}
              <span className="text-green-500">THEO THÁNG</span>
            </h2>
            <div className="flex items-center mt-4">
              <span className="bg-blue-500 text-white py-1 px-3 rounded-full">
                V180
              </span>
              <span className="ml-4 text-xl font-bold">
                180.000 đồng / 30 ngày
              </span>
            </div>
            <ul className="mt-4 text-lg">
              <li>
                • <span className="text-green-500 font-bold">8.0Gb/ngày</span>{" "}
                lướt internet
              </li>
              <li>
                • Miễn phí cuộc gọi{" "}
                <span className="text-green-500 font-bold">10 phút</span> nội
                mạng
              </li>
              <li>
                • Miễn phí{" "}
                <span className="text-green-500 font-bold">5 phút</span> ngoại
                mạng/ngày
              </li>
              <li>
                • <span className="text-green-500 font-bold">Miễn phí</span> tin
                nhắn nội mạng
              </li>
              <li>
                • Tặng gói nội dung{" "}
                <span className="text-green-500 font-bold">VieON Telco 2</span>
              </li>
            </ul>
            <h2 className="mt-4 text-xl">(Đăng nhập đồng thời 05 thiết bị)</h2>
          </div>
        </div>
      </div>
      {/* Các bước thực hiện */}
      <div className="w-full h-full flex mt-8 items-center justify-center">
        <div className="w-full h-full p-4 bg-[#0B2B4C] text-white flex flex-col items-center">
          <div className="flex items-center mb-6">
            <img
              src={imgphone}
              alt="Mobile phone displaying registration steps"
              class
              Name="w-72 h-auto rounded-lg shadow-lg"
            />
            <div className="ml-10">
              <h1 className="text-[40px] font-bold mb-4">HƯỚNG DẪN ĐĂNG KÝ:</h1>
              <ul className="text-[20px] list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Bước 1:</span> Chọn 1 trong 5 gói
                  phù hợp với nhu cầu sử dụng
                </li>
                <li>
                  <span className="font-bold">Bước 2:</span> Tại trang Gói cước,
                  tiếp tục chọn đăng ký nhanh
                </li>
                <li>
                  <span className="font-bold">Bước 3:</span> Nhập số điện thoại
                  cần đăng ký Gói Cước
                </li>
                <li>
                  <span className="font-bold">Bước 4:</span> MobiFone sẽ gửi mã
                  OTP xác nhận đăng ký dịch vụ (qua số 9084)
                </li>
                <li>
                  <span className="font-bold">Bước 5:</span> Bấm XÁC NHẬN THUÊ
                  BAO
                </li>
                <li>
                  <span className="font-bold">Bước 6:</span> Hoàn thành thanh
                  toán
                </li>
              </ul>
              <h2 className="text-[40px] font-bold mt-6 mb-2">LƯU Ý:</h2>
              <ul className="text-[20px] list-disc list-inside space-y-2">
                <li>
                  Trong trường hợp khách hàng Quét QR hoặc click vào liên kết bị
                  lỗi, hãy thử chuyển chế độ dữ liệu di động (3G/4G) để tiếp tục
                  đăng ký nhé!
                </li>
                <li>
                  Gói V90, V180, MFV250 chỉ áp dụng cho khách hàng đang sử dụng
                  nhà mạng MobiFone.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gradient-to-t from-green-900 to-green-600 text-white w-full h-full">
        <div className="grid grid-cols-1 divide-y">
          <div className="w-full h-[200px] p-5">
            <div>LIÊN HỆ HỖ TRỢ</div>
            <div>
              E-mail: thanhhoa159357123@gmail.com
              <br />
              Hotline: 0392055477 (miễn phí)
              <br />
              Facebook chính thức: VieON
              <br />
              Truy cập ứng dụng VieON ➝ chọn GÓP Ý ➝ tiếp tục chọn Chat với ứng
              dụng
            </div>
          </div>
          <div className="w-full h-[200px] text-[15px] flex items-center justify-between p-5">
            <div>
              Địa chỉ văn phòng
              <br />
              222 Pasteur, Phường Võ Thị Sáu, Quận 3, Thành
              <br />
              phố Hồ Chí Minh, Việt Nam.
            </div>
            <div>Footer 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobifone;
