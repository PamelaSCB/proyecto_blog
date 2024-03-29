import React from "react";
import { useNavigate } from "react-router-dom";

const MostPopular = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4">Los Blogs Populares</div>
      {blogs?.map((item) => (
        <div className="row pb-3" 
        key={item.id}
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/blog/${item.id}`)}
        >
          <div className="col-5-align-self-center">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="most-popular-img"
            />
          </div>
          <div className="col-7 padding"> 
            <div className="text-start most-popular-font">{item.title}</div>
            <div className="text-start most-popular-font-meta">
                {item.timestamp.toDate().toLocaleDateString("es-ES")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
