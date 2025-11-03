import { Music, Download, HardDrive, Image, Settings, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, #8b5cf6 0%, #6d28d9 25%, #000000 70%)`,
        }}
      />

      <nav className="relative z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <Music className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
            Luna
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-violet-400 transition-colors">Features</a>
          <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
          <a href="#download" className="hover:text-violet-400 transition-colors">Download</a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-[128px] opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-violet-800 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.4)] animate-pulse">
              <Music className="w-16 h-16" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              Stream. Download.
            </span>
            <br />
            <span className="text-white">Feel the Music</span>
            <br />
            <span className="text-gray-400 text-5xl md:text-6xl">— Seamlessly.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Luna Music Player lets you search, download, and play songs directly from YouTube — all in one elegant interface.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://github.com/akshaidev/Music-Player/releases/download/Consumer-Ready/Luna.exe"
              className="px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105"
            >
              Download Now
            </a>
            <a
              href="#features"
              className="px-10 py-4 border-2 border-violet-500 rounded-full font-semibold text-lg hover:bg-violet-500/10 transition-all duration-300 hover:scale-105"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-center text-gray-400 text-xl mb-20">Everything you need for the perfect music experience</p>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: Music,
                title: 'Play from YouTube',
                description: 'Stream any song directly from YouTube with seamless integration and instant playback.'
              },
              {
                icon: Download,
                title: 'Offline Downloads',
                description: 'Download high-quality MP3s for offline listening, anytime, anywhere.'
              },
              {
                icon: Image,
                title: 'Rich Metadata',
                description: 'Beautiful thumbnails, artist info, and complete song details at your fingertips.'
              },
              {
                icon: HardDrive,
                title: 'Automated Tools',
                description: 'FFmpeg and yt_dlp integration for seamless audio processing and conversion.'
              },
              {
                icon: Settings,
                title: 'Native Interface',
                description: 'Lightweight Tkinter-based GUI that feels native and runs smoothly on any desktop.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:scale-105 max-w-sm"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-violet-300">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-8 bg-gradient-to-b from-black via-violet-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
                About Luna
              </span>
            </h2>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Designed for creators and listeners who crave control — Luna brings power, simplicity, and beauty to your music experience.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Born from the desire to bridge the gap between streaming and ownership, Luna empowers you to curate your perfect soundtrack without compromise.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Experience music on your terms. No subscriptions. No limitations. Just pure, unfiltered audio freedom.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="relative py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
              Experience the rhythm
            </span>
            <br />
            <span className="text-white">of simplicity.</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Join thousands of music lovers who've discovered a better way to listen.
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-8">
            <a
              href="https://github.com/akshaidev/Music-Player/releases/download/Consumer-Ready/Luna.exe"
              className="px-12 py-5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-bold text-xl hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] transition-all duration-300 hover:scale-105"
            >
              Download Luna
            </a>
            <a
              href="https://github.com/akshaidev/Music-Player/"
              className="px-12 py-5 border-2 border-violet-500 rounded-full font-bold text-xl hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Github className="w-6 h-6" />
              View on GitHub
            </a>
          </div>

        </div>
      </section>

      <footer className="relative border-t border-violet-500/20 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                  Luna
                </div>
                <div className="text-sm text-gray-500">Your music, your universe.</div>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/akshaidev/Music-Player/" className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center hover:bg-violet-500/20 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-violet-500/10 text-center text-gray-500 text-sm">
            © 2025 Luna Music Player. Crafted with passion for music lovers worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
