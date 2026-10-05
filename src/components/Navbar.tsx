import Link from "next/link";

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const categories = await res.json();
  const categoriesNavData = categories.data;

  console.log(categoriesNavData);

  return (
    <div className="container mx-auto px-4">
      {categoriesNavData.map((navItem, index) => (
        <Link key={index} href={navItem.slug}>
          {navItem.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
