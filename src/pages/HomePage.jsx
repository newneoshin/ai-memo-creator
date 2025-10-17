import Introduction from "../features/home/components/Introduction";
import SquareButton from "../shared/components/SquareButton";
import bgVideo from "../assets/background.mp4";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <Introduction />
      </div>

      <div className="fixed bottom-8 right-8 z-20">
        <SquareButton text={"샤이아 라보프처럼 되기"} />
      </div>
    </div>
  );
};

export default HomePage;
