import RecomendedGames from "../components/Recomended-games-big";
import pilot from "../assets/pilot.svg";
import soldier from "../assets/csgo.svg";

const Main = () => {
  return (
    <>
      <section className="flex recomended-games">
        <RecomendedGames
          byWhom="admin"
          downloads={12506516}
          gameCategory="fighter"
          gameImage={pilot}
          gameName="Mobile Apple Planning Big Mac Redesignander Nigh HalfMacShare"
          releaseDate={new Date("2025-08-27")}
        />

        <RecomendedGames
          byWhom="admin"
          downloads={1250}
          gameCategory="action"
          gameImage={soldier}
          gameName="How To Build A Magazine Layout With CSS Grid Areas"
          releaseDate={new Date("2025-08-27")}
        />
      </section>

      <section className="exciting-categories"></section>
    </>
  );
};

export default Main;
