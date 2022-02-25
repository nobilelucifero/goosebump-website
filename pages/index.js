import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const subscribeEmail = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    // inputEl.current.value = "";
    setMessage("Your submission has been received, thank you.");
    // result.user => 'Ada Lovelace'
  };

  return (
    <div className="bg-black">
      <Head>
        <title>Goosebump</title>
        <meta name="description" content="The future of music mementos, directly from artists to fans." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="relative h-screen w-screen bg-center bg-cover ">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-xl text-white text-center px-5">
            <h1 className="text-center text-[3rem] font-display font-bold uppercase">
              Goosebump
            </h1>
            <p className="mt-1 mb-8 text-lg sm:text-xl">
              The future of music mementos, directly from artists to fans.
            </p>

            <div className="mt-12 form-wrapper">
              {message
                ? <p
              className="px-4 py-3 bg-gray-700 text-white"
              id="waitlist-form-status"
            >{message}</p>
                : <form
                className="w-full flex gap-2"
                id="waitlist-form"
                onSubmit={subscribeEmail}
              >
                <input
                  id="waitlist-form-email"
                  className="border-2 transition-colors hover:border-gray-400 border-gray-500 focus:border-gray-50 focus:ring-0 bg-transparent w-full px-4 text-white placeholder-gray-500"
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-3 font-bold sm:text-lg"
                >
                  Subscribe
                </button>
              </form>}
              <p className="mt-4 mb-0">Register to be the first to know.</p>
            </div>
{/* 
            <p
              className="px-4 py-3 bg-gray-700 text-white"
              id="waitlist-form-success"
            >
              Your submission has been received, thank you.
            </p>
            <p
              className="px-4 py-3 bg-red-900 text-white"
              id="waitlist-form-failure"
            >
              Submission unsuccessful, retry later.
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
}
