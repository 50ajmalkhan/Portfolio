import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos="slide-down">
        Resume
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7 mx-4">
        <ol className="relative border-l border-gray-700 ml-0 md:ml-9 mb-6">
          <li className="mb-10" data-aos="zoom-in">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              AWS Cloud Practitioner
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              Provides an overall understanding of cloud computing concepts,
              independent of specific technical roles. It provides a detailed
              overview of cloud concepts, AWS core services, security,
              architecture, pricing, and support.
            </p>
          </li>
          <li className="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              BackEnd Development and APIs
            </h3>
            <p className="text-base font-normal text-gray-400">
              Learned how to write backend apps with Node.js and npm. I also
              built web applications with the Express framework and some
              mini-projects.
            </p>
          </li>
          <li
            className="mb-10"
            data-aos="zoom-in"
            data-aos-offset="-15"
            data-aos-delay="1300"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Frontend Development Libraries
            </h3>
            <p className="text-base font-normal text-gray-400">
              Learn how to style your site quickly with Bootstrap. I also learned
              how to add logic to your CSS styles and extend them with Sass.
              Later, I also built a shopping cart and other applications to
              learn how to create powerful Single Page Applications (SPAs) with
              React and Redux.
            </p>
          </li>
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-0 md:ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"JavaScript"} percent={80} />
            <BarGraph name={"React"} percent={85} />
            <BarGraph name={"Node"} percent={80} />
            <BarGraph name={"TypeScript"} percent={60} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={80} />
            <BarGraph name={"AWS"} percent={40} />
          </div>

          <a
            href={require("../../assets/files/ajmalkhan.pdf")}
            download={"Ajmalkhan's Resume"}
            className="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
