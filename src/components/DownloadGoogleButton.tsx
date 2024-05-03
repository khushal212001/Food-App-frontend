import { GooglePlayButton } from "react-mobile-app-button";
    
export const DownloadGoogleButton = () => {
  const APKUrl = "https://play.google.com/store/games?device=windows";

  return (
    <div>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style bg-white text-black"}
        height={60} width={180}
      />
    </div>
  );
};