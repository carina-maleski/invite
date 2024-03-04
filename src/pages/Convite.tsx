import convite from "../assets/convite.png";

function Convite() {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4 bg-orange-200/50">
      <img src={convite} className="px-16 max-w-4xl" />
      <div className="text-center">
        <p>Zoom 4600987405 / Horário 16:00 às 17:30</p>
        <p>Clique no botão abaixo para entrar na sala</p>
      </div>

      <a href="https://generationinitiative.zoom.us/my/geandro" target="_blank">
        <button className="bg-orange-200 py-4 px-8 rounded-full font-semibold hover:bg-orange-400">
          Entrar
        </button>
      </a>
    </div>
  );
}

export default Convite;
