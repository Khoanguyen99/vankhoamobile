import { Routes, Route, Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from "antd";
import "../../../components/AppleProduct.css";
import Data from "../../../data/db.json";

function Detail_Iphone() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">Iphone 13</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

export default Detail_Iphone();
