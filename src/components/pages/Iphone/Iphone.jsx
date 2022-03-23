import { Row, Col } from "antd";
import "../../../components/AppleProduct.css";
import Data from "../../../data/db.json";

function Iphone() {
  const dataWebsite = Data;
  return (
    <>
      <img
        className="banner"
        src={
          "https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/10/637825077572352079_F-H5_1200x200%20(4).png"
        }
        alt=""
      />
      <div className="main-content">
        <div>
          <h3 className="titles">Tất cả sản phẩm iPhone</h3>
          <span>
            Bạn cần hỗ trợ tư vấn? Gọi ngay:
            <a href="tel:0868814399"> 0868814399</a>
          </span>
        </div>
        <div className="apple-products">
          <h3 className="line-product">&#10148; iPhone 13 Series</h3>
          <Row justify="space-around" gutter={[16, 16]}>
            {dataWebsite.iPhone.iPhone13Series.map((product) => {
              return (
                <Col xl={6} lg={8}>
                  <div className="apple-product">
                    <a href="/">
                      <img src={product.image} alt="" />
                      <h3 className="name-product">{product.title}</h3>
                    </a>
                    <h3 className="price-product">{product.price}</h3>
                    <div className="quick-action">
                      <a href="/">
                        <div className="quick-content">
                          <h3>MUA NGAY</h3>
                          <h4>SO SÁNH</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <h3 className="line-product">&#10148; iPhone 12 Series</h3>
          <Row justify="space-around" gutter={[16, 16]}>
            {dataWebsite.iPhone.iPhone12Series.map((product) => {
              return (
                <Col xl={6} lg={8}>
                  <div className="apple-product">
                    <a href="/">
                      <img src={product.image} alt="" />
                      <h3 className="name-product">{product.title}</h3>
                    </a>
                    <h3 className="price-product">{product.price}</h3>
                    <div className="quick-action">
                      <a href="/">
                        <div className="quick-content">
                          <h3>MUA NGAY</h3>
                          <h4>SO SÁNH</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <h3 className="line-product">&#10148; iPhone 11 Series</h3>
          <Row justify="space-around" gutter={[16, 16]}>
            {dataWebsite.iPhone.iPhone11Series.map((product) => {
              return (
                <Col xl={6} lg={8}>
                  <div className="apple-product">
                    <a href="/">
                      <img src={product.image} alt="" />
                      <h3 className="name-product">{product.title}</h3>
                    </a>
                    <h3 className="price-product">{product.price}</h3>
                    <div className="quick-action">
                      <a href="/">
                        <div className="quick-content">
                          <h3>MUA NGAY</h3>
                          <h4>SO SÁNH</h4>
                        </div>
                      </a>
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

export default Iphone;
