// import React from 'react';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Fitness classes (limited)",
              "Personal training (additional cost)",
              "24/7 access to the gym",
              "Discounts on gym merchandise"
            ],
            "price": "$29.99/month"
          },
          {
            "id": 2,
            "name": "Silver Membership",
            "features": [
              "Full access to gym equipment",
              "Locker room access",
              "Unlimited fitness classes",
              "1 free personal training session per month",
              "Sauna and steam room access",
              "Discounts on protein supplements"
            ],
            "price": "$49.99/month"
          },
          {
            "id": 3,
            "name": "Gold Membership",
            "features": [
              "Full access to gym equipment",
              "Locker room access with sauna",
              "Unlimited fitness classes",
              "2 free personal training sessions per month",
              "Nutritional counseling",
              "Free access to group training sessions",
              "Priority booking for fitness classes"
            ],
            "price": "$79.99/month"
          }
        ]
      

    return (
        <div>
            <h2 className="text-4xl">Best Prices</h2>
            {
                priceOptions.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;