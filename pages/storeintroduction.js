import { useEffect } from "react";
import Link from "next/link";

export default function StorePage() {
  useEffect(() => {
    const app = document.getElementById("app");

    function createProductCard(name, price, regularPrice, image, note) {
      return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-4">
            <img src="${image}" alt="${name}" class="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 class="font-bold mb-1">${name}</h3>
            <div class="text-red-600">¥${price.toLocaleString()} ${note}</div>
            <div class="text-gray-600">← ¥${regularPrice.toLocaleString()} (通常)</div>
          </div>
        </div>
      `;
    }

    app.innerHTML = `
      <div class="min-h-screen bg-[#FFF8E1]">
        <!-- Header Buttons -->
        <div class="flex justify-end gap-4 p-4">
          <button onclick="window.location.href='/'" class="bg-[#F4B63C] hover:bg-[#DFA22F] text-black px-4 py-2 rounded">投票</button>
          <button onclick="window.location.href='/schedule'" class="bg-[#F4B63C] hover:bg-[#DFA22F] text-black px-4 py-2 rounded">配達スケジュール</button>
        </div>

        <!-- Store Title Section -->
        <div class="flex items-center gap-4 p-4">
          <img src="/images/logo.png" alt="SGデリマルシェ Logo" class="w-24 h-24 rounded-full" />
          <h1 class="text-3xl font-bold text-[#006400]">SGデリマルシェ 店舗紹介</h1>
        </div>

        <!-- Visit Time -->
        <div class="flex items-center gap-2 p-4">
          <span class="text-xl">🚚</span>
          <div>
            <div class="font-bold">訪問時間</div>
            <div>12月19日 13：00〜14：00</div>
          </div>
        </div>

        <!-- Store Description -->
        <div class="p-4">
          <div class="flex flex-wrap gap-4 items-center">
            <img src="/images/costco_logo.png" alt="Costco Logo" class="w-72 h-auto mb-4" />
            <img src="/images/costco.jpg" alt="Costco Store" class="w-72 h-auto rounded-lg" />
            <div class="flex-1 min-w-[300px]">
              <p class="text-lg mb-4">
                コストコは、アメリカ発の大型会員制倉庫型店舗です。
                食品から日用品までお得な大容量品が揃い、家族やグループで
                シェアして楽しめます。
              </p>
            </div>
          </div>
        </div>

        <!-- Best Sellers -->
        <div class="p-4">
          <h2 class="text-2xl font-bold mb-4">ベストセラー</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${createProductCard(
              "ディナーロール",
              650,
              845,
              "/images/dinner_roll.jpg",
              "(10件/エリア以上注文)"
            )}
            ${createProductCard(
              "ロティサリーチキン",
              790,
              1000,
              "/images/rotisserie_chicken.jpg",
              "(10件/エリア以上注文)"
            )}
            ${createProductCard(
              "プルコギビーフ",
              3520,
              4500,
              "/images/bulgogi_beef.jpg",
              "(10件/エリア以上注文)"
            )}
          </div>
        </div>

        <!-- Footer -->
        <footer class="p-4 mt-8 border-t">
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="font-bold mb-2">商品概要</h3>
              <ul class="space-y-1 text-sm">
                <li>Costcoco</li>
                <li>西部ガスグループ</li>
                <li>ロピア</li>
                <li>成城石井</li>
                <li>その他</li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-2">会社概要</h3>
              <ul class="space-y-1 text-sm">
                <li>代表者のあいさつ</li>
                <li>Vision</li>
                <li>SDGs</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    `;
  }, []);

  return <div id="app" />;
}
