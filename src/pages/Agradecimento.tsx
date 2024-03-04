import turma from "../assets/turma.jpg";
import turma2 from "../assets/presencial.jpg";

function Agradecimento() {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4 bg-orange-100/50">
      <div className="flex  gap-8 max-w-[110vh]">
        <div className="object-cover overflow-clip rounded">
          <img src={turma} />
        </div>
        <div className="object-cover overflow-clip rounded">
          <img src={turma2} />
        </div>
      </div>

      <div className="text-center text-xs ">
        <p className="mb-2">
          Superamos desafios, celebramos conquistas e construímos memórias que
          jamais esqueceremos.
        </p>
        <p className="font-bold">
          Turma 71 | Dev Fullstack Java + React | Generation Brasil{" "}
        </p>
      </div>
    </div>
  );
}

export default Agradecimento;
