
import ContentSide from "@/components/Home/ContentSide";
import SideBar from "@/components/Home/SideBar";
import { sideBarData, BreadcrumbData } from "@/data"


export default function Home() {

  return (
    <section className="w-full flex justify-between gap-8 md:gap-20 flex-grow">
      <SideBar list={sideBarData} />
      <ContentSide list={BreadcrumbData} />
      <div className="w-m">s</div>
    </section>
  );
}
