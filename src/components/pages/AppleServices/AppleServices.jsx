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
        <div className="apple-products">
          <Row justify="space-around" gutter={[16, 16]}>
            {dataWebsite.Services.map((product) => {
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

export default AppleServices;
