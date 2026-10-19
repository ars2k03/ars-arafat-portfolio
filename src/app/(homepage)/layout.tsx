import Navbar from "@/components/Navbar";
import PageFlip from "@/components/PageFlip";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <PageFlip />
    </>
  );
}
