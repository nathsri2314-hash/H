
import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import WishCard from './components/WishCard';
import BirthdayCake from './components/BirthdayCake';
import Sparkle from './components/Sparkle';
import { Heart, Star, ShoppingBag, Drumstick, Crown, Laugh } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-800 overflow-hidden">
      <Sparkle top="10%" left="5%" size={20} />
      <Sparkle top="20%" right="10%" size={15} />
      <Sparkle top="70%" left="15%" size={25} />
      <Sparkle top="85%" right="5%" size={18} />
      <Sparkle top="50%" left="40%" size={12} />
      
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <main className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center gap-12 md:gap-20">
          
          <WishCard
            icon={<Crown className="w-10 h-10 text-amber-400" />}
            title="The Boss (Ammagaru) 👑"
            description="What she says, goes. No questions asked. Bow down to the ultimate authority! 😉 Happy Birthday, Boss!"
            animationDelay={0.2}
          />

          <WishCard
            icon={<Laugh className="w-10 h-10 text-violet-400" />}
            title="A Few Nicknames..."
            description="Chinni, Sab's, Pandhi, Thikka papa, vagalaadi 😁"
            animationDelay={0.4}
          />

          <WishCard
            icon={<Heart className="w-10 h-10 text-rose-400" />}
            title="You're Perfect! 💖"
            description="Happy Birthday to someone who is perfect in every way. Your kindness, charm, and beauty shine so brightly. You're a true gem, Chinni! The next time you say you're not pretty, poi addham lo chusko pandhii 😁"
            animationDelay={0.6}
          />
          
          <WishCard
            icon={<ShoppingBag className="w-10 h-10 text-sky-400" />}
            title="Queen of Fashion 👑"
            description="You rock every outfit effortlessly, making every look your own. Keep wearing the lavender dress 😉 and shining with your unique and perfect style! ✨"
            animationDelay={0.8}
          />

          <WishCard
            icon={<Laugh className="w-10 h-10 text-teal-400" />}
            title="A Little Tease..."
            description="entha emi chesina nakante potti ey nuvvu potti papaaa 😁"
            animationDelay={1.0}
          />

          <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
              <WishCard
                icon={<Star className="w-10 h-10 text-amber-400" />}
                title="Dynamite in a Small Package 🧨"
                description="Happy birthday to my favorite shorty! You're proof that the best things come in small packages... though your temper might be slightly bigger than you are. 😉"
                animationDelay={1.2}
              />
              <WishCard
                icon={<Drumstick className="w-10 h-10 text-orange-400" />}
                title="Non Veg Lover! 🍗"
                description="bagaaa biryani thinuu , baga anni thinuuu , neeku nacchindhi vadu anukuntadu adhi idhi pettukoku"
                animationDelay={1.4}
              />
          </div>

          <div className="text-center p-8 bg-rose-50/60 backdrop-blur-lg rounded-2xl shadow-xl max-w-2xl w-full border border-white/20">
              <h2 className="font-great-vibes text-5xl md:text-7xl text-pink-500 mb-6">Make a Wish!</h2>
              <BirthdayCake />
              <p className="text-lg text-slate-600 mt-6">
                May all your dreams and wishes for the coming year sparkle and come true. You deserve all the happiness in the world.
              </p>
          </div>
        </main>
        
        <div className="text-center py-16 md:py-24 px-6 bg-rose-50/50 backdrop-blur-sm">
            <h3 className="font-great-vibes text-4xl md:text-6xl text-pink-500 mb-4">
                To The One and Only
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
                birthday gift isthey thisukoru inka itla anna cheppali ga eeeee
            </p>
            <p className="font-great-vibes text-5xl md:text-7xl text-pink-600 mt-8 font-bold">
                happy birthday thikka
            </p>
            <p className="text-2xl md:text-3xl text-slate-700 mt-4">
                ammagaruu 🙇
            </p>
            <p className="text-md text-slate-500 mt-8 italic">
                chana ne pettali anukunna no time 😁 happy birthday amma
            </p>
        </div>
      </div>
    </div>
  );
};

export default App;