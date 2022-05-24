import React, { useState } from "react";
import foodData from "../../OFF_subset17.json";
import Icon from "../../Image/icon.png";
import "../FoodItem/foodlist.css";
const tabs = [
  { id: 1, title: "FoodItem" },
  { id: 2, title: "FoodDetails" },
];
const FoodList = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="container">
      <div className="tab-parent">
        {tabs.map((item, index) => {
          return (
            <div
              className={`${selectedTab === item.id ? "Tab" : ""}`}
              key={index}
              onClick={() => setSelectedTab(item?.id)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div></div>
      {selectedTab === 1 && (
        <div>
          {foodData.map((item) => {
            return (
              <div className="food-list">
                <img src={Icon} alt="icon" />
                <p>{`${item.product_name}  (${item.generic_name})`}</p>
              </div>
            );
          })}
        </div>
      )}

      {selectedTab === 2 && (
        <div>
          {foodData.map((item) => {
            return (
              <>
                <div className="food-list">
                  <img src={Icon} alt="icon" />
                  <p>{`${item.product_name}  (${item.generic_name})`}</p>
                </div>
                <div className="details-view">
                  <table>
                    <tr>
                      <th>URL</th>
                      <td>
                        <a href={item.url} target="_blank">link</a>
                      </td>
                    </tr>
                    <tr>
                      <th>Container</th>
                      <td>{item.packaging}</td>
                    </tr>
                    <tr>
                      <th>serving_size</th>
                      <td>{item.serving_size}</td>
                    </tr>
                    <tr>
                      <th>energy_100g</th>
                      <td>{item.energy_100g}</td>
                    </tr>
                    <tr>
                      <th>trans_fat_100g</th>
                      <td>{item.trans_fat_100g}</td>
                    </tr>
                    <tr>
                      <th>fat_100g</th>
                      <td>{item.fat_100g}</td>
                    </tr>
                  </table>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FoodList;
