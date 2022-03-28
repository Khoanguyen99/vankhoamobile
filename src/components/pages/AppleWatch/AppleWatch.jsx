import { Routes, Route, Link } from "react-router-dom";
import { Row, Col } from "antd";
import "../../../components/AppleProduct.css";
import Data from "../../../data/db.json";

function AppleWatch() {
  const dataWebsite = Data;
  return (
    <>
      <img
        className="banner"
        src={
          "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/13/637828103186578895_F-C1_1200x300.png"
        }
        alt=""
      />
      <div className="main-content">
        <div>
          <h3 className="titles">Tất cả sản phẩm Apple Watch</h3>
          <span>
            Bạn cần hỗ trợ tư vấn? Gọi ngay:
            <a href="tel:0868814399"> 0868814399</a>
          </span>
        </div>
        <div className="products">
          <Row justify="space-around">
            {dataWebsite.AppleWatch.map((product) => {
              return (
                <Col className="products-container" xl={6} lg={8}>
                  <div className="apple-product">
                    <Link className="image-iphone" to="/">
                      <img src={product.image} alt="" />
                    </Link>
                    <h3 className="name-product">{product.title}</h3>
                    <p className="price-product">{product.price}</p>
                    <div className="quick-action">
                      <Link className="buy-now" type="primary" to="/">
                        MUA NGAY
                      </Link>
                      <Link className="compare" type="primary" to="/">
                        SO SÁNH
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default AppleWatch;
