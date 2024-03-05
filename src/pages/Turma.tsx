import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

interface ApresentacaoProps {
  nome: string;
  foto: string;
  linkedin: string;
  github: string;
}

// function Apresentacao({ nome, foto, linkedin, github }: ApresentacaoProps) {
//   return (
//     <>
//       <div className="w-full bg-gray-50 flex justify-center items-center">
//         <div className="h-56 w-72 absolute flex justify-center items-center">
//           <img
//             className="object-cover h-28 w-28 rounded-full"
//             src={foto}
//             alt=""
//           />
//         </div>
//         <div
//           className="
//     h-56
//     mx-4
//     w-5/6
//     bg-orange-100
//     rounded-3xl
//     shadow-md
//     sm:w-80 sm:mx-0
//   "
//         >
//           <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5"></div>
//           <div
//             className="
//            bg-white
//             h-1/2
//             w-full
//             rounded-3xl
//             flex flex-col
//             justify-around
//             items-center
//           "
//           >
//             <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
//               <div className="flex flex-col justify-center items-center">
//                 <a href={linkedin} target="_blank">
//                   <h1 className="text-gray-500 text-xs">Linkedin</h1>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     fill="currentColor"
//                     viewBox="0 0 256 256"
//                     className="hover:bg-blue-300 rounded-full"
//                   >
//                     <path
//                       d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
//                       opacity="0.2"
//                     ></path>
//                     <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
//                   </svg>
//                 </a>
//               </div>
//               <div className="flex flex-col justify-center items-center">
//                 <a href={github}>
//                   <h1 className="text-gray-500 text-xs">Github</h1>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     fill="currentColor"
//                     viewBox="0 0 256 256"
//                   >
//                     <path
//                       d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
//                       opacity="0.2"
//                     ></path>
//                     <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="w-full h-1/2 flex flex-col justify-center items-center">
//               <h1 className="text-gray-700 font-bold">{nome}</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function Apresentacao({ nome, foto, linkedin, github }: ApresentacaoProps) {
  return (
    <>
      <div className="border border-orange-400 p-4 flex flex-col rounded-lg items-center bg-orange-100">
        <img
          src={foto}
          //src="https://cdn.playbuzz.com/cdn/913253cd-5a02-4bf2-83e1-18ff2cc7340f/c56157d5-5d8e-4826-89f9-361412275c35.jpg"
          className="w-1/2 rounded-full m-2"
        />
        <p className="text-base font-mono ">{nome}</p>
        <div className="flex gap-10">
          <a
            href={linkedin}
            target="_blank"
            className="hover:bg-blue-300 rounded-full"
          >
            <LinkedinLogo size={32} weight="duotone" />
          </a>
          <a
            href={github}
            target="_blank"
            className="hover:bg-purple-300 rounded-full"
          >
            <GithubLogo size={32} weight="duotone" />
          </a>
        </div>
      </div>
    </>
  );
}

function Turma() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-8 bg-slate-50/10">
        <h2 className="text-2xl font-bold">🎉 Nossa turma 🎉</h2>
        <h3 className="text-xl">Instrutores</h3>
        <div className="grid grid-cols-2 gap-8 max-w-[100vh]">
          <Apresentacao
            nome="Luis Guerreiro"
            foto="https://media.licdn.com/dms/image/C4D03AQFR7zLikgeQyg/profile-displayphoto-shrink_400_400/0/1641506971301?e=1715212800&v=beta&t=itGNb0-a4OyO94Wnu_IxKflNpNQIGS4S86esQd4gCnk"
            linkedin="https://www.linkedin.com/in/luis-guerreiro-lopes/"
            github=""
          />
          <Apresentacao
            nome="Geandro Araújo"
            foto="https://media.licdn.com/dms/image/D4D03AQE9VK3cOR2j3g/profile-displayphoto-shrink_400_400/0/1675420980966?e=1715212800&v=beta&t=n_CegSNSq3GHahvtck9r6V0l0Gem2lIhvkjkh8j8KfQ"
            linkedin="https://www.linkedin.com/in/geandro-ara%C3%BAjo-1b19881b4/"
            github="https://github.com/geandrol"
          />
        </div>

        <h3 className="text-xl mt-16">Participantes</h3>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8 2xl:mx-32">
          <Apresentacao
            nome="Ana Eliza Oliveira"
            foto="https://avatars.githubusercontent.com/u/151927439?v=4"
            linkedin="https://www.linkedin.com/in/anaelizaqoliveira/"
            github="https://github.com/estudosdetidaana98"
          />
          <Apresentacao
            nome="Anderson Silva"
            foto="https://avatars.githubusercontent.com/u/142745338?v=4"
            linkedin="https://www.linkedin.com/in/andersoncarlosdemoraisilva/"
            github="https://github.com/andersoncaarlos"
          />
          <Apresentacao
            nome="Carina Maleski"
            foto="https://avatars.githubusercontent.com/u/105950444?v=4"
            linkedin="https://www.linkedin.com/in/carina-maleski/"
            github="https://github.com/carina-maleski"
          />
          <Apresentacao
            nome="Daniel Lugli"
            foto="https://avatars.githubusercontent.com/u/108769683?v=4"
            linkedin="https://www.linkedin.com/in/dfilho/"
            github="https://github.com/luglifilho"
          />
          <Apresentacao
            nome="Eduardo Freitas"
            foto="https://avatars.githubusercontent.com/u/137649567?v=4"
            linkedin="https://www.linkedin.com/in/eduardo-freitas-do-nascimento-29947922b/"
            github="https://github.com/EduFreitas2"
          />

          <Apresentacao
            nome="Eloisa Marin"
            foto="https://avatars.githubusercontent.com/u/74751076?v=4"
            linkedin="https://www.linkedin.com/in/eloisamarin/"
            github="https://github.com/eloisamarin "
          />
          <Apresentacao
            nome="Fernanda Sasso"
            foto="https://media.licdn.com/dms/image/D4D03AQG89jN4LfH1wQ/profile-displayphoto-shrink_400_400/0/1706486523174?e=1715212800&v=beta&t=r5uX6WUOTt51MNzDeSt29c48KGEVHRuykRyiwWPZzUA"
            linkedin="https://www.linkedin.com/in/fernandasasso/"
            github="https://github.com/nanasasso"
          />
          <Apresentacao
            nome="Fernando Lopes"
            foto="https://media.licdn.com/dms/image/D4D03AQEIPxGeOdXZsA/profile-displayphoto-shrink_400_400/0/1701893182754?e=1715212800&v=beta&t=uwbRbsnR-2kdt3H5ei0YSfX1HUtx-etGRLU_ZCMrAwo"
            linkedin="https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/"
            github="https://github.com/plasmus777/"
          />
          <Apresentacao
            nome="Flavia Paião"
            foto="https://avatars.githubusercontent.com/u/145602496?v=4"
            linkedin="https://www.linkedin.com/in/flavia-paião"
            github="https://github.com/Flapaiao"
          />
          <Apresentacao
            nome="Giovanna Oliveira"
            foto="https://avatars.githubusercontent.com/u/150724345?v=4"
            linkedin="https://www.linkedin.com/in/giovannasoliveira58/"
            github="https://github.com/GiovannaSOliveira"
          />

          <Apresentacao
            nome="Giovanni Torelli"
            foto="https://avatars.githubusercontent.com/u/26353442?v=4"
            linkedin="https://www.linkedin.com/in/giovanni-torelli/"
            github="https://github.com/Torelli"
          />
          <Apresentacao
            nome="Guilherme Abreu"
            foto="https://avatars.githubusercontent.com/u/143297561?v=4"
            linkedin="https://www.linkedin.com/in/guilhermerubrae/"
            github="https://github.com/guilhermerubrae"
          />
          <Apresentacao
            nome="Gustavo Almeida"
            foto="https://avatars.githubusercontent.com/u/151969059?v=4"
            linkedin="https://www.linkedin.com/in/gustavokarl/"
            github="https://github.com/gustavokarl"
          />
          <Apresentacao
            nome="Isabella Albuquerque"
            foto="https://avatars.githubusercontent.com/u/151970926?v=4"
            linkedin="https://www.linkedin.com/in/isabella-albuquerqueque-/"
            github="https://github.com/Isabella-Albuquerque"
          />
          <Apresentacao
            nome="Isabelli Pereira"
            foto="https://avatars.githubusercontent.com/u/96389198?v=4"
            linkedin="https://www.linkedin.com/in/p-isabelli-6b945414b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            github="https://github.com/p-isabelli"
          />

          <Apresentacao
            nome="Jaqueline Paula"
            foto="https://avatars.githubusercontent.com/u/87137086?v=4"
            linkedin="https://www.linkedin.com/in/jaquelinepaula/"
            github="https://github.com/JaquePaula"
          />
          <Apresentacao
            nome="Jorge Felipe Silva"
            foto="https://avatars.githubusercontent.com/u/9482519?v=4"
            linkedin="https://www.linkedin.com/in/felipesiper/"
            github="https://github.com/livehass"
          />
          <Apresentacao
            nome="Lauane Gonçalves"
            foto="https://avatars.githubusercontent.com/u/126580626?v=4"
            linkedin="https://www.linkedin.com/in/lauane-goncalves/"
            github="https://github.com/lauanegcsilva"
          />
          <Apresentacao
            nome="Leonardo Marques"
            foto="https://avatars.githubusercontent.com/u/89556799?v=4"
            linkedin="https://www.linkedin.com/in/leonardo-marquesss/"
            github="https://github.com/leomarquezz"
          />
          <Apresentacao
            nome="Leonardo Duarte"
            foto="https://avatars.githubusercontent.com/u/133834707?v=4"
            linkedin="https://www.linkedin.com/in/leonardo-rodrigues-de-sousa-duarte/"
            github="https://github.com/LeoDuarte37"
          />

          <Apresentacao
            nome="Leticia Rocha"
            foto="https://avatars.githubusercontent.com/u/129013545?v=4"
            linkedin="https://www.linkedin.com/in/leticiasrocha/"
            github="https://github.com/letssrockit"
          />
          <Apresentacao
            nome="Luciana Dandara"
            foto="https://avatars.githubusercontent.com/u/100050957?v=4"
            linkedin="https://www.linkedin.com/in/lucianaramos23/"
            github="https://github.com/xluhramosx"
          />
          <Apresentacao
            nome="Luciana Rocha"
            foto="https://avatars.githubusercontent.com/u/141670452?v=4"
            linkedin="https://www.linkedin.com/in/luciana-rocha-a37459b8/"
            github="https://github.com/lucianajrocha"
          />
          <Apresentacao
            nome="Marília Tostes"
            foto="https://avatars.githubusercontent.com/u/133540781?v=4"
            linkedin="https://www.linkedin.com/in/marilia-tostes/"
            github="https://github.com/mariliatostesdev"
          />
          <Apresentacao
            nome="Marina Pereira"
            foto="https://avatars.githubusercontent.com/u/146123948?v=4"
            linkedin="https://www.linkedin.com/in/marina-alexandre-pereira/"
            github="https://github.com/marina-mmap"
          />

          <Apresentacao
            nome="Matheus Libanio"
            foto="https://avatars.githubusercontent.com/u/71234348?v=4"
            linkedin="https://www.linkedin.com/in/matheus-libanio/"
            github="https://github.com/MatheusLib"
          />
          <Apresentacao
            nome="Natália Olgado"
            foto="https://avatars.githubusercontent.com/u/151691956?v=4"
            linkedin="https://www.linkedin.com/in/nat%C3%A1lia-olgado/"
            github="https://github.com/NataliaOlgado"
          />
          <Apresentacao
            nome="Rafael Carmo"
            foto="https://avatars.githubusercontent.com/u/151798963?v=4"
            linkedin="https://www.linkedin.com/in/rpimentelcarmo/"
            github="https://github.com/Rflpmt"
          />

          <Apresentacao
            nome="Rafael Venâncio"
            foto="https://avatars.githubusercontent.com/u/131331392?v=4"
            linkedin="https://www.linkedin.com/in/venancio-rafael/"
            github="https://github.com/doncob"
          />
          <Apresentacao
            nome="Samuel Ferreira"
            foto="https://avatars.githubusercontent.com/u/151537218?v=4"
            linkedin="https://www.linkedin.com/in/samuel-ferreira-da-silva/"
            github="https://github.com/samuelferreira25"
          />
          <Apresentacao
            nome="Verônica Freitas"
            foto="https://avatars.githubusercontent.com/u/113372101?v=4"
            linkedin="https://www.linkedin.com/in/verofreitt/"
            github="https://github.com/verofreitt"
          />

          <Apresentacao
            nome="Vitória Helena"
            foto="https://avatars.githubusercontent.com/u/134935809?v=4"
            linkedin="https://www.linkedin.com/in/vitória-helena-webdeveloper55778?trk=contact-info"
            github="https://github.com/VitoriaH1611"
          />

          <Apresentacao
            nome="Wendy"
            foto="https://avatars.githubusercontent.com/u/151972765?v=4"
            linkedin=""
            github="https://github.com/WendyRose-s2"
          />

          <Apresentacao
            nome="Yuri Henrick"
            foto="https://avatars.githubusercontent.com/u/151592560?v=4"
            linkedin="https://www.linkedin.com/in/yuri-henrick-3babb51b1/"
            github="https://github.com/slickzeraa"
          />
        </div>
      </div>
    </>
  );
}

export default Turma;
