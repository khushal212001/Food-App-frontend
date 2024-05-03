import { AppGalleryButton } from "react-mobile-app-button";
    
export const DownloadAppGalleryButton= () => {
  const APKUrl = "https://appgallery.huawei.com/Featured";

  return (
    <div>
      <AppGalleryButton
        url={APKUrl}
        theme={"light"}
        className={"custom-style bg-white text-black"}
        height={60} width={170}
      />
    </div>
  );
};