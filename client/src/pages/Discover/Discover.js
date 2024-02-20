import React from "react";

export default function Discover() {
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [id] = useParams();

  return (
    <section className="discover">
      <article className="dis">
        <div className="dis__head">
          <h2>A short heading</h2>
        </div>
        <img src="balloons.jpg" alt="Hot air balloons" />
        <div className="dis__content">
          <p>
            {" "}
            The idea of reaching the North Pole by means of balloons appears to
            have been entertained many years ago.{" "}
          </p>
        </div>
        <button>Buy</button>
      </article>
    </section>
  );
}
