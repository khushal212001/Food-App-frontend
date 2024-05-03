import { GooglePlayButton } from "react-mobile-app-button";
    
export const DownloadGoogleButton = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <div>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style bg-white text-black"}
      />
    </div>
  );
};