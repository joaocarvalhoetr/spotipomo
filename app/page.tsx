import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen">
      <div className="flex flex-col flex-grow justify-center items-center text-black w-full gap-8">
        <p className="text-white text-[64px] flex justify-center items-center">
          {" "}
          <span className="text-[#1ed760]">Spoti</span>Pomo
        </p>
        <div className="text-2xl gap-2 text-white  font-normal leading-[39.01px]">
          <p>Pomodoro timer ⏰</p>
          <p>🎧 Spotify Integration</p>
          <p>Social Network 🛜</p>
        </div>

        <div className="bg-[#1ed760] w-[149px] h-[40.49px] flex justify-center items-center text-black text-2xl font-normal  leading-[39.01px] rounded-[53px]">
          Get in!
        </div>
      </div>
    </div>
  );
}
