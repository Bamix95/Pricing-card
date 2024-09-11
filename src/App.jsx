import { useState } from "react";
import style from "./App.module.css";
import Card from "./Components/card/card";
import ToggleBtn from "./Components/Toggle/ToggleBtn";
const anualPricing = [
  {
    title: "Basic",
    currency: "$",
    price: 199.99,
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3GB",
  },
  {
    title: "Profesional",
    currency: "$",
    price: 249.99,
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10GB",
  },
  {
    title: "Master",
    currency: "$",
    price: 399.99,
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20GB",
  },
];

const monthlyPricing = [
  {
    title: "Basic",
    currency: "$",
    price: 19.99,
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3GB",
  },
  {
    title: "Profesional",
    currency: "$",
    price: 24.99,
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10GB",
  },
  {
    title: "Master",
    currency: "$",
    price: 39.99,
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20GB",
  },
];
function App() {
  const [subscriptionOption, setSubscriptionOption] = useState({
    type: "ANUAL",
    data: anualPricing,
  });

  const handleTogglePricing = () => {
    setSubscriptionOption((prevState) => ({
      type: prevState.type == "ANUAL" ? "MONTHLY" : "ANUAL",
      data: prevState.type == "ANUAL" ? monthlyPricing : anualPricing,
    }));
  };
  return (
    <div>
      <div>
        <ToggleBtn handleClick={() => handleTogglePricing()} />
      </div>
      <div className={style.card_container}>
        {subscriptionOption.data.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            currency={data.currency}
            price={data.price}
            storage={data.storage}
            users={data.users}
            send={data.send}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
