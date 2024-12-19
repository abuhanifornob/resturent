import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";
import menuCoverImg from "../../../assets/menu/banner3.jpg";
import Menucategory from "../../../components/Menucategory/Menucategory";
import useMenu from "../../../hooks/useMenu";
import desersImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  //"category": "offered"
  const offerdMenu = menu.filter((item) => item.category === "offered");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const soupMenu = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <div className="h-[600px]">
        <Cover
          img={menuCoverImg}
          cvHeading="our menu"
          description="WOULD YOU LIKE TO TRY A DISH ?"
        />
      </div>
      <Menucategory
        menu={offerdMenu}
        heading="TODAY'S OFFER"
        subHeading={"Don't miss"}
        buttonText={"ORDER YOUR FAVOURITE FOOD"}
      />
      <Menucategory
        menu={dessertMenu}
        img={desersImg}
        cvHeading={"DESSERTS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        buttonText={"ORDER YOUR FAVOURITE DESSERT"}
      />
      <Menucategory
        menu={pizzaMenu}
        img={pizzaImg}
        cvHeading={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        buttonText={"ORDER YOUR FAVOURITE PIZZA"}
      />
      <Menucategory
        menu={saladMenu}
        img={saladImg}
        cvHeading={"salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        buttonText={"ORDER YOUR FAVOURITE SALAD"}
      />
      <Menucategory
        menu={soupMenu}
        img={soupImg}
        cvHeading={"soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        buttonText={"ORDER YOUR FAVOURITE SOUP"}
      />
    </div>
  );
};

export default Menu;
