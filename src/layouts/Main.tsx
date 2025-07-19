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
import gameFest from "../assets/game-fest.svg";
import bigger from "../assets/bigger-section.svg";
import advertisement from "../assets/advertisement04.jpg.svg";
import videoComponent from "../assets/video-container.svg";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";

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

      <section className="flex items-center justify-center mt-10 game-fest">
        <a href="#">
          <img src={gameFest} alt="gamefest" />
        </a>
      </section>

      <section
        className="flex flex-col items-center justify-around mt-[70px]"
        style={{ fontFamily: "Manrope" }}
      >
        <img className="pointer-events-none " src={bigger} alt="big" />

        <img
          className="cursor-pointer mt-[60px]"
          src={advertisement}
          alt="ad"
        />
      </section>

      <section className="trendingGamesNews bg-[#0b1829] px-[300px] pt-[100px] pb-[70px] flex items-center justify-center">
        <div className="maincontainer">
          <div className="flex flex-col items-start gap-10">
            <Rhombus catName="Trending Gaming News" />

            <div className="flex flex-col gap-6">
              <img src={videoComponent} alt="firstVideo" />

              <span className="block w-fit px-2.5 py-1 font-semibold bg-[#545c67] rounded font-[Manrope]">
                FIGHTER
              </span>

              <p className="font-[Manrope] font-bold w-[550px] text-3xl">
                Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
              </p>

              <ul className="flex items-center gap-4 font-[Inter]  font-semibold">
                <li className="flex items-center gap-1 text-base">
                  <HiOutlineUserCircle />
                  BY ADMIN
                </li>

                <li className="flex items-center gap-1 text-base">
                  <CiCalendar />
                  27 AUGUST, 2025
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
