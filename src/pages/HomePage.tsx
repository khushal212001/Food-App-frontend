import landingImage from "../assets/landing.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { DownloadGoogleButton } from "@/components/DownloadGoogleButton";
import { DownloadAppleButton } from "@/components/DownloadAppleButton";
import { DownloadAppGalleryButton } from "@/components/DownloadAppGalleryButton";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className=" md:px-32 bg-black text-amber-400 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-amber-400">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid text-amber-400 md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <div className="flex flex-row items-center justify bg-center gap-4 py-2">
            <DownloadGoogleButton/>
            <DownloadAppleButton/>
            <DownloadAppGalleryButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
