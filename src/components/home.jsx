import { Carousel, Row, Col } from "antd";
import Data from "../data/db.json";

function Home() {
  const dataWebsite = Data;
  return (
    <>
      <div className="slider">
        <div className="slider-content">
          <Carousel autoplay>
            {dataWebsite.slider.map((picture) => {
              return (
                <a href={picture.image}>
                  <img className="banner" src={picture.image} alt="" />
                </a>
              );
            })}
          </Carousel>
          ;
        </div>
      </div>
      <div className="main-content">
        <h3 className="titles">Danh mục sản phẩm</h3>
        <div className="product-category">
          <Row justify="space-around">
            {dataWebsite.products.map((product) => {
              return (
                <Col xl={8} lg={8}>
                  <div className="item-product">
                    <a href="/">
                      <img src={product.image} alt="" />
                    </a>
                  </div>
                  <h3 className="title-product">{product.title}</h3>
                </Col>
              );
            })}
          </Row>
        </div>
        <h3 className="titles">Tin công nghệ</h3>
        <div className="articles">
          <Row justify="space-around" gutter={[16, 16]}>
            {dataWebsite.articles.map((article) => {
              return (
                <Col xl={8} lg={12}>
                  <div className="item-article">
                    <a href="/">
                      <img src={article.image} alt="" />
                      <div className="article-content">
                        <h3>{article.title}</h3>
                        <span>{article.date}</span>
                      </div>
                    </a>
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

export default Home;
