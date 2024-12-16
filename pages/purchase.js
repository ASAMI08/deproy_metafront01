"use client";

import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();

  return (
    <nav className="bg-yellow-100 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          {["コストコ", "西部ガスG", "ロピア", "成城石井", "その他"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="px-3 py-1 rounded hover:bg-yellow-200 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <button
          onClick={() => router.push("/cart")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition-colors"
        >
          カートに入れる
        </button>
      </div>
    </nav>
  );
}

function ProductDetails() {
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* 商品画像 */}
      <div className="relative">
        <button
          aria-label="お気に入りに追加"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
        >
          <FaHeart className="h-6 w-6" />
        </button>
        <Image
          src="/images/muffin.jpg"
          alt="コストコマフィン"
          width={500}
          height={300}
          layout="responsive"
          className="rounded-lg"
        />
      </div>

      {/* 商品詳細 */}
      <div className="space-y-6">
        <div>
          <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            コストコ
          </span>
          <h1 className="text-2xl font-bold mt-2">コストコマフィン 12個</h1>
          <p className="text-3xl font-bold mt-2">¥2,360</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">個数</label>
            <select className="w-32 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num.toString()}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => router.push("/cart")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded transition-colors"
          >
            カートに入れる
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <h2 className="font-bold mb-2">商品説明</h2>
          <p className="text-gray-600">
            コストコ名物のマフィン。朝食にどうぞ。多い場合は皆さんでシェアさせてください。
          </p>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      rating: 4,
      title: "美味しかったです",
      comment: "美味しいですが量が多いです。シェアした方が良いかもです。",
      author: "濱田理事長",
      date: "2024/11/11",
    },
    {
      rating: 5,
      title: "嬉しいサービスです",
      comment:
        "忙しくてあまり外に出れないので、目の前まで届けてもらえるのは嬉しいです",
      author: "時久さん",
      date: "2024/11/17",
    },
    {
      rating: 4,
      title: "ご近所と仲良くなりました",
      comment: "商品を取りに行った時にご近所さんとシェアして仲良くなりました！",
      author: "木添さん",
      date: "2024/11/27",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-xl font-bold mb-6">商品のロコミ</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
          >
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <h3 className="font-bold mb-2">{review.title}</h3>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div>
                <p className="font-medium">{review.author}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const sections = [
    {
      title: "商品概要",
      links: ["Costoco", "西部ガスグループ", "ロピア", "成城石井", "その他"],
    },
    {
      title: "会社概要",
      links: ["代表者のあいさつ", "Vision", "SDGs"],
    },
  ];

  return (
    <footer className="bg-gray-50 mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <ProductDetails />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
