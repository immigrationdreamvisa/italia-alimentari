import React, { useState, useRef, useEffect } from 'react';
import { handleImageError } from '../utils/imageUtils';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  RotateCw, 
  Sparkles, 
  ChefHat, 
  Flame, 
  Clock, 
  Utensils, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { ItaliaAlimentariLogo } from './ItaliaAlimentariLogo';
import { RECIPES_DATA, RecipeItem } from '../data/companyData';

interface ChefVideoSectionProps {
  onSelectRecipe?: (recipe: RecipeItem) => void;
  onExploreProducts?: () => void;
}

interface CookingChapter {
  time: number; // in seconds
  title: string;
  stepNumber: string;
  action: string;
  chefTip: string;
}

interface ChefMasterclassEpisode {
  id: string;
  recipeId: string;
  title: string;
  italianTitle: string;
  chefName: string;
  chefTitle: string;
  duration: number; // in seconds (e.g. 200 = 3:20)
  videoSrc: string;
  posterImage: string;
  starProduct: string;
  difficulty: string;
  prepTime: string;
  description: string;
  chapters: CookingChapter[];
}

const EPISODES: ChefMasterclassEpisode[] = [
  {
    id: 'episode-carbonara',
    recipeId: 'crisp-pancetta-carbonara',
    title: 'Authentic Roman Rigatoni with Crisp Cured Pancetta',
    italianTitle: 'Rigatoni alla Carbonara Tradizionale con Pancetta Dorata',
    chefName: 'Chef Matteo Bellini',
    chefTitle: 'Executive Culinary Director — Accademia Gastronomica Parma',
    duration: 200,
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterImage: '/images/glazed_crisp_bacon_1793428040147.jpg',
    starProduct: 'Italia Alimentari Pancetta Cubetti (Busseto)',
    difficulty: 'Medium',
    prepTime: '25 mins',
    description: 'Watch Chef Matteo slowly render 60-day cured Italian pancetta cubetti until translucent and crisp, whisk farm egg yolks with Pecorino Romano DOP, and emulsify al dente rigatoni in a glossy golden mantle.',
    chapters: [
      {
        time: 0,
        stepNumber: '01',
        title: 'Precision Dicing & Cold Skillet',
        action: 'Slicing aged pancetta into uniform 6mm cubetti and laying into an unheated iron skillet.',
        chefTip: 'Never add olive oil or butter: let the sweet natural fat render slowly over medium-low flame.'
      },
      {
        time: 50,
        stepNumber: '02',
        title: 'The Golden Sizzle & Deglaze',
        action: 'Rendering until edges turn amber-crisp while the core remains tender; deglazing with a ladle of pasta water.',
        chefTip: 'Remove half the crisped cubetti and reserve on parchment paper for the final crunchy topping.'
      },
      {
        time: 110,
        stepNumber: '03',
        title: 'Pecorino Romano Emulsion',
        action: 'Whisking fresh golden egg yolks with finely grated Pecorino Romano DOP and toasted Tellicherry pepper.',
        chefTip: 'Whisk in warm pasta water spoon by spoon to pasteurize the egg yolks without scrambling.'
      },
      {
        time: 160,
        stepNumber: '04',
        title: 'Mantecatura & Chef Plating',
        action: 'Tossing bronze-die rigatoni directly into the rendered pancetta pan off the heat, folding in the velvet egg cream.',
        chefTip: 'Plate immediately in warmed earthenware bowls, crowning with reserved crispy pancetta and coarse pepper.'
      }
    ]
  },
  {
    id: 'episode-prosciutto-plating',
    recipeId: 'parma-focaccia-panino',
    title: 'The Art of Slicing & Plating Prosciutto di Parma DOP',
    italianTitle: 'L\'Arte del Taglio: Prosciutto di Parma DOP 24 Mesi',
    chefName: 'Maestra Elena Rossi',
    chefTitle: 'Master Salumi Sommelier & Food Stylist — Busseto Cellars',
    duration: 180,
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    posterImage: '/images/chef_plating_charcuterie_1793429017594.jpg',
    starProduct: 'Prosciutto di Parma DOP 24-Month Reserve',
    difficulty: 'Artisanal',
    prepTime: '15 mins',
    description: 'Maestra Elena demonstrates precision flywheel slicing at 0.8mm thickness, folding gossamer-thin salumi ribbons into airy rosettes, and composing a Michelin-worthy antipasto with fresh burrata and wildflower figs.',
    chapters: [
      {
        time: 0,
        stepNumber: '01',
        title: 'Needle Aroma Inspection',
        action: 'Testing ham depth with an antique horse-bone needle to evaluate sweet cellar curing aromas.',
        chefTip: 'The bone needle absorbs aroma instantly and dissipates within seconds, verifying optimal maturation.'
      },
      {
        time: 45,
        stepNumber: '02',
        title: '0.8mm Flywheel Slicing',
        action: 'Hand-cranking the classic red Berkel flywheel slicer to achieve diaphanous, translucent slices.',
        chefTip: 'Cold temperature is critical: slice at 2°C to 4°C to prevent delicate sweet fat from melting on the blade.'
      },
      {
        time: 95,
        stepNumber: '03',
        title: 'The "Fetta Mossa" Wave Fold',
        action: 'Gently lifting each slice with wooden tongs and folding in dynamic, airy ribbons on chilled marble.',
        chefTip: 'Never compress cured ham flat; airy waves allow room temperature oxygen to release volatile aromatics.'
      },
      {
        time: 140,
        stepNumber: '04',
        title: 'Burrata & Balsamico Harmony',
        action: 'Arranging fresh Pugliese burrata, ripe honeyed figs, baby arugula, and 12-year Traditional Balsamic Vinegar.',
        chefTip: 'Finish with sea salt flakes and cold-pressed extra virgin olive oil from Emilia-Romagna.'
      }
    ]
  },
  {
    id: 'episode-mortadella-pinsa',
    recipeId: 'grand-aperitivo-platter',
    title: 'Gourmet Pinsa Romana with Mortadella Bologna IGP & Stracciatella',
    italianTitle: 'Pinsa Gourmet con Mortadella Bologna IGP e Crema di Pistacchio',
    chefName: 'Chef Lorenzo Fontana',
    chefTitle: 'Head of Culinary Innovation — Italia Alimentari R&D',
    duration: 210,
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterImage: '/images/gourmet_recipe_spread_1793429018072.jpg',
    starProduct: 'Mortadella Bologna IGP Gran Ibis & Pistacchio',
    difficulty: 'Easy Gourmet',
    prepTime: '20 mins',
    description: 'Crisp stone-baked pinsa dough topped straight from the hearth with velvety ribbons of Mortadella Bologna IGP Gran Ibis, creamy stracciatella cheese, crushed Sicilian Bronte pistachios, and fresh basil oil.',
    chapters: [
      {
        time: 0,
        stepNumber: '01',
        title: 'High-Hydration Dough Bake',
        action: 'Baking 72-hour fermented sourdough pinsa at 280°C on volcanic stone until bubbly and blistered.',
        chefTip: 'Bake the dough with just olive oil and rosemary first; add delicate charcuterie cold after baking.'
      },
      {
        time: 55,
        stepNumber: '02',
        title: 'Velvety Mortadella Shaving',
        action: 'Shaving Mortadella Bologna IGP Gran Ibis with whole pistachios into paper-thin, silky sheets.',
        chefTip: 'Gran Ibis slow-bakes for 24 hours in dry-heat stoves, giving it an unmistakable delicate floral perfume.'
      },
      {
        time: 115,
        stepNumber: '03',
        title: 'Stracciatella & Pistachio Pesto',
        action: 'Dolloping cool, milky stracciatella cheese across the hot crust to create a hot-cold temperature contrast.',
        chefTip: 'Drizzle with emerald pistachio pesto made from roasted Bronte pistachios and mild Garda olive oil.'
      },
      {
        time: 170,
        stepNumber: '04',
        title: 'Grand Aperitivo Presentation',
        action: 'Cascading mortadella rosettes over the pinsa, dusting with crushed pistachios, and cutting into 6 portions.',
        chefTip: 'Serve immediately alongside chilled Lambrusco di Sorbara sparkling wine.'
      }
    ]
  }
];

export const ChefVideoSection: React.FC<ChefVideoSectionProps> = ({
  onSelectRecipe,
  onExploreProducts
}) => {
  const [activeEpisodeIdx, setActiveEpisodeIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [recipeDrawerOpen, setRecipeDrawerOpen] = useState(false);
  const [useFallbackCanvas, setUseFallbackCanvas] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const activeEpisode = EPISODES[activeEpisodeIdx];
  const activeRecipe = RECIPES_DATA.find((r) => r.id === activeEpisode.recipeId) || RECIPES_DATA[0];

  // Current active chapter
  const currentChapter = [...activeEpisode.chapters]
    .reverse()
    .find((ch) => currentTime >= ch.time) || activeEpisode.chapters[0];

  // Helper format seconds -> mm:ss
  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Web Audio Sizzle Synthesizer (Zero-latency realistic cooking audio)
  const startSizzleAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Generate 2 seconds of pink/cooking noise buffer
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        b6 = white * 0.115926;
        // modulate with random sizzle bubbles
        const sizzleMod = Math.sin(i / 20) * Math.sin(i / 800) * 0.2;
        data[i] = (pink * 0.12 + sizzleMod * 0.05);
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // Filter to simulate hot oil sizzling frequency band (1200Hz - 4200Hz)
      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.value = 2400;
      bandpass.Q.value = 1.2;

      const gain = ctx.createGain();
      gain.gain.value = isMuted ? 0 : volume * 0.35;

      noiseSource.connect(bandpass);
      bandpass.connect(gain);
      gain.connect(ctx.destination);

      noiseSource.start();
      noiseSourceRef.current = noiseSource;
      gainNodeRef.current = gain;
    } catch {
      // AudioContext policy catch
    }
  };

  const stopSizzleAudio = () => {
    try {
      if (noiseSourceRef.current) {
        noiseSourceRef.current.stop();
        noiseSourceRef.current.disconnect();
        noiseSourceRef.current = null;
      }
    } catch {
      // ignore
    }
  };

  // Sync volume & mute state to video & audio synth
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
    if (gainNodeRef.current && audioContextRef.current) {
      const targetGain = isMuted ? 0 : volume * 0.35;
      gainNodeRef.current.gain.setTargetAtTime(targetGain, audioContextRef.current.currentTime, 0.05);
    }
  }, [isMuted, volume]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopSizzleAudio();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Handle Play/Pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      stopSizzleAudio();
    } else {
      setIsPlaying(true);
      if (videoRef.current && !useFallbackCanvas) {
        videoRef.current.play().catch(() => {
          setUseFallbackCanvas(true);
        });
      }
      startSizzleAudio();
    }
  };

  // Interactive scrubber seek
  const handleSeek = (newTime: number) => {
    const clamped = Math.max(0, Math.min(newTime, activeEpisode.duration));
    setCurrentTime(clamped);
    if (videoRef.current && !useFallbackCanvas) {
      videoRef.current.currentTime = clamped;
    }
  };

  // Jump to specific chapter
  const handleJumpToChapter = (chapter: CookingChapter) => {
    handleSeek(chapter.time);
    if (!isPlaying) {
      setIsPlaying(true);
      if (videoRef.current && !useFallbackCanvas) {
        videoRef.current.play().catch(() => setUseFallbackCanvas(true));
      }
      startSizzleAudio();
    }
  };

  // Switch episode
  const handleSelectEpisode = (idx: number) => {
    setActiveEpisodeIdx(idx);
    setCurrentTime(0);
    setIsPlaying(false);
    stopSizzleAudio();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  // Simulated timer & Canvas Sizzle/Steam Animation Engine when playing or in fallback
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= activeEpisode.duration) {
            setIsPlaying(false);
            stopSizzleAudio();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, activeEpisode.duration]);

  // Dynamic Canvas Steam & Ember Particle Generator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 1280);
    let height = (canvas.height = canvas.offsetHeight || 720);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
      decay: number;
      isEmber: boolean;
    }> = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 1280;
      height = canvas.height = canvas.offsetHeight || 720;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn new particles if playing
      if (isPlaying && particles.length < 45) {
        // Steam wisp
        particles.push({
          x: width * 0.35 + Math.random() * (width * 0.3),
          y: height * 0.85 + Math.random() * 20,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -1.2 - Math.random() * 1.5,
          size: 15 + Math.random() * 25,
          alpha: 0.02,
          maxAlpha: 0.12 + Math.random() * 0.08,
          decay: 0.0015 + Math.random() * 0.002,
          isEmber: false
        });

        // Golden pan ember
        if (Math.random() < 0.25) {
          particles.push({
            x: width * 0.38 + Math.random() * (width * 0.24),
            y: height * 0.8 + Math.random() * 15,
            vx: (Math.random() - 0.5) * 1.5,
            vy: -2.0 - Math.random() * 2.2,
            size: 2 + Math.random() * 2.5,
            alpha: 0.8,
            maxAlpha: 0.9,
            decay: 0.015,
            isEmber: true
          });
        }
      }

      // Update and render
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.isEmber) {
          p.alpha -= p.decay;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 201, 0, ${p.alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#FFC900';
          ctx.fill();
        } else {
          // Steam puff
          p.size += 0.3;
          if (p.y > height * 0.5) {
            p.alpha = Math.min(p.maxAlpha, p.alpha + 0.005);
          } else {
            p.alpha -= p.decay;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.alpha)})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(255,255,255,0.05)';
          ctx.fill();
        }

        if (p.alpha <= 0 || p.y < 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  // Fullscreen Handler
  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        setIsFullscreen(!isFullscreen);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Mouse activity auto-hide controls
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  };

  return (
    <section id="chef-kitchen" className="py-20 md:py-28 bg-[#121212] text-white relative overflow-hidden">
      {/* Background Subtle Warm Radiant Amber Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#FFC900]/6 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#FFC900]/10 border border-[#FFC900]/30 mb-4">
              <ChefHat className="w-4 h-4 text-[#FFC900]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#FFC900]">
                Culinary Masterclass & Gastronomy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              The Master Chef&apos;s Kitchen:{' '}
              <span className="italic font-serif text-[#FFC900]">
                L&apos;Arte in Tavola.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              Watch Italian culinary masters transform authentic Italia Alimentari charcuterie, slow-cured pancetta, and Mortadella Bologna IGP into world-renowned gastronomic dishes.
            </p>
          </div>

          {/* Episode Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {EPISODES.map((ep, idx) => {
              const isSelected = activeEpisodeIdx === idx;
              return (
                <button
                  key={ep.id}
                  onClick={() => handleSelectEpisode(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#FFC900] text-[#121212] border-[#FFC900] shadow-lg font-bold'
                      : 'bg-white/5 text-white/75 border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#121212]' : 'bg-[#FFC900]'}`} />
                  <span>Masterclass 0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* CINEMATIC VIDEO PLAYER THEATER */}
        {/* ============================================================== */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className={`relative aspect-[16/9] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/15 ring-1 ring-[#FFC900]/20 select-none ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none ring-0' : ''
          }`}
        >
          {/* Main Video Stream */}
          <video
            ref={videoRef}
            src={activeEpisode.videoSrc}
            poster={activeEpisode.posterImage}
            playsInline
            loop
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={(e) => {
              if (!useFallbackCanvas) {
                setCurrentTime(e.currentTarget.currentTime);
              }
            }}
            onError={() => setUseFallbackCanvas(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              useFallbackCanvas ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'
            }`}
          />

          {/* Fallback Animated Cinematic Layer (When video is in sandbox or offline) */}
          {useFallbackCanvas && (
            <div className="absolute inset-0 overflow-hidden bg-black">
              <img
                src={activeEpisode.posterImage}
                alt={activeEpisode.title}
                className={`w-full h-full object-cover transition-transform duration-[12000ms] ease-out ${
                  isPlaying ? 'scale-115 translate-y-[-2%]' : 'scale-100'
                }`}
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />
            </div>
          )}

          {/* Dynamic Steam & Ember Particle Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          />

          {/* Top Video HUD (Watermark & Status) */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20 pointer-events-none">
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              <ItaliaAlimentariLogo variant="dark" size="sm" showTagline={false} />
              <span className="w-1 h-1 rounded-full bg-[#FFC900]" />
              <span className="text-[11px] uppercase tracking-wider font-mono text-white/90">
                Culinary Studio Busseto
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-white/80">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-white/40'}`} />
                <span>{isPlaying ? 'LIVE STREAM' : 'PAUSED'}</span>
                <span className="text-white/40">|</span>
                <span className="text-[#FFC900] font-bold">4K 60FPS</span>
              </div>

              <button
                onClick={handleToggleFullscreen}
                className="pointer-events-auto p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-white/20 text-white transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Big Center Play/Pause Overlay Indicator */}
          {(!isPlaying || showControls) && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 group"
            >
              <button
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  isPlaying
                    ? 'bg-black/40 text-white/90 hover:bg-black/60 scale-90 opacity-0 group-hover:opacity-100'
                    : 'bg-[#FFC900] text-[#121212] hover:bg-[#E9B800] hover:scale-105 shadow-[#FFC900]/30'
                }`}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
                ) : (
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                )}
              </button>
            </div>
          )}

          {/* Bottom HUD: Dynamic Chapter Badge & Controls */}
          <div 
            className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 z-30 transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Active Chapter Live Label */}
            <div className="flex items-center justify-between text-left mb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FFC900] text-[#121212]">
                  STAGE {currentChapter.stepNumber}
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide">
                  {currentChapter.title}
                </span>
              </div>
              <span className="text-xs font-mono text-[#FFC900] font-bold">
                {formatTime(currentTime)} / {formatTime(activeEpisode.duration)}
              </span>
            </div>

            {/* Interactive Timeline Scrubber Bar with Chapter Ticks */}
            <div 
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                handleSeek(pos * activeEpisode.duration);
              }}
              className="relative w-full h-3 bg-white/20 hover:h-4 rounded-full cursor-pointer transition-all duration-200 group mb-4"
            >
              {/* Progress Fill */}
              <div 
                className="h-full bg-gradient-to-r from-[#FFC900] to-[#FFE066] rounded-full relative"
                style={{ width: `${(currentTime / activeEpisode.duration) * 100}%` }}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md border-2 border-[#121212] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Chapter Markers */}
              {activeEpisode.chapters.map((chap, idx) => (
                <div
                  key={idx}
                  className="absolute top-0 bottom-0 w-1 bg-white/60 hover:bg-[#FFC900] -translate-x-1/2 cursor-pointer z-10"
                  style={{ left: `${(chap.time / activeEpisode.duration) * 100}%` }}
                  title={`${chap.stepNumber}: ${chap.title}`}
                />
              ))}
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between gap-3 text-white">
              {/* Left playback controls */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-[#FFC900] hover:bg-[#E9B800] text-[#121212] flex items-center justify-center font-bold transition-transform hover:scale-105"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => handleSeek(currentTime - 10)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                  title="Rewind 10s"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleSeek(currentTime + 10)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                  title="Fast Forward 10s"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                {/* Sizzle Sound & Volume Toggle */}
                <div className="flex items-center gap-2 pl-2">
                  <button
                    onClick={() => {
                      const nextMuted = !isMuted;
                      setIsMuted(nextMuted);
                      if (!nextMuted && isPlaying) {
                        startSizzleAudio();
                      }
                    }}
                    className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-mono ${
                      !isMuted 
                        ? 'bg-[#FFC900]/20 text-[#FFC900] border border-[#FFC900]/40' 
                        : 'bg-white/10 text-white/70 hover:text-white'
                    }`}
                    title={isMuted ? 'Unmute Kitchen Audio' : 'Mute Kitchen Audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">
                      {isMuted ? 'Sound Off' : 'Kitchen Sizzle On'}
                    </span>
                  </button>

                  {!isMuted && (
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-16 sm:w-20 accent-[#FFC900] cursor-pointer"
                      title={`Volume: ${Math.round(volume * 100)}%`}
                    />
                  )}
                </div>
              </div>

              {/* Right utility buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRecipeDrawerOpen(!recipeDrawerOpen)}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-sans font-medium text-white flex items-center gap-1.5 transition-colors border border-white/15"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#FFC900]" />
                  <span className="hidden sm:inline">Recipe & Ingredients</span>
                  <span className="sm:hidden">Recipe</span>
                </button>

                <button
                  onClick={handleToggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CHEF PROFILE & INTERACTIVE COOKING TIMELINE */}
        {/* ============================================================== */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          
          {/* Chef Card Info (Left Column: 4 Cols) */}
          <div className="lg:col-span-4 bg-[#1A1A1A] rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFC900] shadow-md shrink-0">
                  <img
                    src="/images/chef_plating_charcuterie_1793429017594.jpg"
                    alt={activeEpisode.chefName}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#1A1A1A]" />
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold text-white">
                    {activeEpisode.chefName}
                  </h4>
                  <p className="text-xs text-[#FFC900] font-sans font-medium">
                    {activeEpisode.chefTitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs text-white/80 font-sans">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Featured Salumi:</span>
                  <span className="font-semibold text-white">{activeEpisode.starProduct}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Skill Level:</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-[#FFC900]">
                    {activeEpisode.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Active Prep Time:</span>
                  <span className="font-medium text-white">{activeEpisode.prepTime}</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/70 font-sans leading-relaxed italic border-l-2 border-[#FFC900] pl-3 py-1 bg-white/5 rounded-r-lg">
                &ldquo;{currentChapter.chefTip}&rdquo;
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-3">
              {onSelectRecipe && (
                <button
                  onClick={() => onSelectRecipe(activeRecipe)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#FFC900] hover:bg-[#E9B800] text-[#121212] font-bold text-xs uppercase tracking-wider font-sans transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Full Recipe</span>
                </button>
              )}

              {onExploreProducts && (
                <button
                  onClick={onExploreProducts}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors"
                >
                  View Salumi
                </button>
              )}
            </div>
          </div>

          {/* 4-Step Interactive Cooking Chapters (Right Column: 8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase font-mono tracking-wider text-white/50">
                Interactive Cooking Steps (Click to Jump Video):
              </span>
              <span className="text-xs text-[#FFC900] font-sans flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#FFC900]" />
                Live Cooking Sequence
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {activeEpisode.chapters.map((chap, idx) => {
                const isCurrent = currentChapter.stepNumber === chap.stepNumber;
                return (
                  <div
                    key={idx}
                    onClick={() => handleJumpToChapter(chap)}
                    className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 text-left relative flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#1E1E1E] border-[#FFC900] shadow-xl ring-1 ring-[#FFC900]/40'
                        : 'bg-[#181818] border-white/10 hover:border-white/30 hover:bg-[#202020]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          isCurrent ? 'bg-[#FFC900] text-[#121212]' : 'bg-white/10 text-[#FFC900]'
                        }`}>
                          STAGE {chap.stepNumber}
                        </span>
                        <span className="text-[11px] font-mono text-white/50">
                          {formatTime(chap.time)}
                        </span>
                      </div>

                      <h4 className={`text-sm font-serif font-bold mb-1 transition-colors ${
                        isCurrent ? 'text-[#FFC900]' : 'text-white'
                      }`}>
                        {chap.title}
                      </h4>

                      <p className="text-xs text-white/70 leading-relaxed font-sans line-clamp-2">
                        {chap.action}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-white/50 text-[10px] font-mono">
                        {isCurrent ? '▶ Playing Now' : 'Click to Watch'}
                      </span>
                      <ArrowRight className={`w-3 h-3 transition-transform ${
                        isCurrent ? 'text-[#FFC900] translate-x-1' : 'text-white/40'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Culinary Guarantee Strip */}
            <div className="mt-4 bg-[#181818] border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#FFC900] shrink-0" />
                <span>
                  All recipes developed with 100% certified Italian pork cured in Busseto and Lombardy.
                </span>
              </div>
              <span className="text-[11px] font-mono text-white/40 uppercase hidden md:inline">
                Cremonini Culinary Seal
              </span>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* RECIPE INGREDIENTS & CHEF TIPS DRAWER (Expandable) */}
        {/* ============================================================== */}
        {recipeDrawerOpen && (
          <div className="mt-8 bg-[#181818] border border-[#FFC900]/40 rounded-2xl p-6 sm:p-8 text-left animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFC900]">
                  Gourmet Kitchen Card
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {activeRecipe.title}
                </h3>
              </div>
              <button
                onClick={() => setRecipeDrawerOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white"
              >
                Close Drawer
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients List */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-white/50 mb-3 flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5 text-[#FFC900]" />
                  Official Ingredients ({activeRecipe.ingredients.length} items):
                </h4>
                <ul className="space-y-2">
                  {activeRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC900] shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chef Instructions & Wine Pairing */}
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-white/50 mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFC900]" />
                    Chef&apos;s Recommended Pairing:
                  </h4>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-4">
                    <p className="font-semibold text-[#FFC900] mb-1">
                      {activeRecipe.category === 'Classic Regional Pasta' ? 'Lambrusco Grasparossa di Castelvetro DOC' : 'Gutturnio Frizzante dei Colli Piacentini'}
                    </p>
                    <p className="text-white/70">
                      The vibrant acidity and fine effervescence cut through the richness of the cured salumi fat, cleansing the palate with every sip.
                    </p>
                  </div>
                </div>

                {onSelectRecipe && (
                  <button
                    onClick={() => onSelectRecipe(activeRecipe)}
                    className="w-full py-3 rounded-xl bg-[#FFC900] hover:bg-[#E9B800] text-[#121212] font-bold text-xs uppercase tracking-wider font-sans transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Step-by-Step Cooking Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

