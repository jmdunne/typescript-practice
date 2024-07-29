import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" width={28} height={28} />
        <p className="text-white text-2xl font-semibold ml-2.5">Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;