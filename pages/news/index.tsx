import Link from "next/link";

import PageTransitionContainer from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import { getSortedPostsData } from "@/lib/posts";

interface PostData {
  id: string;
  date: string;
  title: string;
}

export default function NewsIndexPage({
  allPostsData,
}: {
  allPostsData: PostData[];
}) {
  return (
    <PageTransitionContainer>
      <Navbar />
      <div>
        <h1>News</h1>
      </div>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/news/${id}`}>{title}</Link>
          <br />
          <small>{date}</small>
        </li>
      ))}
    </PageTransitionContainer>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
