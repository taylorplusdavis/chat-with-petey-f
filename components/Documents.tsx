import PlaceholderDocument from "./PlaceholderDocument";

function Documents() {
  return (
    <div className="flex flex-wrap p-5 bg-slate-950 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto h-full">
      {/* Map through documents */}

      {/* PlaceholderDocument */}
      <PlaceholderDocument />
    </div>
  );
}

export default Documents;
