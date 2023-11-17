import Navbar from "@/components/Navbar";
import PageTransitionContainer from "@/components/PageTransition";

export default function WikiIndexPage() {
  return (
    <PageTransitionContainer>
      <Navbar />
      <div>
        <h1>Wiki</h1>
      </div>
    </PageTransitionContainer>
  );
}
