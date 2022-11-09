import React, { useState } from "react";
import Condo from "./Condo";
import Loading from "./Loading";

export default function CondoList({ condos }) {
  console.log("condos", condos);
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
  }
  if (condos.length < 1) {
    return (
      <h2 className="section-title">
        no new launches matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Latest new launch condos in Singapore</h2>
      <div className="condos-center">
        {condos.map((item, index) => {
          return <Condo key={index} {...item} />;
        })}
      </div>
    </section>
  );
}
