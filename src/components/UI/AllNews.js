import {
  CalendarOutlined,
  CaretRightOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Image, Row } from "antd";
import Link from "next/link";

export const AllNews = ({ allnews }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "40px",
          margin: "20px 0",
        }}
      >
        # Today Highlights
      </h1>
      <Row
        gutter={{
          xs: 10,
          sm: 20,
          md: 30,
          lg: 40,
          xl: 50,
          xxl: 60,
        }}
      >
        {allnews.map((news) => (
          <Col key={news?.id} className="gutter-row" span={6}>
            <Card
              style={{}}
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  height={200}
                  width={330}
                  //   responsive
                  alt="example"
                />
              }
            >
              <Meta title={news?.title} />
              <div
                className="Line"
                style={{
                  height: "5px",
                  margin: "20px 0px",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0s",
                }}
              >
                <span>
                  <CalendarOutlined /> {news?.release_date}
                </span>
                <span>
                  <CommentOutlined />
                  {news?.comment_count}
                  Comments
                </span>
                <span>
                  <ProfileOutlined />
                  {news?.category}
                </span>
              </p>

              <p
                style={{
                  fontSize: "15px",
                  margin: "10px 0",
                }}
              >
                {news?.description.length > 100
                  ? news?.description.slice(0, 70) + "..."
                  : news?.description}
              </p>

              <Link href={`/news/${news?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "15px",
                    textAlign: "center",
                    color: "InfoText",
                    cursor: "pointer",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    letterSpacing: "3px",
                  }}
                >
                  {news?.author} <CaretRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
