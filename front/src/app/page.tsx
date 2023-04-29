import Image from "next/image";
import { Inter } from "next/font/google";
import { createClient } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

const client = createClient({
  projectId: "d7a89fh7",
  dataset: "production",
  apiVersion: "2023-04-29",
  useCdn: false,
});

export default async function Home({}: any) {
  const pets = await client.fetch(`*[_type == "pet"]`);
  console.log(pets);

  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>pets</h2>
        {pets.length > 0 && (
          <ul>
            {pets.map((pet: any) => (
              <li key={pet._id}>{pet?.name}</li>
            ))}
          </ul>
        )}
        {/* {!pets.length > 0 && <p>No pets to show</p>}
        {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )}
        {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )} */}
      </main>
    </>
  );
}
