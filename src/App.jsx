import { Menu, Dropdown, Carousel, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Data from "./data/db.json";
import logo from "./vankhoamobile.png";
import Home from "./components/home";
function App() {
  const dataWebsite = Data;

  // const element = document.querySelector("#container");
  // const moveRight = document.querySelector(".body-container");
  // const clickBtn = document.querySelector(".navbar-mobile");
  // function bodyMoveRight() {
  //   moveRight.classList.remove("transform-right");
  // }
  // function bodyMoveLeft() {
  //   moveRight.classList.remove("transform-right");
  // }

  // clickBtn.addEventListener("click", bodyMoveRight);
  // if (element.classList.contains("transform-right")) {
  //   clickBtn.addEventListener(bodyMoveLeft);
  // }

  return (
    <div id="container" className="body-container">
      <header id="header">
        <div className="header-content">
          <div className="navbar-mobile">
            <a href="#">
              <MenuOutlined />
            </a>
          </div>
          <div className="logo">
            <a
              href="https://hoaituanmobile.vn/"
              title="Hoài Tuấn Mobile - Chuyên iPhone | iPad | Apple Watch Quốc tế"
            >
              <img id="logo-image" src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar">
            {dataWebsite.menu.map((item) => {
              const menu = (
                <Menu className="menu-item-child">
                  {item.items.map((itemChild) => {
                    return (
                      <a
                        href={itemChild.linkChild}
                        title={itemChild.titleChild}
                      >
                        <img src={itemChild.imageChild} alt="#" />
                        <span>{itemChild.titleChild}</span>
                      </a>
                    );
                  })}
                </Menu>
              );

              return (
                <Dropdown overlay={menu}>
                  <a
                    className="menu-item ant-dropdown-link"
                    href={item.link}
                    title={item.title}
                  >
                    {item.title}
                  </a>
                </Dropdown>
              );
            })}
          </div>
        </div>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <Row justify="space-around" gutter={[24, 32]}>
              <Col xl={8}>
                <div className="information">
                  <h3>Về Văn Khoa Mobile</h3>
                  <span>
                    Được thành lập và phát triển vào 2022 – Văn Khoa Mobile với
                    tiêu chí coi khách hàng như người thân – Nghiêm ngặt và khắt
                    khe với từng sản phẩm của mình trong quá trình chọn lọc và
                    nhập hàng.
                  </span>
                </div>
              </Col>
              <Col xl={4}>
                <div className="policy">
                  <h3>Chính sách &amp; Hỗ trợ</h3>
                  <div className="policy-content">
                    <a href="#">Chính sách đổi trả</a>
                    <a href="#">Chính sách bảo hành</a>
                    <a href="#">Hỏi đáp mua online</a>
                    <a href="#">Phương thức thanh toán</a>
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <div className="contact">
                  <h3>Liên hệ</h3>
                  <span>Địa chỉ: K338/18 Hoàng Diệu, Đà Nẵng</span>
                  <span>Hotline: 0868814399</span>
                </div>
              </Col>
              <Col xl={6}>
                <div className="cast">
                  <h3>Phương thức thanh toán</h3>
                  <img
                    src="https://applecenter.com.vn/uploads/image/images/thanhtoan-img.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="copy-right">
            <span>Copyright © 2022 Van Khoa Mobile. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
