"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
  {
    id: "1",
    name: "コストコ プルコギ 1.6kg",
    price: 4768,
    description:
      "コストコ自慢の韓国風焼肉。家族みんなで食べてもキリが良いサイズで、お弁当にも使えます。",
    image: "/images/bulgogi_beef.jpg",
  },
  {
    id: "2",
    name: "コストコ マフィン 12個",
    price: 2360,
    description:
      "コストコ名物のマフィン。朝食にどうぞ。美味しい時は焼きたてシェアされてくください。",
    image: "/images/muffin.jpg",
  },
  {
    id: "3",
    name: "チーズタルト",
    price: 2412,
    description:
      "濃厚なクリームチーズが売りのケーキです。ティータイムのデザートとしていかがでしょうか？",
    image: "/images/cheese.jpg",
  },
  {
    id: "4",
    name: "ディナーロール36個入り",
    price: 1498,
    description:
      "朝食にピッタリのディナーロール。賞味期限は1週間になりますので要冷蔵。",
    image: "/images/dinner_roll.jpg",
  },
  {
    id: "5",
    name: "鳴門金時芋棒 1kg",
    price: 2870,
    description: "甘くておいしい鳴門の金時芋をお菓子にしました。",
    image: "/images/potato.jpg",
  },
  {
    id: "6",
    name: "ペーパータオル 12ロール",
    price: 3820,
    description:
      "丈夫なタオルペーパーであり、包みとしても活用可能。シェア利用も良いです。",
    image: "/images/paper.jpg",
  },
];

export default function ProductGrid() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFF8E1]">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <h1 className="text-2xl font-bold text-red-600">Costco Wholesale</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => router.push("/costco")}
              className="text-gray-600 hover:text-gray-900"
            >
              コストコ
            </button>
            <button
              onClick={() => router.push("/seibu")}
              className="text-gray-600 hover:text-gray-900"
            >
              西部ガスG
            </button>
            <button
              onClick={() => router.push("/lopia")}
              className="text-gray-600 hover:text-gray-900"
            >
              ロピア
            </button>
            <button
              onClick={() => router.push("/seijo")}
              className="text-gray-600 hover:text-gray-900"
            >
              成城石井
            </button>
            <button
              onClick={() => router.push("/others")}
              className="text-gray-600 hover:text-gray-900"
            >
              その他
            </button>
            <button
              onClick={() => router.push("/cart")}
              className="ml-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              カートに入れる
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Image
            src="/images/costco_logo.png"
            alt="Featured Product"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <h1 className="text-2xl font-bold mb-8">おすすめ商品</h1>
        <p className="text-gray-600 mb-8">〜コストコ〜</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-lg font-bold mb-2">
                    ￥{product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50">
                <button
                  onClick={() => router.push("/share")}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  シェア希望
                </button>
                <button
                  onClick={() => router.push("/purchase")}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  買いたい
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">商品概要</h3>
              <ul className="space-y-2">
                <li>Costoco</li>
                <li>西部ガスグループ</li>
                <li>ロピア</li>
                <li>成城石井</li>
                <li>その他</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">会社概要</h3>
              <ul className="space-y-2">
                <li>代表者のあいさつ</li>
                <li>Vision</li>
                <li>SDGs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
