import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MenuUpdate = () => {
  const menuData = useLoaderData();
  console.log(menuData);

  return (
    <div>
      <SectionTitle
        subHeading={"Update Menu Item Now?!!"}
        heading={"update Item"}
      ></SectionTitle>
    </div>
  );
};

export default MenuUpdate;
