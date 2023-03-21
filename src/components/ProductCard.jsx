import React from "react";
import { Dropdown } from "./Dropdown";
import { RecommendationsRow } from "./RecommendationsRow";

export const ProductCard = ({
  contextProduct,
  setContextProductSubsVisible,
  contextProductSubsVisible,
}) => {
  return (
    <div className="card" style={{ marginBottom: "12px" }}>
      <header className="card-header" style={{ height: "64px" }}>
        <div className="image is-64x64">
          <img
            src={`${process.env.PUBLIC_URL}/images/product${contextProduct.id}.jpg`}
            alt={contextProduct.name}
          />
        </div>
        <div className="card-header-title">
          {contextProduct.name}
          <span style={{ width: "100%" }} />
          <Dropdown
            setContextProductSubsVisible={setContextProductSubsVisible}
            contextProductSubsVisible={contextProductSubsVisible}
            contextProductId={contextProduct.id}
            contextProduct={contextProduct}
          />
        </div>
      </header>
      {contextProductSubsVisible[contextProduct.id]?.visible && (
        <>
          <div className="card-content">
            <div className="content">
              <RecommendationsRow contextProduct={contextProduct} />
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">Show More Recs</div>
          </footer>
        </>
      )}
    </div>
  );
};
