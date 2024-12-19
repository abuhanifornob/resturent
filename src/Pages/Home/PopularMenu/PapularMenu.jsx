import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenuCard from "../../../components/PopularMenuCard/PopularMenuCard";
import useMenu from "../../../hooks/useMenu";

const PapularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div className="my-20">
      <section className="my-10">
        <SectionTitle
          heading={"From our menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
      </section>
      <section className="grid md:grid-cols-2 gap-6">
        {popularMenu.map((item) => (
          <PopularMenuCard key={item._id} item={item}></PopularMenuCard>
        ))}
      </section>
      <div className="flex items-center justify-center mt-8">
        <button className="btn btn-outline border-0 border-b-4 uppercase mt-5 ">
          view Full menu
        </button>
      </div>
    </div>
  );
};

export default PapularMenu;
