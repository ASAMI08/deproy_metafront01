import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/button";

export default function Page() {
  const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hour = Math.floor(i / 2) + 10;
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour}:${minute}`;
  });

  const dates = ["12月2日", "12月3日", "12月4日", "12月5日", "12月6日"];

  function getScheduleContent(date, time) {
    const schedules = {
      "12月2日": {
        "10:00": {
          content: (
            <div className="bg-[#FFE4E1] p-2 rounded">
              <p>10:00-12:00</p>
              <p>Nudge'one</p>
              <p>千代県庁口</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
        "15:00": {
          content: (
            <div className="bg-[#FFFF00] p-2 rounded">
              <p>15:00-17:00</p>
              <p>オーヴィジョン</p>
              <p>井尻</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
      },
      "12月3日": {
        "11:30": {
          content: (
            <div className="bg-[#ADD8E6] p-2 rounded">
              <p>11:30-13:00</p>
              <p>西部ガス本社</p>
              <p>パピヨン24</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
        "15:00": {
          content: (
            <div className="bg-[#FFFF00] p-2 rounded">
              <p>15:00-17:00</p>
              <p>オーヴィジョン</p>
              <p>吉塚浜ザ・シティ</p>
              <p>投票2位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
      },
      "12月4日": {
        "10:00": {
          content: (
            <div className="bg-[#FFE4E1] p-2 rounded">
              <p>10:00-12:00</p>
              <p>Nudge'one</p>
              <p>香椎駅前</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
        "13:00": {
          content: (
            <div className="bg-[#FFE4E1] p-2 rounded">
              <p>13:00-15:00</p>
              <p>Nudge'one</p>
              <p>呉服町</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
      },
      "12月5日": {
        "11:30": {
          content: (
            <div className="bg-[#ADD8E6] p-2 rounded">
              <p>11:30-13:00</p>
              <p>西日本鉄道本社</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
        "15:00": {
          content: (
            <div className="bg-[#FFFF00] p-2 rounded">
              <p>15:00-17:00</p>
              <p>オーヴィジョン</p>
              <p>博多レジデンス</p>
              <p>投票1位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
      },
      "12月6日": {
        "11:30": {
          content: (
            <div className="bg-[#ADD8E6] p-2 rounded">
              <p>11:30-13:00</p>
              <p>西部ガス本社</p>
              <p>パピヨン24</p>
              <p>投票2位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
        "15:00": {
          content: (
            <div className="bg-[#FFFF00] p-2 rounded">
              <p>15:00-17:00</p>
              <p>オーヴィジョン</p>
              <p>白木原</p>
              <p>投票2位店舗</p>
              <p>投票〆切：12/1</p>
            </div>
          ),
        },
      },
    };

    return schedules[date]?.[time]?.content;
  }

return (
  <div className="min-h-screen bg-[#FFF8E7]">
    {/* Navigation */}
    <nav className="flex justify-end p-4">
      <div className="space-x-4">
        <Link href="/">
          <button className="bg-[#E6B422] hover:bg-[#D4A41B] text-white font-medium px-8 py-2 rounded">
            投票
          </button>
        </Link>
        <Link href="/schedule">
          <button className="bg-[#E6B422] hover:bg-[#D4A41B] text-white font-medium px-8 py-2 rounded">
            配達スケジュール
          </button>
        </Link>
        <Link href="/product">
          <button className="bg-[#E6B422] hover:bg-[#D4A41B] text-white font-medium px-8 py-2 rounded">
            購入
          </button>
        </Link>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="relative h-[200px] mb-8">
      <div className="absolute inset-0 bg-[url('/images/654-480.jpg?height=200&width=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">配達スケジュール</h1>
      </div>
    </div>

    {/* Schedule Content */}
    <div className="container mx-auto px-4 pb-8">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 bg-[#FFA500] text-left min-w-[80px]">
                  日時
                </th>
                {dates.map((date) => (
                  <th
                    key={date}
                    className="p-2 bg-[#FFA500] text-center min-w-[200px]"
                  >
                    {date}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="p-2 bg-[#FFA500] border border-gray-200">
                    {time}
                  </td>
                  {dates.map((date) => (
                    <td
                      key={`${date}-${time}`}
                      className="p-2 border border-gray-200 align-top"
                    >
                      {getScheduleContent(date, time)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
}
