import * as React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function News({ NewsData, buttonType, setNewsAndTipsData, setPathToNewsAndTips }) {
  return (
    <div className="News">
      {NewsData.map((data) => {
        return (
          <Card
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            sx={{ maxWidth: 500 }}
          >
            <CardMedia component="img" alt="news img" height="300" image={data.coverImg} />
            <CardContent>
              <div className="News__line"></div>
              <h3>{data.name}</h3>
              <div className="News__line"></div>
              <p>{data.text[0].split(" ").slice(0, 20).join(" ")}...</p>
            </CardContent>
            <div className="News__moreDate">
              <Link onClick={() => setNewsAndTipsData(data)} to="/NewsAndTips">
                {buttonType}
              </Link>
              <p>{data.date}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default News;
