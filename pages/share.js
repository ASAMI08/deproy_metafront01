"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PropTypes from "prop-types";

// NavBar component
function NavItem({ href, children, className }) {
  return React.createElement(
    Link,
    {
      href: href,
      className: `text-sm font-medium transition-colors hover:text-primary ${
        className || ""
      }`,
    },
    children
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

function NavBar() {
  return React.createElement(
    "nav",
    { className: "border-b" },
    React.createElement(
      "div",
      {
        className:
          "flex h-16 items-center px-4 max-w-7xl mx-auto justify-end space-x-8",
      },
      React.createElement(NavItem, { href: "/" }, "ホーム"),
      React.createElement(NavItem, { href: "/product" }, "商品ページ"),
      React.createElement(NavItem, { href: "/schedule" }, "配達スケジュール"),
      React.createElement(NavItem, { href: "/purchase" }, "購入")
    )
  );
}

// ShareRequestsTable component
function ShareRequestsTable({ requests }) {
  const router = useRouter();

  return React.createElement(
    "div",
    { className: "overflow-x-auto" },
    React.createElement(
      "table",
      { className: "min-w-full divide-y divide-gray-200" },
      React.createElement(
        "thead",
        { className: "bg-yellow-400" },
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "No."
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "希望者"
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "配達日"
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "店舗名"
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "商品名"
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "全体数"
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "購入希望数"
          ),
          React.createElement(
            "th",
            {
              className:
                "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
            },
            "シェア可能数"
          )
        )
      ),
      React.createElement(
        "tbody",
        { className: "bg-white divide-y divide-gray-200" },
        requests.map((request) =>
          React.createElement(
            "tr",
            {
              key: request.id,
              onClick: () => router.push(`/request/${request.id}`),
              className: "cursor-pointer hover:bg-gray-50",
            },
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap" },
              request.id
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap" },
              request.requester
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap" },
              request.deliveryDate
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap" },
              request.storeName
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap" },
              request.productName
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap text-right" },
              request.totalAmount
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap text-right" },
              request.desiredAmount
            ),
            React.createElement(
              "td",
              { className: "px-6 py-4 whitespace-nowrap text-right" },
              request.shareableAmount
            )
          )
        )
      )
    )
  );
}

ShareRequestsTable.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      requester: PropTypes.string.isRequired,
      deliveryDate: PropTypes.string.isRequired,
      storeName: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      totalAmount: PropTypes.number.isRequired,
      desiredAmount: PropTypes.number.isRequired,
      shareableAmount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Sample data
const sampleRequests = [
  {
    id: 1,
    requester: "だんな",
    deliveryDate: "12月18日",
    storeName: "コストコ",
    productName: "コストコマフィン",
    totalAmount: 12,
    desiredAmount: 6,
    shareableAmount: 6,
  },
  {
    id: 2,
    requester: "とっきー",
    deliveryDate: "12月18日",
    storeName: "コストコ",
    productName: "ディナーロール",
    totalAmount: 36,
    desiredAmount: 8,
    shareableAmount: 28,
  },
  {
    id: 3,
    requester: "あさみ",
    deliveryDate: "12月18日",
    storeName: "コストコ",
    productName: "ペーパータオル",
    totalAmount: 12,
    desiredAmount: 3,
    shareableAmount: 9,
  },
  {
    id: 4,
    requester: "たかさん",
    deliveryDate: "12月18日",
    storeName: "西部ガスグループ",
    productName: "マグロ一本",
    totalAmount: 1000,
    desiredAmount: 5,
    shareableAmount: 995,
  },
];

// Main page component
export default function Home() {
  return React.createElement(
    "main",
    { className: "min-h-screen bg-[#FFF8F0]" },
    React.createElement(NavBar, null),
    React.createElement(
      "div",
      { className: "relative h-[200px] mb-8" },
      React.createElement("div", {
        className: "absolute inset-0 bg-cover bg-center",
        style: {
          backgroundImage: "url('/images/share.jpg?height=200&width=1200')",
        },
      }),
      React.createElement("div", { className: "absolute inset-0 bg-black/20" }),
      React.createElement(
        "h1",
        {
          className:
            "absolute inset-0 flex items-center justify-center text-4xl font-bold text-white",
        },
        "シェア希望者一覧"
      )
    ),
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-4 py-8" },
      React.createElement(ShareRequestsTable, { requests: sampleRequests })
    )
  );
}
