import React from "react";
import { Link } from "react-router-dom";
export default function Condo(props) {
  return (
    <article className="condo">
      <div className="img-container">
        <img
          src={
            "https://pic2.99.co/v3/HxGavpKkBATCQkmjQkjPJe?mode=fill&text=&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=8c92addbfac9effb45ff37e20dfe0cbeeabd5ccb&width=1600"
          }
          alt={""}
        />
      </div>
      <div className="condo-footer">
        <h3>{props.project}</h3>
        <h4>
          District {props.district}, {props.street}
        </h4>
        <p>TOP Year: {props.expectedTOPYear}</p>
        <Link
          to={`/condo/${props.project}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
}
