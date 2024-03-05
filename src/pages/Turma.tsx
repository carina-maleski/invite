import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

interface ApresentacaoProps {
  nome: string;
  foto: string;
  linkedin: string;
  github: string;
}

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
            foto="https://media.licdn.com/dms/image/D4D03AQEUd8Fp7VKolg/profile-displayphoto-shrink_400_400/0/1709059331627?e=1715212800&v=beta&t=QoIq-rBuEJbm_B3C7Ziyqh3GdeKHzAFb-abPVppZQ4U"
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

          <Apresentacao nome="Wendy" foto="" linkedin="" github="" />

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
