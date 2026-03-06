import Link from "next/link";
import Image from "next/image";
import { megaMenu } from "./megaMenu";

function Header() {
    return (
        <header className="navigationSection">
            <div className="container">
                <div className="mainLogo">
                    <a href="/"><Image  src="/images/logo.jpg"  alt="Company Logo"  width={120}  height={60} priority /></a>
                </div>

                <ul className="navigationMenu">
                    {megaMenu.map(menu => (
                        <li key={menu.id} className="navItem">
                            <Link href="#">{menu.label}</Link>

                            {/* Mega Menu */}
                            <div className="megaMenu">
                                {menu.columns.map((col, index) => (
                                    <div className="megaColumn" key={index}>
                                        <h4>{col.title}</h4>
                                        <ul>
                                            {col.items.map((item, i) => (
                                                <li key={i}>
                                                    <a href={item.link}>{item.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>

                <form className="serachForm">
                    <input
                        type="search"
                        placeholder="Search for products, brands and more"
                    />
                    <button type="submit">
                        <Image src="/images/search.png" alt="Search" width={100} height={100}  />
                    </button>
                </form>

                <div className="profileNav">
                    <button className="profileBtn"><Image src="/images/profile.png" alt="Profile" width={100} height={100} /> Profile
                        <div className="profileDopdown">
                            <div className="loginSection">
                                <p><b>Welcome</b> <br /> To access account and manage orders</p>
                                <a href="/signup" className="loginButton">Login / Signup</a>
                            </div>
                        </div>
                    </button>
                    <button className="profileBtn"><Image src="/images/wishlist.png" alt="Wishlist" width={100} height={100}/> Wishlist</button>
                    <Link href="/checkout/cart" className="profileBtn"><Image src="/images/bag.png" alt="Bag" width={100} height={100}/> Bag</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
