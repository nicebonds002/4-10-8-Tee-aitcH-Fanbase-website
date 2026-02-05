import "@/app/discography/discography.css";

const discography = [
  {
    id: 1,
    title: "First Album",
    year: 2021,
    cover: "https://i.ytimg.com/vi/VJiLD4D8f7U/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Second Album",
    year: 2023,
    cover: "https://i.ytimg.com/vi/VJiLD4D8f7U/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Live Session",
    year: 2024,
    cover: "https://i.ytimg.com/vi/VJiLD4D8f7U/maxresdefault.jpg",
  },
];

export default function DiscographyPage() {
  return (
    <main className="discography">
      <header className="discography-header">
        <h1>Discography</h1>
        <p>All official releases & special projects</p>
      </header>

      <section className="album-grid">
        {discography.map((album) => (
          <article key={album.id} className="album-card">
            <div className="album-image">
              <img src={album.cover} alt={album.title} />
            </div>

            <div className="album-info">
              <h2>{album.title}</h2>
              <span>{album.year}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
