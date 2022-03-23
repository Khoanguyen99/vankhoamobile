import { Row, Col } from "antd";
import "../../../components/AppleProduct.css";
import Data from "../../../data/db.json";

function Ipad() {
  const dataWebsite = Data;
  return (
    <>
      <img
        className="banner"
        src={
          "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/10/637824703776587243_F-C1_1200x300.png"
        }
        alt=""
      />
      <div className="main-content">
        <div>
          <h3 className="titles">Tất cả sản phẩm Phụ kiện</h3>
          <span>
            Bạn cần hỗ trợ tư vấn? Gọi ngay:
            <a href="tel:0868814399"> 0868814399</a>
          </span>
        </div>
        <div className="apple-products">
          <Row justify="space-around" gutter={[16, 16]}>
            {dataWebsite.Accessories.map((product) => {
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

export default Ipad;
