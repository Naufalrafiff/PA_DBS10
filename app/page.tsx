"use client";
import { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/seed/1/400/250",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/seed/2/400/250",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/seed/3/400/250",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/seed/4/400/250",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/seed/5/400/250",
    },
  ],
};

function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const menus = ["Home", "Profile", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 px-8 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md shadow-green-100" : "bg-white"} border-b border-green-100`}>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-green-200">
          N
        </div>
        <span className="text-gray-800 font-bold text-lg">Naufal Rafif Adighama</span>
      </div>
      <div className="flex items-center gap-1">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActive(menu)}
            className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
              active === menu
                ? "bg-green-500 text-white shadow-md shadow-green-200"
                : "text-gray-500 hover:text-green-600 hover:bg-green-50"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-8 py-16 text-center">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3" />
      <div className="relative z-10">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Database System Practicum Module 10
        </span>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          NAUFAL <span className="text-green-500">TEKKOM KKI</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Mantap jadi Website dong
        </p>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <section className="px-8 py-12 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">Latest Posts</h2>
          <p className="text-gray-400 text-sm mt-1">
            Displaying {response.results.length} articles · Page {response.page}
          </p>
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
          All Posts
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
          >
            <div className="overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                #{item.id}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                  {item.userId}
                </div>
                <span className="text-xs text-gray-400 font-medium">User {item.userId}</span>
              </div>
              <h3 className="text-gray-800 font-bold text-sm leading-snug mb-2 capitalize line-clamp-2 group-hover:text-green-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                {item.body}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-300">Read more</span>
                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-xs group-hover:bg-green-500 group-hover:text-white transition-all">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CounterDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  const getColor = () => {
    if (count > 0) return "text-green-500";
    if (count < 0) return "text-red-400";
    return "text-gray-700";
  };

  return (
    <section className="px-8 py-12 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800">Counter Demo</h2>
          <p className="text-gray-400 text-sm mt-1">
            Alert fires when count is divisible by 10
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-lg shadow-green-50">
          <div className={`text-8xl font-black text-center mb-2 tabular-nums transition-colors duration-300 ${getColor()}`}>
            {count}
          </div>
          <p className="text-center text-xs text-gray-400 mb-8">
            {count === 0
              ? "Start counting!"
              : count % 10 === 0
              ? "✓ Divisible by 10!"
              : `${10 - (Math.abs(count) % 10)} steps to next multiple of 10`}
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="w-14 h-14 rounded-2xl bg-white text-red-400 border border-red-100 hover:bg-red-50 hover:border-red-200 text-2xl font-bold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              −
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-8 h-14 rounded-2xl bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="w-14 h-14 rounded-2xl bg-green-500 text-white hover:bg-green-600 text-2xl font-bold transition-all duration-200 shadow-md shadow-green-200 hover:shadow-lg active:scale-95"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 px-8 py-6 text-center">
      <p className="text-gray-400 text-xs">
        Database System Practicum · Module 10 · Naufal Rafif Adighama
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CardGrid />
      <CounterDemo />
      <Footer />
    </div>
  );
}