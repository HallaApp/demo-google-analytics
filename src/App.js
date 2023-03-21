import React, { useState, useEffect } from "react";
import { productList } from "./productList";
import { ProductCard } from "./components/ProductCard";
import { Header } from "./components/Header";

function App() {
  const [contextProductSubsVisible, setContextProductSubsVisible] = useState(
    {}
  );

  useEffect(() => {
    // Creating a visibility array for each context product: {'0' : {'recommendations_visible': false, 'recommendations_seen': false}}
    let contextProductVisibility = {};
    for (let product of productList) {
      contextProductVisibility[product.id] = {
        recommendations_visible: false,
        recommendations_seen: false,
      };
    }
    setContextProductSubsVisible(contextProductVisibility);
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {productList?.map((p, index) => (
          <div key={index}>
            <ProductCard
              contextProduct={p}
              setContextProductSubsVisible={setContextProductSubsVisible}
              contextProductSubsVisible={contextProductSubsVisible}
            />
          </div>
        ))}
      </div>
      <footer
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          padding: "20px",
          backgroundColor: "rgb(57, 181, 74)",
        }}
      >
        <div className="content has-text-centered" style={{ color: "white" }}>
          <p>
            {" "}
            Learn more about{" "}
            <a href="https://halla.io/">
              <strong>Hallo.io</strong>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
