import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";
import Swal from "sweetalert2";

const image_Hosting_API =
  "https://api.imgbb.com/1/upload?key=2a04289f8de4ecc549faa2a3787890a5";

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiiousSecret();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_Hosting_API, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data?.success) {
      const menuItem = {
        name: data.name,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        category: data.category,
        recipe: data.recipe,
      };

      const menuItemRes = await axiosSecure.post("/menu", menuItem);
      if (menuItemRes.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu Item added Successfully !!!",
          showConfirmButton: false,
          timer: 3000,
        });
      }
      reset();
    }
  };
  return (
    <div>
      <SectionTitle
        subHeading="What's new?"
        heading="add an item"
      ></SectionTitle>
      <div className="mt-16 bg-stone-100 p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl pb-2">Recipe Name*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              name="name"
              className="input input-bordered w-full text-xl p-6"
            />
          </div>
          <div className="flex gap-6 mt-6">
            <div className="w-full">
              <label className="label">
                <span className="label-text text-xl pb-2">Category*</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full text-xl"
              >
                <option disabled selected>
                  Category*
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Srinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl pb-2">Price*</span>
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-xl pb-2">Price Details*</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-32 w-full text-xl p-6"
              placeholder="Price Details"
            ></textarea>
          </div>
          <div className="w-full mt-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="">
            <button className="btn border-orange-500 bg-orange-600 text-white text-2xl mt-8 ">
              Add Item <FaUtensils className="text-3xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
