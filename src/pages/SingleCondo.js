import React from "react";
// import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import results from "../results";

export default function SingleCondo() {
  const { project } = useParams();
  let index = results.findIndex(function (element) {
    return element.project === project;
  });
  let singleCondoObj = results[index];

  return (
    <section className="section card-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {/* <h1>{project}</h1> */}
      <h2 className="section-title">{project}</h2>
      <div className="card">
        <img
          src={
            "https://pic2.99.co/v3/HxGavpKkBATCQkmjQkjPJe?mode=fill&text=&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=8c92addbfac9effb45ff37e20dfe0cbeeabd5ccb&width=1600"
          }
          alt={""}
        ></img>
        <div className="card-info">
          <p>
            <span className="card-data">Condo Name :</span>{" "}
            {singleCondoObj.project}
          </p>
          <p>
            <span className="card-data">District :</span>{" "}
            {singleCondoObj.district}
          </p>
          <p>
            <span className="card-data">Street Name :</span>{" "}
            {singleCondoObj.street}
          </p>
          <p>
            <span className="card-data">Number Of Units :</span>{" "}
            {singleCondoObj.totalUnits}
          </p>
          <p>
            <span className="card-data">Developer Name :</span>{" "}
            {singleCondoObj.developerName}
          </p>
          <p>
            <span className="card-data">Expected TOP Year :</span>{" "}
            {singleCondoObj.expectedTOPYear}
          </p>
        </div>
      </div>
    </section>
  );
}
