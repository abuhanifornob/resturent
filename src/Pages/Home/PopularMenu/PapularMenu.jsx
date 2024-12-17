import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenuCard from "../../../components/PopularMenuCard/PopularMenuCard";

const PapularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div className="my-10">
      <section className="my-10">
        <SectionTitle
          heading={"From our menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <PopularMenuCard key={item._id} item={item}></PopularMenuCard>
        ))}
      </section>
    </div>
  );
};

export default PapularMenu;
