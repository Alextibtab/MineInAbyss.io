import PageTransitionContainer from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import PostThumbnail from "@/components/PostThumbnail";
import { getSortedPostsData } from "@/lib/posts";

interface Props {
  id: string;
  date: string;
  title: string;
  author: string;
  subtitle: string;
}

export default function NewsIndexPage({
  allPostsData,
}: {
  allPostsData: Props[];
}) {
  return (
    <PageTransitionContainer>
      <Navbar />
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold my-8'>Posts</h1>
        <ul className='flex flex-wrap -mx-2'>
          {allPostsData.map((post) => (
            <li key={post.id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
              <PostThumbnail post={post} />
            </li>
          ))}
        </ul>
      </div>
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
