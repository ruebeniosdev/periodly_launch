import { useState } from "react";
import { supabase } from '../lib/supabase'



export const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }])
      if ( error ) throw error;
      console.log("Email submitted:", email);
      setSubmitted(true)
      setEmail("")
      
    } catch (error) {
     console.error("Failed to submit email:", error)
     alert("Something went wrong. Please try again.")
    }
  };

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full">
            <span className="pr-1 pl-3 text-lg">🚀</span>
            <span className="pl-2 pr-5 bg-gradient-to-r from-rose-500 to-indigo-500 font-medium bg-clip-text text-transparent">
              Launching Soon — Join the Waitlist
            </span>
          </a>
        </div>

        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            Feel Confident Every Cycle{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-pink-600 to-yellow-800 text-transparent">
              with Periodly.
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600">
            Periodly helps you track your cycle, get predictions, and stay
            informed with personalized AI health tips.
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto text-center">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <p className="text-green-600 text-md font-semibold">
              🎉 Thanks for joining! We'll keep you updated.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
