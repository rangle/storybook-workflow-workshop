import { Inter } from "next/font/google";
import { Profiles } from "../components/ui/profiles";
import { SkeletonCard } from "../components/ui/skeleton";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [profilesData, setProfilesData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const isEmpty = profilesData.length  === 0;

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/profiles");
        const data = await result.json();
        setProfilesData(data);
      } catch (error) {
        setError(error as any);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className}`}
    >
      {loading ? (
         <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        { Array.from({ length: 8 }).map((_, index) => (<SkeletonCard key={index} />))}
       </div>
      ) : error ? (
        <div className="m-auto">
          <h2 className="text-2xl">Oops, there is an error.</h2>
        </div>
      ) : isEmpty ? (
        <div className="m-auto">
          <h2 className="text-2xl">
            Hmm...This Space is Currently Empty.
          </h2>
          <p>There are no profiles to display at this time.</p>
        </div>
      ) : (
        <Profiles profiles={profilesData} />
      )}
    </main>
  );
}
