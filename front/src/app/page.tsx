import { createClient } from "next-sanity";

const client = createClient({
  projectId: "d7a89fh7",
  dataset: "production",
  apiVersion: "2023-04-29",
  useCdn: false,
});

export default async function Home({}: any) {
  // const pets = await client.fetch(`*[_type == "pet"]`);

  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>pets</h2>
        {/* {pets.length > 0 && (
          <ul>
            {pets.map((pet: any) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )} */}
      </main>
    </>
  );
}
