"use client";

import Link from "next/link";
import Image from "next/image";
import { megaMenu } from "./megaMenu";
import { useGet } from "@/app/_lib/hooks/useGet";

type Category = {
    _id: string;
    mainCategory: string;
    subCategories: {
        name: string;
        subSubCategories: string[];
    }[];
};

type MenuItem = { label: string; link: string };
type MenuColumn = { title: string; items: MenuItem[] };
type HeaderMenu = { id: string; label: string; columns: MenuColumn[] };

const toSlug = (value: string) => value.toLowerCase().trim().replace(/\s+/g, "-");

function Header() {
    const { data: categories, loading } = useGet<Category[]>("/api/categories", []);

    const dynamicMenu: HeaderMenu[] = categories.map((category) => ({
        id: category._id,
        label: category.mainCategory,
        columns: category.subCategories.map((sub) => ({
            title: sub.name,
            items: sub.subSubCategories.map((subSub) => ({
                label: subSub,
                link: `/${toSlug(category.mainCategory)}/${toSlug(sub.name)}/${toSlug(subSub)}`,
            })),
        })),
    }));

    const navigationMenu: HeaderMenu[] =
        dynamicMenu.length > 0 ? dynamicMenu : (megaMenu as HeaderMenu[]);

    return (
        <header className="navigationSection">
            <div className="container">
                <div className="mainLogo">
                    <Link href="/">
                        <Image src="/images/logo.jpg" alt="Company Logo" width={120} height={60} priority />
                    </Link>
                </div>

                <ul className="navigationMenu">
                    {navigationMenu.map((menu) => (
                        <li key={menu.id} className="navItem">
                            <Link href="#">{menu.label}</Link>

                            <div className="megaMenu">
                                {menu.columns.map((col, index) => (
                                    <div className="megaColumn" key={index}>
                                        <h4>{col.title}</h4>
                                        <ul>
                                            {col.items.map((item, i) => (
                                                <li key={i}>
                                                    <Link href={item.link}>{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                    {loading && <li className="navItem">Loading...</li>}
                </ul>

                <form className="serachForm">
                    <input type="search" placeholder="Search for products, brands and more" />
                    <button type="submit">
                        <Image src="/images/search.png" alt="Search" width={100} height={100} />
                    </button>
                </form>

                <div className="profileNav">
                    <button className="profileBtn">
                        <Image src="/images/profile.png" alt="Profile" width={100} height={100} /> Profile
                        <div className="profileDopdown">
                            <div className="loginSection">
                                <p>
                                    <b>Welcome</b> <br /> To access account and manage orders
                                </p>
                                <Link href="/signup" className="loginButton">
                                    Login / Signup
                                </Link>
                            </div>
                        </div>
                    </button>
                    <button className="profileBtn">
                        <Image src="/images/wishlist.png" alt="Wishlist" width={100} height={100} />
                        Wishlist
                    </button>
                    <Link href="/checkout/cart" className="profileBtn">
                        <Image src="/images/bag.png" alt="Bag" width={100} height={100} />
                        Bag
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
