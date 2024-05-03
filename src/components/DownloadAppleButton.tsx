import { AppStoreButton } from "react-mobile-app-button";
    
export const DownloadAppleButton = () => {
  const APKUrl = "https://www.apple.com/app-store/";

  return (
    <div>
      <AppStoreButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style bg-white text-black"}
        height={60} width={170}
      />

    </div>
  );
};