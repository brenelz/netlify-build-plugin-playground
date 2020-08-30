import Head from "next/head";
import { useState } from "react";

import Footer from "@components/Footer";

export default function Home() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Next Starter (with codeceptjs tests!)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          {!submitted ? (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Say hello to:{" "}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </>
          ) : (
            `Hello, ${name}`
          )}
        </p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>
    </div>
  );
}
