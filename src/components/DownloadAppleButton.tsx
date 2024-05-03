import { AppStoreButton } from "react-mobile-app-button";
    
export const DownloadAppleButton = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
    <div>
      <AppStoreButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style bg-white text-black"}
      />
    </div>
  );
};