import { FaCircleInfo } from "react-icons/fa6";
import BookModal from "../Components/BookModal/BookModal";
import { useParams } from "react-router-dom";
import { useGetSingleBikeInfoQuery } from "../redux/features/bike/bikesApi";
import Loading from "../utils/Loading";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import HelmetElement from "../utils/HelmetElement";
import FramerContainer from "../Components/layouts/FramerContainer";

const BikeDetails = () => {
  const { bikeID } = useParams();

  const { data: bike, isLoading } = useGetSingleBikeInfoQuery(bikeID);

  if (isLoading) {
    return (
      <div className="min-h-[95vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <FramerContainer>
      <div className="space-y-5 my-5 ">
        <HelmetElement text={bike.data.name} />
        <div className="flex justify-center items-center flex-col md:flex-row gap-5">
          <PhotoProvider>
            <PhotoView src={bike.data.image}>
              <img
                src={bike.data.image}
                className="w-96 h-96 object-contain lg:w-[400px] lg:h-[400px]"
              />
            </PhotoView>
          </PhotoProvider>

          <div className="space-y-2">
            <div>
              <h1 className="text-2xl font-bold">{bike.data.name}</h1>
              <p className="text-xl">{bike.data.pricePerHour}TK Per Hour</p>
            </div>
            <BookModal bikeID={bike.data._id} />
          </div>
        </div>

        <div>
          <h1 className="flex items-center gap-2 font-bold mb-2">
            <FaCircleInfo /> Details
          </h1>
          <hr />
          <div className="mt-2 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h1 className="text-2xl font-bold">Brand</h1>
              <p className="text-xl">{bike.data.brand}</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold">Model</h1>
              <p className="text-xl">{bike.data.model}</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold">CC</h1>
              <p className="text-xl">{bike.data.cc}cc</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold">Year</h1>
              <p className="text-xl">{bike.data.year}</p>
            </div>
            <hr className="col-span-1 md:col-span-2 lg:col-span-4" />

            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <h1 className="text-2xl font-bold">Description</h1>
              <p className="text-xl">{bike.data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </FramerContainer>
  );
};
export default BikeDetails;
