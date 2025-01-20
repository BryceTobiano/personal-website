import NavBar from "@/app/(components)/Nav/nav";

export const metadata = {
  title: "Bryce Tobiano | Home" ,
  description: "Bryce Tobiano's Personal Website",
};

export default function PortfolioLayout({ children }) {
  return (
    <>
        <NavBar />
        <div className="page">
            <main className="main">
                {children}
            </main>
        </div>
    </>
  );
}
