import Head from "next/head";

import Navbar from "@/components/Navbar";
import PageTransitionContainer from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransitionContainer>
      <Head>
        <title>Mine In Abyss</title>
      </Head>
      <main>
        <Navbar />
        <div>
          <h1>Home</h1>
        </div>
      </main>
    </PageTransitionContainer>
  );
}
