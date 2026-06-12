import { useState } from "react";
import "./CategoryTabs.css";

const categories = {
  Medical: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ],

  Education: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ],

  Trust: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    },
  ],

  Events: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },
  ],
};

function CategoryTabs() {
  const [activeTab, setActiveTab] =
    useState("Medical");

  return (
    <section className="category-section">
      <div className="container">

        <button className="primary-btn">
          OUR GALLERY
        </button>

        <div className="tabs-wrapper">
          {Object.keys(categories).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="media-grid">
          {categories[activeTab].map(
            (item, index) => (
              <div
                key={index}
                className="media-card"
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt=""
                  />
                ) : (
                  <iframe
                    src={item.url}
                    title={`video-${index}`}
                    allowFullScreen
                  />
                )}
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default CategoryTabs;