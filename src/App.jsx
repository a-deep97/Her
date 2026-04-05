import { useState } from "react";
import { motion } from "framer-motion";
import myImage from "./assets/image.png";
import sunflower from "./assets/sunflower.png";

// 🌸 Flower
const Flower = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1, rotate: 360 }}
    transition={{
      scale: { delay, duration: 0.3 },
      rotate: { repeat: Infinity, duration: 18, ease: "linear" }
    }}
    className="relative w-6 h-6 flex items-center justify-center"
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-3 bg-pink-300 rounded-full origin-bottom"
        style={{ transform: `rotate(${i * 60}deg) translateY(-3px)` }}
      />
    ))}
    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
  </motion.div>
);

// 🌸 Border Flowers
const BorderFlowers = () => {
  const row = Array.from({ length: 5 });
  const col = Array.from({ length: 7 });

  return (
    <>
      <div className="absolute top-4 w-full flex justify-evenly">
        {row.map((_, i) => <Flower key={i} delay={i * 0.1} />)}
      </div>

      <div className="absolute bottom-4 w-full flex justify-evenly">
        {row.map((_, i) => <Flower key={i} delay={i * 0.1} />)}
      </div>

      <div className="absolute left-4 h-full flex flex-col justify-evenly">
        {col.map((_, i) => <Flower key={i} delay={i * 0.1} />)}
      </div>

      <div className="absolute right-4 h-full flex flex-col justify-evenly">
        {col.map((_, i) => <Flower key={i} delay={i * 0.1} />)}
      </div>
    </>
  );
};

export default function App() {
  const [step, setStep] = useState("start");

  const reload = () => window.location.reload();

  // 🟡 STEP 1
  if (step === "start") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300 text-center p-6">
        <h1 className="text-2xl font-bold mb-8">
          Are you Nandini Singh?
        </h1>

        <div className="flex gap-6">
          <button onClick={() => setStep("auth")} className="px-6 py-3 bg-black text-white rounded-xl">
            Yes
          </button>
          <button onClick={() => setStep("no")} className="px-6 py-3 bg-white text-black rounded-xl">
            No
          </button>
        </div>
      </div>
    );
  }

  // ❌ NOT HER
  if (step === "no") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
        <h1>You are not Nandini, so this is not for you. Go away !!!</h1>
        <button onClick={reload} className="mt-6 px-5 py-2 bg-white text-black rounded-xl">
          Restart 🔁
        </button>
      </div>
    );
  }

  // 🟨 AUTH
  if (step === "auth") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-200 text-center p-6">
        <p className="text-sm text-gray-700 mb-8 mt-2">
          Answer this before moving forward.
        </p>

        <h1 className="text-xl font-semibold mb-8">
          What do your friends call you?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setStep("yes")} className="px-5 py-3 bg-white rounded-xl">
            Panda 🐼
          </button>
          <button onClick={() => setStep("wrong")} className="px-5 py-3 bg-white rounded-xl">
            Butterfly 🦋
          </button>
          <button onClick={() => setStep("wrong")} className="px-5 py-3 bg-white rounded-xl">
            Bunny 🐰
          </button>
          <button onClick={() => setStep("wrong")} className="px-5 py-3 bg-white rounded-xl">
            Tiger 🐯
          </button>
        </div>
      </div>
    );
  }

  // ❌ WRONG
  if (step === "wrong") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
        <h1>Hmm… that doesn’t seem right 🤨</h1>
        <button onClick={reload} className="mt-6 px-5 py-2 bg-white text-black rounded-xl">
          Restart 🔁
        </button>
      </div>
    );
  }

  // 💖 QUESTION PAGE
  if (step === "yes") {
    return (
      <div className="min-h-screen relative bg-pink-400 flex items-center justify-center">
        <BorderFlowers />

        <div className="px-16 py-16 flex flex-col items-center">

          <img
            src={myImage}
            alt="cute"
            className="w-16 h-16 object-cover rounded-full mb-4 shadow-md border-2 border-white"
          />

          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 max-w-sm text-center">

            <h1 className="text-gray-900 text-lg font-semibold">
              Don’t blush… you’re the cutest human alive 💖  
              The world feels softer with you.
            </h1>

            <div className="text-3xl mt-3">🌻</div>

            <p className="mt-4">
              Will you be my forever friend…  
              the one I can literally paint together? 🎨
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button onClick={() => setStep("finalYes")} className="px-5 py-2 bg-black text-white rounded-xl">
                Yes
              </button>
              <button onClick={() => setStep("finalNo")} className="px-5 py-2 bg-pink-500 text-white rounded-xl">
                No
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ✅ FINAL YES
  if (step === "finalYes") {
    return (
      <div className="min-h-screen relative bg-pink-400 flex items-center justify-center">
        <BorderFlowers />

        <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl text-center max-w-sm">
          <h1 className="text-xl font-semibold text-gray-900">
            I knew it 😌💖
          </h1>

          <p className="mt-4">
            You just made my whole day… maybe even more than that.
          </p>

          <button
            onClick={() => setStep("secret")}
            className="mt-5 px-5 py-2 bg-black text-white rounded-xl"
          >
            Open Secret Message 💌
          </button>
        </div>
      </div>
    );
  }

  // ❌ FINAL NO
  if (step === "finalNo") {
    return (
      <div className="min-h-screen relative bg-pink-400 flex items-center justify-center">
        <BorderFlowers />

        <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl text-center max-w-sm">
          <h1 className="text-xl font-semibold text-gray-900">
            Hmm… that hurts a little 😅
          </h1>

          <p className="mt-4">
            It’s okay… I’ll recover (eventually 😌)
          </p>

          <button
            onClick={() => setStep("secret")}
            className="mt-5 px-5 py-2 bg-black text-white rounded-xl"
          >
            Open Secret Message 💌
          </button>
        </div>
      </div>
    );
  }

  // 💌 SECRET PAGE
  if (step === "secret") {
    return (
      <div className="min-h-screen relative bg-pink-400 flex items-center justify-center px-6 py-10">

        <BorderFlowers />

        <div className="w-[320px] h-[420px] bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex flex-col">

          <div className="flex-1 overflow-y-auto p-5 text-center">
            <p className="text-gray-900 text-sm leading-relaxed">
              Hey you… <br /><br />

              I don’t say this often, so don’t get used to it 😌  
              but there’s something about you that just feels… different. In a really good way. <br /><br />

              You’re genuinely a good person — not the loud kind,  
              but the rare kind people don’t find easily anymore. <br /><br />

              And honestly?  
              talking to you is my favorite part of the day… it just feels right. <br /><br />

              So promise me something — don’t change.  
              Not for people, not for anything around you. <br /><br />

              The way you are right now?  
              yeah… that’s exactly what makes you special. <br /><br />

              Stay like this — real, kind, and a little too hard to ignore. <br /><br />

              I trust you…  
              you should trust yourself too 😏
              🌻💛
            </p>
          </div>

          <div className="p-4 flex justify-center">
            <button
              onClick={reload}
              className="px-5 py-2 bg-black text-white rounded-xl"
            >
              Restart 🔁
            </button>
          </div>

        </div>
      </div>
    );
  }
}