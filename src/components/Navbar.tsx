import Link from "next/link";

interface NavItem {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const categories = await res.json();
  const categoriesNavData: NavItem[] = categories.data;
  const filterNavCategories = categoriesNavData.filter((nav) => nav.scrapable);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-3 mt-5 sm:gap-4 md:gap-5">
        <Link href={"/"}>হোম</Link>

        {filterNavCategories.map((navItem, index) => (
          <Link className="sm:text-base" key={index} href={navItem.slug}>
            {navItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
