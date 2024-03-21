import React from "react";

const Checkout = () => {
  // Hardcoded values for demonstration
  const restaurantData = {
    id: 1,
    name: "Sample Restaurant",
    cuisines: ["Italian", "Mexican"],
    cloudinaryImageId: "sample_image_id",
    sla: { deliveryTime: 30 }, // Service Level Agreement
    avgRating: 4.2,
    costForTwo: 500,
    locality: "Sample Locality",
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "₹200 off on orders above ₹400",
    },
  };

  let ratingType;
  if (restaurantData.avgRating >= 4.0) {
    ratingType = "green";
  } else if (restaurantData.avgRating < 4.0 && restaurantData.avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }

  return (
    <div className="card" key={restaurantData.id}>
      <div className="res-img">
        {/* Replace image source with the actual image URL */}
        <img src="./sandwich.png" alt="Restaurant" />
        {restaurantData.aggregatedDiscountInfoV3?.header && (
          <span className="img-discount-info">
            {restaurantData.aggregatedDiscountInfoV3.header}{" "}
            {restaurantData.aggregatedDiscountInfoV3.subHeader.replace("₹", "")}
          </span>
        )}
      </div>

      <div className="res-name">
        <h5 className="resName">{restaurantData.name}</h5>
        <div className="resName__details">
          <p>{restaurantData.cuisines.join(", ")}</p>
          {restaurantData.avgRating && (
            <p className={"ratings " + ratingType}>
              <i className="fa fa-star"></i> {restaurantData.avgRating}
            </p>
          )}
        </div>
        <p>{restaurantData.locality}</p>
      </div>

      <div className="res-info">
        <p>{restaurantData.sla.deliveryTime} mins</p>
        <p>₹{restaurantData.costForTwo} for two</p>
      </div>
    </div>
  );
};

export default Checkout;
