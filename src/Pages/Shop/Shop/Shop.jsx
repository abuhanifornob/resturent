import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";

import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

import ShopCard from "../../../components/ShopCard/ShopCard";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | SHOP</title>
      </Helmet>
      <div className="h-[560px]">
        <Cover
          img={shopImg}
          cvHeading="our Shop"
          description="WOULD YOU LIKE TO TRY A DISH ?"
        />
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <div className="text-center gap-4 font-bold hover:text-orange-500 text-xl mt-6">
              <Tab>SLAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUP</Tab>
              <Tab>DRESSERS</Tab>
              <Tab>DRINKS</Tab>
            </div>
          </TabList>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-2 mx-16">
              {saladMenu.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-2 mx-16">
              {pizzaMenu.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-2 mx-16">
              {soupMenu.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-2 mx-16">
              {dessertMenu.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-2 mx-16">
              {drinksMenu.map((item) => (
                <ShopCard key={item._id} item={item}></ShopCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
