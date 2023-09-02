import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";

export default function About() {
  const getDate = () => {
    var dob = new Date("11/19/1997");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos="slide-down">
        About Me
      </div>
      <div className="flex flex-col md:flex-row gap-6 mx-4 md:ml-8">
        <div className="flex-auto">
          <h3 className="text-3xl font-medium" data-aos="fade-left">
            I'm <span className="text-yellow-600">Muhammad Ajmal Khan,</span> a Web
            Developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos="fade-left"
          >
            I love playing music, reading comics, and playing games. I am {getDate()}{" "}
            years old. I love exploring new technologies.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos="fade-right"
          >
            I am currently looking for jobs. I am also a discord bot developer.
            I worked on ReactJs, NextJs, TypeScript, Node js, Mysql, Mongodb, AWS, and many more. I am
            also looking to collaborate on open-source projects.
          </p>
        </div>

        <div
          className="relative flex-auto w-32 sm:w-64 sm:rounded-lg pl-4 mt-5 md:mt-0"
          data-aos="slide-left"
        >
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl hover:-translate-y-1.5 duration-350 hover:duration-350 hover:bg-blue-800 hover:scale-1023 focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/ajmalkhan.pdf")}
              download="Ajmalkhan'sResume.pdf"
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
