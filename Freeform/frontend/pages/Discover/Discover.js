import React from "react";

export default function Discover() {
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [id] = useParams();

  return (
    <section className="discover">
      <h3 className="discover__title">Discover</h3>
      <div className="discover__grid">
        <div className="discover__grid--item">
          <div className="discover__content"></div>
          <Item />
        </div>
      </div>
    </section>
  );
}
