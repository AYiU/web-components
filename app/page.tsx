import { SiteHeader } from "@/components/site/site-header";
import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { LoadingButton } from "@/components/button/loading-button";
import { ClientPage } from "./client-page";

export default function Home() {
  function handleClick() {
    
  }

  return (
    <>
      <SiteHeader
        siteName="Welcome"
        menu={[
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
        ]}
      />
      <Breadcrumb
        items={[
          { title: "Home", url: "/", description: "Home" },
          { title: "About", url: "/about", description: "About" },
        ]}
      />

      <ClientPage />
    </>
  );
}
