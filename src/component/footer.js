import React, { Component } from "react";

import bhd from "../../src/Assets/img/bhd.png";
import galaxy from "../../src/Assets/img/galaxycine.png";
import cinestar from "../../src/Assets/img/cinestar.png";
import lotte from "../../src/Assets/img/lotte.png";
import mega from "../../src/Assets/img/megags.png";
import beta from "../../src/Assets/img/bt.jpg";
import ddc from "../../src/Assets/img/dongdacinema.png";
import touchcinema from "../../src/Assets/img/TOUCH.png";
import cinemax from "../../src/Assets/img/cnx.jpg";
import starlight from "../../src/Assets/img/STARLIGHT.png";
import momo from "../../src/Assets/img/momo.png";
import zalo from "../../src/Assets/img/zalopay_icon.png";
import payoo from "../../src/Assets/img/payoo.jpg";
import vcb from "../../src/Assets/img/VCB.png";
import agri from "../../src/Assets/img/AGRIBANK.png";
import vietinbank from "../../src/Assets/img/VIETTINBANK.png";
import ivb from "../../src/Assets/img/IVB.png";
import go from "../../src/Assets/img/123go.png";
import laban from "../../src/Assets/img/laban.png";
import apple_logo from "../../src/Assets/img/apple-logo.png";
import android_logo from "../../src/Assets/img/android-logo.png";
import facebook_logo from "../../src/Assets/img/facebook-logo.png";
import zalo_logo from "../../src/Assets/img/zalo-logo.png";
import zion from "../../src/Assets/img/zion-logo.jpg";
import dathongbao from "../../src/Assets/img/dathongbao.png";

export default class Footer extends Component {
  render() {
    const lineStyle = {
      height: "1px",
      backgroundColor: "#4a4a4a"
    };

    const p1Style = {
      color: "#fff",
      fontSize: "13px",
      marginBottom: "5px",
      fontWeight: "500"
    };

    const p2Style = {
      color: "#949494",
      fontSize: "13px",
      marginBottom: "5px",
      fontWeight: "500"
    };

    const daBaoCaoStyle = {
      width: "130px",
      height: "50px"
    };

    return (
      <div className="footer bg-dark">
        <div className="footer_container container">
          <div className="row container">
            <div className="col-sm-4 col-xs-12 mt-3">
              <p className="title">L&L Phim</p>
              <div className="row">
                <div className="col-sm-6 col-xs-6 pr-0">
                  <a className="title__item" href="#">
                    FAQ
                  </a>
                  <a className="title__item" href="#">
                    Brand Guidelines
                  </a>
                </div>
                <div className="col-sm-6 col-xs-6 pl-0">
                  <a className="title__item" href="#">
                    Thoả thuận sử dụng
                  </a>
                  <a className="title__item" href="#">
                    Quy chế hoạt động
                  </a>
                  <a className="title__item" href="#">
                    Chính sách bảo mật
                  </a>
                  <a className="title__item" href="#">
                    Quyền lợi thành viên
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 mt-3">
              <p className="title">ĐỐI TÁC</p>
              <div className="col-sm-12 col-xs-12 px-0 mb-3">
                <a target="_blank" href="http://bhdstar.vn" className="mr-4">
                  <img src={bhd} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.galaxycine.vn/"
                  className="mr-4"
                >
                  <img src={galaxy} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://cinestar.com.vn/"
                  className="mr-4"
                >
                  <img src={cinestar} alt="" />
                </a>
                <a
                  target="_blank"
                  href="http://lottecinemavn.com/LCHS/index.aspx"
                  className="mr-4"
                >
                  <img src={lotte} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.megagscinemas.vn/"
                  className="mr-4"
                >
                  <img src={mega} alt="" />
                </a>
              </div>
              <div className="col-sm-12 col-xs-12 px-0 mb-3">
                <a
                  target="_blank"
                  href="https://www.betacineplex.vn/home.htm"
                  className="mr-4"
                >
                  <img src={beta} alt="" />
                </a>
                <a target="_blank" href="http://ddcinema.vn/" className="mr-4">
                  <img src={ddc} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://touchcinema.com/"
                  className="mr-4"
                >
                  <img src={touchcinema} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://cinemaxvn.com/"
                  className="mr-4"
                >
                  <img src={cinemax} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://starlight.vn/"
                  className="mr-4"
                >
                  <img src={starlight} alt="" />
                </a>
              </div>
              <div className="col-sm-12 col-xs-12 px-0 mb-3">
                <a target="_blank" href="https://momo.vn/" className="mr-4">
                  <img src={momo} alt="" />
                </a>
                <a target="_blank" href="https://zalopay.vn/" className="mr-4">
                  <img src={zalo} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.payoo.vn/"
                  className="mr-4"
                >
                  <img src={payoo} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.vietcombank.com.vn/"
                  className="mr-4"
                >
                  <img src={vcb} alt="" />
                </a>
                <a
                  target="_blank"
                  href="http://www.agribank.com.vn/"
                  className="mr-4"
                >
                  <img src={agri} alt="" />
                </a>
              </div>
              <div className="col-sm-12 col-xs-12 px-0 mb-3">
                <a
                  target="_blank"
                  href="https://www.vietinbank.vn/web/home/vn/index.html"
                  className="mr-4"
                >
                  <img src={vietinbank} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.indovinabank.com.vn/"
                  className="mr-4"
                >
                  <img src={ivb} alt="" />
                </a>
                <a target="_blank" href="https://123go.vn/" className="mr-4">
                  <img src={go} alt="" />
                </a>
                <a target="_blank" href="https://laban.vn/" className="mr-4">
                  <img src={laban} alt="" />
                </a>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 mt-3">
              <div className="row justify-content-around">
                <div className="col-xs-6 mr-4 text-center">
                  <p className="title">MOBILE APP</p>
                  <a
                    target="_blank"
                    href="https://apps.apple.com/vn/app/123phim-gioi-phim-tren-au/id615186197"
                    className="mr-2"
                  >
                    <img src={apple_logo} alt="" />
                  </a>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    <img src={android_logo} alt="" />
                  </a>
                </div>

                <div className="col-xs-6 ml-4 text-center">
                  <p className="title">SOCIAL</p>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/123phim/"
                    className="mr-2"
                  >
                    <img src={facebook_logo} alt="" />
                  </a>
                  <a target="_blank" href="https://zalo.me/123phim">
                    <img src={zalo_logo} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="line mt-4 mb-3 bg-dark"></div>

          <div className="row">
            <div className="col-sm-9 col-xs-12">
              <p className="text-white">L&L – CyberSoft</p>
              <p className="text-secondary">
                Địa chỉ: 123 Võ Văn Tần, P.2, Q.3, TP.HCM
              </p>
              <p className="mb-4 text-secondary">
                Mã số thuế: 12345678
              </p>
            </div>

            <div className="col-sm-2 col-xs-12 text-right">
              <img className="w-130 h-50" src={dathongbao} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
