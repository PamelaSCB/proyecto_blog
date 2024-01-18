import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
  return (
    <div>
      <div className="tags">
      <div className="blog-heading text-start pt-3 py-2 mb-4">Etiquetas</div>
        {tags?.map((tag, index) => (
          <p className="tag" key={index}>
            <Link
              to={`/tag/${tag}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {tag}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;