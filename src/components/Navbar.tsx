function Navbar() {
  return (
    <>
      <div className="sticky top-0 flex w-full items-center justify-around bg-white p-2">
        <h1 className="text-xl">
          Formatura da <strong>Grande Família 71</strong> 🎓
        </h1>

        <a
          href="https://generationinitiative.zoom.us/my/geandro"
          target="_blank"
        >
          <button className="bg-orange-200 py-2 px-4 rounded-full font-semibold hover:bg-orange-400">
            08/03/24 às 16h
          </button>
        </a>
      </div>
    </>
  );
}

export default Navbar;
