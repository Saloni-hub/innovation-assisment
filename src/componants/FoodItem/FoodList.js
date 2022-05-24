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
  const [detailsFood, setDetailsFood] = useState({
    show:false,
    product_name: "",
    generic_name: "",
    URL: "",
    Container: "",
    serving_size: "",
    energy_100g: "",
    trans_fat_100g: "",
    fat_100g: "",
  });

  return (
    <div className="container">
      <div className="tab-parent">
        {tabs.map((item, index) => {
          return (
            <div
              className={`${selectedTab === item.id ? "Tab" : ""}`}
              key={index}
              onClick={() => {
                setSelectedTab(item?.id);
                setDetailsFood({show:false});
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      {selectedTab === 1 && (
        <div>
          {foodData.map((item) => {
            return (
              <div className="food-list">
                <img src={Icon} alt="icon" />
                <p
                  onClick={() => {
                    setDetailsFood({
                      show:true,
                      product_name: item.product_name,
                      generic_name: item.generic_name,
                      URL: item.url,
                      Container: item.packaging,
                      serving_size: item.serving_size,
                      energy_100g: item.energy_100g,
                      trans_fat_100g: item.trans_fat_100g,
                      fat_100g: item.fat_100g,
                    });
                    if(detailsFood.show){
                      setSelectedTab(2);
                    } 
                  }}
                >{`${item.product_name}  (${item.generic_name})`}</p>
              </div>
            );
          })}
        </div>
      )}
     {
       detailsFood.show ? (
        <div>
        <div className="food-list">
          <img src={Icon} alt="icon" />
          <p>{`${detailsFood.product_name}  (${detailsFood.generic_name})`}</p>
        </div>
        <div className="details-view">
          <table>
            <tr>
              <th>URL</th>
              <td>
                <a href={detailsFood.URL} target="_blank">
                  link
                </a>
              </td>
            </tr>
            <tr>
              <th>Container</th>
              <td>{detailsFood.packaging}</td>
            </tr>
            <tr>
              <th>serving_size</th>
              <td>{detailsFood.serving_size}</td>
            </tr>
            <tr>
              <th>energy_100g</th>
              <td>{detailsFood.energy_100g}</td>
            </tr>
            <tr>
              <th>trans_fat_100g</th>
              <td>{detailsFood.trans_fat_100g}</td>
            </tr>
            <tr>
              <th>fat_100g</th>
              <td>{detailsFood.fat_100g}</td>
            </tr>
          </table>
        </div>
      </div>
       ): <h1 className="foodDetailsNot">Food details Not Found.</h1>
     }

    </div>
  );
};

export default FoodList;
