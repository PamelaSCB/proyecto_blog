import { excerpt } from "../utility/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BlogSection = ({ blogs, user, id, handleDelete }) => {
  
  const userId = user?.uid;

  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Blogs del día</div>
      {blogs?.map((item) => (
        <div className="row pb-4" key={item.id}>
          <div className="col md-5">
            <div className="hover-blogs-img">
              <div className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
              </div>
            </div>
          </div>
          <div className="col md-7">
            <div className="text-start">
              <h6 className="category catg-color">{item.category}</h6>
              <span className="title py-2">{item.title}</span>
              <span className="meta-info">
                <p className="author">{item.author}</p>-&nbsp;
                {item.timestamp.toDate().toLocaleDateString("es-ES")}
              </span>
            </div>
            <div className="short-description text-start">
              {excerpt(item.description, 120)}
            </div>
            <Link to={`/detail/${item.id}`}>
              <button className=" btn btn-read">Leer mas</button>
            </Link>

            {user && user.uid === userId && (
              <div style={{ float: "right" }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="fa-trash"
                  style={{ margin: "15px", cursor: "pointer" }}
                  size="2x"
                  onClick={() => handleDelete(item.id)}
                />
                <Link to={`/update/${id}`}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                  className="fa-edit"
                    style={{ margin: "15px", cursor: "pointer" }}
                    size="2x"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
