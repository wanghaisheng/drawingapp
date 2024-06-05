import CanvasArea from "@/components/CanvasArea";
import RightPanelData from "@/components/RightPanelData";

export default async function Page() {
  return (
    <section className=" scroll-smooth pt-28 px-2 gap-4 flex lg:flex-row flex-col overflow-hidden justify-center items-center  ">
      <CanvasArea />
      {/* <RightPanelData /> */}
    </section>
  );
}
