import "./App.css";
import Logo from "./assets/logo.webp";
function App() {
  return (
    <main className="bg-black w-full h-full font-source pb-4">
      <div className="h-12 w-12 rounded-full bg-gray-500 mx-4 my-2">
        <img className="h-12 w-12 rounded-full object-cover" src={Logo} />
      </div>
      <div aria-label="content" className="mx-auto w-1/2 max-w-[500px]">
        <div className="flex flex-row gap-4">
          <div className="h-28 w-28 rounded-full bg-gray-500">
            <img
              className="h-28 w-28 rounded-full object-cover grayscale hover:grayscale-0"
              src={Logo}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="font-semibold text-xl">
              Alfred Dann Vincent Carro
            </div>
            <div className="text-sm">Software Engineer</div>
            <div className="text-xs">Manila, Ph</div>
          </div>
        </div>
        <div className="mt-8">
          <div>
            Hi, I am Alfred Carro. I build apps from idea to production for
            startups and corporate projects. Frontend focused development with 5
            years experience in React. I spearheaded projects that produce
            exciting experience.
          </div>
        </div>

        <div className="mt-8">
          <ul className="list-none">
            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400  mb-2">
                <p>2023 - Present</p>
              </div>
              <div className="col-span-3 text-sm">
                <a
                  className="hover:underline"
                  target="__blank"
                  href="https://kolex.io/"
                >
                  Frontend Engineer, Admin Portal CMS
                </a>
                <p className="text-gray-400 mb-2">
                  Spearheading development and migrating the Admin platform from
                  php-laravel to React echo-system. Collaborated closely with
                  the Product Lead, to have the latest features and UI for the
                  CMS needed in the app.
                </p>
                <p>React | TailwindCSS | React Query | Zod | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400  mb-2">
                <p>2023 - 2024</p>
              </div>
              <div className="col-span-3 text-sm">
                <a
                  className="hover:underline"
                  target="__blank"
                  href="https://kolex.gg/"
                >
                  Frontend Engineer, Kolex.gg (Formerly known as Epics.gg){" "}
                </a>
                <p className="text-gray-400 mb-2">
                  Worked along 5 engineers, to rewrite the codebase to use
                  latest tech for react, adding feature and refactoring old ones
                  to create faster Web and Mobile aplication.
                </p>
                <p>
                  React | Zustand | TailwindCSS | React Query | Web3 | Immutable
                  | AWS
                </p>
              </div>
            </li>
            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400  mb-2">
                <p>2022 - 2023</p>
              </div>
              <div className="col-span-3 text-sm">
                <a
                  className="hover:underline"
                  target="__blank"
                  href="https://nft.greenparksports.com/"
                >
                  Frontend Engineer, Greenpark
                </a>
                <p className="text-gray-400 mb-2">
                  Developed the App from wireframes to Application, creating new
                  features for trading and market using cutting edge technology
                  of NFT for its collectible features.
                </p>
                <p>React | Zustand | swr | SCSS | Immutable| Web3 | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400  mb-2">
                <p>2021 - 2023</p>
              </div>
              <div className="col-span-3 text-sm">
                <a
                  className="hover:underline"
                  target="__blank"
                  href="https://kolectiv.gg/"
                >
                  Frontend Engineer, Kolectiv
                </a>
                <p className="text-gray-400 mb-2">
                  Part of the core team that developed an app for collectors to
                  trade and sell their awesome cards to the market.
                </p>
                <p>React | Zustand | swr | SCSS | Immutable| Web3 | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2021 - 2023</p>
              </div>
              <div className="col-span-3 text-sm">
                <a
                  className="hover:underline"
                  target="__blank"
                  href="https://kolex.gg/"
                >
                  Frontend Engineer, Epics
                </a>
                <p className="text-gray-400 mb-2">
                  Contributed with the team on the existing app to build newer
                  features for the app, having legacy code base and refactoring
                  to support newer and faster approach.
                </p>
                <p>React | Zustand | swr | SCSS | Immutable| Web3 | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2020 - 2021</p>
              </div>
              <div className="col-span-3 text-sm">
                <a>Frontend Engineer, Bindle</a>
                <p className="text-gray-400 mb-2">
                  Played a pivotal role in the development process by
                  implementing crucial features for the mobile app, working
                  closely with the Dev and Product Teams to articulate feature
                  requirements. Additionally, I spearheaded the creation of a
                  user-friendly Dev Portal empowering clients to establish their
                  institutions.
                </p>
                <p>React | Context | SCSS | Ionic React | Web3 | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2020 - 2021</p>
              </div>
              <div className="col-span-3 text-sm">
                <a>Frontend Engineer, S!ng</a>
                <p className="text-gray-400 mb-2">
                  Contributed to the team of 3 by implementing a responsive user
                  interface tailored for mobile platforms, translating feature
                  ideas into functional app functionalities, collaborating with
                  the development team to enhance user experience, and creating
                  a comprehensive responsive layout guide for app design
                  guidelines.
                </p>
                <p>React | Context | SCSS | Ionic React | Web3 | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2019 - 2020</p>
              </div>
              <div className="col-span-3 text-sm">
                <a>Frontend Engineer, Abaxx Exchange</a>
                <p className="text-gray-400 mb-2">
                  Part take of the development as part of the core team in
                  building the web app, for stock market and trading. Overseeing
                  the implementation of the public website and web application
                  from conceptualization to deployment, assessing UX and UI
                  designs for technical feasibility, collaborating with the
                  development team from product design to user interface, and
                  working closely with product team members to implement new
                  feature developments.
                </p>
                <p>React | Redux | SCSS | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2019 - 2020</p>
              </div>
              <div className="col-span-3 text-sm">
                <a>Frontend Engineer, Prime Revenue</a>
                <p className="text-gray-400 mb-2">
                  Challenged myself to take on the project along with a huge
                  team creating new experience for development phase, for
                  finance application creating seamless transaction for users
                </p>
                <p>Vue | Vuex | SCSS | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2018 - 2019</p>
              </div>
              <div className="col-span-3 text-sm">
                <a>Backend Engineer, Mr. Butler</a>
                <p className="text-gray-400 mb-2">
                  Worked with the Backend Team to generate critical data
                  essential for meeting the Front End’s requirements. This
                  project underwent a significant overhaul from its previous
                  iteration, wherein we integrated latest technology to craft a
                  revamped and swifter backend service.
                </p>
                <p>Nodejs | KOA | Docker | AWS</p>
              </div>
            </li>

            <li className="grid grid-cols-4 gap-6 mb-6">
              <div className="col-span-1 text-sm text-nowrap text-gray-400 mb-2">
                <p>2018 - 2019</p>
              </div>
              <div className="col-span-3 text-sm">
                <a>Frontend Engineer, Operem</a>
                <p className="text-gray-400 mb-2">
                  Created an echo system to allow the app to have a translation
                  supporting i18n, supporting blockchain technology features to
                  allow the app to move securing intelectual property data.
                </p>
                <p>Angular | SCSS | Blockchain</p>
              </div>
            </li>
          </ul>

          <div className="grid grid-cols-4 gap-6 mb-6">
            <span className="col-span-1 ">Linkedin: </span>
            <a
              className="col-span-3  text-gray-400 hover:underline text-sm"
              target="__blank"
              href="https://www.linkedin.com/in/alfredcarro/"
            >
              Alfred Carro
            </a>
          </div>
          <div className="grid grid-cols-4 gap-6 mb-6">
            <span className="col-span-1 ">Email: </span>
            <a className="italic text-gray-400 text-sm col-span-3">
              alfreddannvincentfcarro@gmail.com | advfcarro@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
