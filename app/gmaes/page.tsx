import Cards from "@/components/cards";

export default function StuffPage() {
  return (
    <section className="flex justify-center p-4">
      <div className="container flex flex-col gap-4">
        <h1 className="text-4xl">Gmaes</h1>
        <p>Mostly in Godot</p>
        <Cards cards={[]} />
      </div>
    </section>
  );
}
