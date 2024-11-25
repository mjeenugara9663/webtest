import React from 'react';
import { Youtube, Instagram, Facebook, ArrowUpRight, Cloud } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { SocialCard } from './components/SocialCard';
import { VideoCard } from './components/VideoCard';

// Replace these with your actual social media links and usernames
const YOUTUBE_CHANNEL = "https://www.youtube.com/@manjunathjeenugara235";
const INSTAGRAM_PROFILE = "https://www.instagram.com/manjunathaj/";
const FACEBOOK_PAGE = "https://www.facebook.com/profile.php?id=100066710203727";
const YOUTUBE_CHANNEL1 = "https://www.youtube.com/"

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 animate-gradient-xy"></div>
      
      {/* Overlay pattern */}
      <div className="fixed inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      
      {/* Content */}
      <div className="relative min-h-screen text-white">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <Cloud className="w-16 h-16 text-white/90" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Welcome to Cloud Learning Platform
          </h1>
          <h2 className="text-3xl font-semibold mb-6 text-white/90">
            with Manjunatha Jeenugara
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-black/10 p-6 rounded-xl">
            We cover Azure, AWS, and Google Cloud. To learn more, follow our YouTube channel, 
            Facebook page, and Instagram page for updates, tips, and tutorials.
          </p>
        </header>

        {/* Social Media Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <SocialCard
              title="YouTube"
              icon={Youtube}
              link={YOUTUBE_CHANNEL}
              username="yourchannel"
              bgColor="bg-black/30 backdrop-blur-md hover:bg-red-600/80"
            />
            <SocialCard
              title="Instagram"
              icon={Instagram}
              link={INSTAGRAM_PROFILE}
              username="yourprofile"
              bgColor="bg-black/30 backdrop-blur-md hover:bg-gradient-to-br hover:from-purple-600/80 hover:to-pink-500/80"
            />
            <SocialCard
              title="Facebook"
              icon={Facebook}
              link={FACEBOOK_PAGE}
              username="yourpage"
              bgColor="bg-black/30 backdrop-blur-md hover:bg-blue-600/80"
            />
          </div>
        </section>

        {/* QR Code Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 text-center max-w-md mx-auto shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Scan to Subscribe</h2>
            <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
              <QRCodeSVG value={YOUTUBE_CHANNEL} size={200} />
            </div>
            <p className="mt-4 text-white/90">Scan this QR code to visit our YouTube channel</p>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Featured Videos
            <ArrowUpRight className="w-6 h-6 text-white/90" />
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <VideoCard
              title="Why is it important for us to know about Cloud Computing?"
              thumbnail="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              link={`${YOUTUBE_CHANNEL1}/watch?v=hM_AkQNgERA`}
            />
            <VideoCard
              title="Azure Manage Microsoft Entra ID Identities - Interactive lab simulations"
              thumbnail="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&q=80"
              link={`${YOUTUBE_CHANNEL1}/watch?v=0FQ1g9DXOvY&lc=UgzKp3O7Xc5-HmkRz3V4AaABAg`}
            />
            <VideoCard
              title="How to Set Up Networks on Azure, AWS, and Google Cloud – Step by Step Guide"
              thumbnail="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
              link={`${YOUTUBE_CHANNEL1}//watch?v=jrLAOTAqzCI`}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-white/80 border-t border-white/10">
          <p>© {new Date().getFullYear()} Cloud Learning Platform by Manjunatha Jeenugara. Follow us for more content!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;