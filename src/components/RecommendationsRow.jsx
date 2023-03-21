import React, { useState, useEffect } from "react";

// product rec can be added twice upon rerending of rec component

export const RecommendationsRow = ({ contextProduct }) => {
  const [recAdded, setRecAdded] = useState({});

  useEffect(() => {
    let recAddedCopy = {};
    for (let rec of contextProduct.recs) {
      recAddedCopy[rec.id] = false;
    }

    setRecAdded(recAddedCopy);
  }, []);

  const handleAddRecommendationsClick = (rec) => {
    let recAddedCopy = { ...recAdded };
    recAddedCopy[rec.id] = !recAdded[rec.id];
    createRecSelectEvent(rec);
    setRecAdded(recAddedCopy);
  };

  const createRecSelectEvent = (rec) => {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: "select_item",
      ecommerce: {
        item_list_id: "related_products",
        item_list_name: "Related products",
        context_item_id: `${contextProduct.id}`,
        items: [
          {
            item_id: rec.id,
            item_name: rec.name,
            item_list_id: "related_products",
            item_list_name: "Related Products",
            quantity: 1,
          },
        ],
      },
    });
  };

  return (
    <div>
      {contextProduct?.recs.map((rec) => (
        <article key={rec.id} className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                src={`${process.env.PUBLIC_URL}/images/product${rec.id}.jpg`}
                alt={rec.name}
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{rec.name}</strong>
                <br />
              </p>
            </div>
          </div>
          <div className="media-right">
            {!recAdded[rec.id] && (
              <button
                className="button"
                onClick={() => handleAddRecommendationsClick(rec)}
              >
                <span className="icon is-small">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span>Confirm</span>
              </button>
            )}
            {recAdded[rec.id] && (
              <button
                className="button disabled"
                style={{
                  backgroundColor: "rgb(57, 181, 74)",
                  color: "white",
                  border: "2px solid white",
                }}
              >
                <span className="icon is-small">
                  <i className="fas fa-check"></i>
                </span>
                <span>Confirmed Substitute</span>
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};
