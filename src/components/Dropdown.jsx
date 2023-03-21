import React, { useState } from "react";

export const Dropdown = ({
  setContextProductSubsVisible,
  contextProductSubsVisible,
  contextProduct,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const contextProductId = contextProduct.id;

  const handleOpenRecommendationsClick = () => {
    let contextProductSubsVisibleCopy = { ...contextProductSubsVisible };
    contextProductSubsVisibleCopy[contextProductId] = {
      visible: !contextProductSubsVisible[contextProductId].visible,
      seen: true,
    };
    if (!contextProductSubsVisible[contextProductId].seen) {
      let unseenProductsFormatted = contextProduct.recs.map(
        (p) =>
          (p = {
            item_id: p.id,
            item_name: p.name,
            item_list_id: "related_products",
            item_list_name: "Related Products",
            quantity: 1,
          })
      );
      window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: "view_item_list",
        ecommerce: {
          item_list_id: "related_products",
          item_list_name: "Related products",
          context_item_id: `${contextProduct.id}`,
          items: unseenProductsFormatted,
        },
      });
    }
    setContextProductSubsVisible(contextProductSubsVisibleCopy);
    setDropdownOpen(false);
  };
  return (
    <div className="dropdown is-right is-active">
      <div className="dropdown-trigger">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Add Substitute</span>
        </button>
      </div>
      {dropdownOpen && (
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div
              className="dropdown-item"
              onClick={handleOpenRecommendationsClick}
            >
              {contextProductSubsVisible[contextProductId].visible
                ? "Hide Options"
                : "See Options"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
