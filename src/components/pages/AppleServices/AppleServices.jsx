import { Routes, Route, Link } from "react-router-dom";
import { Row, Col } from "antd";
import "../../../components/AppleProduct.css";
import Data from "../../../data/db.json";

function AppleServices() {
  const dataWebsite = Data;
  return (
    <>
      <div className="main-content">
        <div>
          <h3 className="titles">Tất cả dịch vụ</h3>
          <span>
            Bạn cần hỗ trợ tư vấn? Gọi ngay:
            <a href="tel:0868814399"> 0868814399</a>
          </span>
        </div>
        <div className="products">
          <Row justify="space-around">
            {dataWebsite.Services.map((product) => {
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

export default AppleServices;
