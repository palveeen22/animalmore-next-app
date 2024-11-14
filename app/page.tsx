import HeaderBar from "@/components/HeaderBar";
import ContentSide from "@/components/Home/ContentSide";
import ImageContentSide from "@/components/Home/ImageContentSide";
import SideBar from "@/components/Home/SideBar";
import { sideBarData, BreadcrumbData, headerBarData } from "@/data"


export default function Home() {

  return (
    <section className="flex flex-col justify-between gap-8 w-full h-full">
      <section className="w-full flex-col">
      <HeaderBar items={headerBarData} />
      </section>
      <section className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-20 flex-grow">
        <SideBar list={sideBarData} />
        <ContentSide list={BreadcrumbData} />
        <ImageContentSide />
      </section>
    </section>
  );
}
