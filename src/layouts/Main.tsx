import RecomendedGames from "../components/Recomended-games-big";
import pilot from "../assets/pilot.svg";
import soldier from "../assets/csgo.svg";
import { Rhombus } from "../components/Rhombus";
import Category from "../components/Category";
import action from "../assets/g_categories_img01.png.svg";
import gaming from "../assets/g_categories_img02.png.svg";
import racing from "../assets/g_categories_img03.png.svg";
import animation from "../assets/g_categories_img04.png.svg";
import fighter from "../assets/g_categories_img05.png.svg";
import story from "../assets/g_categories_img06.png.svg";

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

      <section className="exciting-categories mt-[70px] flex justify-around ">
        <div className="flex flex-col gap-10 ">
          <Rhombus catName="Exciting Categories" />

          <ul className="flex items-center gap-11">
            <Category categoryImage={action} categoryName="action" />

            <Category categoryImage={gaming} categoryName="gaming" />

            <Category categoryImage={racing} categoryName="racing" />

            <Category categoryImage={animation} categoryName="animation" />

            <Category categoryImage={fighter} categoryName="fighter" />

            <Category categoryImage={story} categoryName="story" />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
