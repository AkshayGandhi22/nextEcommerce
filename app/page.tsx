import Image from "next/image";
import LogoutButton from "./(auth)/login/LogoutButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="shopbyCategorySection">
          <div className="mainTitle">
            <h2>Shop By Category</h2>
          </div>
          <div className="categorySection">
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-1.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-2.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-3.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-4.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-5.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-6.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-7.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-8.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-9.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-10.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-11.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-12.webp" alt="" />
              </Link>
            </div>
            <div className="caregoryCard">
              <Link href="#">
                <img src="images/home/product-13.webp" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
