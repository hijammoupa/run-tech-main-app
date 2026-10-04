import Image from 'next/image';
import ServiceCard from './ServiceCard';

const services = [
  {
    number: '01',
    title: 'Streaming Platform Development',
    description: 'End-to-end custom video streaming architectures optimized for latency, scale, and high-performance playback across smart TVs, mobile, and web.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Content Management Systems',
    description: 'Robust, entertainment-focused CMS with optimized workflows for managing movies, episode metadata, manga volumes, licensing windows, and regional rights.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9-6 9 6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Digital Distribution Pipelines',
    description: 'Secure distribution networks for global content delivery, automated video transcoding, DRM protection integrations, and high-fidelity manga localized delivery.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'UI/UX Design for Entertainment',
    description: 'Immersive user interface design optimized for lean-back TV navigation, binge-watching journeys, vertical scrolling readers, and rich interactive series guides.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications with optimized offline playback, responsive manga reading viewports, real-time push engines, and localized caching.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Analytics & Insights Engine',
    description: 'Sophisticated data dashboards tracking user watch time, drop-off matrices, regional engagement heatmaps, and content performance metrics.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
      <div className="mb-5">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
              OUR SERVICES
            </p>
          </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16 max-w-3xl leading-tight">
          Tailored solutions for modern entertainment providers
        </h2>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>

        {/* Floating Social Proof Avatar Ribbon */}
        <div className="mt-8 flex items-center gap-8 rounded-3xl px-10 py-7 bg-gradient-to-r from-[#12705f] to-[#09332d] border border-white/10">
          <div className="flex -space-x-4 shrink-0">
            {[11, 32, 56, 68].map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/80?img=${id}`}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#0d4a40] object-cover"
              />
            ))}
          </div>
          <p className="text-sm md:text-base text-white/85 font-medium">
            Sophisticated data dashboards tracking user watch time, drop-off matrices, regional engagement heatmaps, and content performance metrics.
          </p>
        </div>
      </div>
    </section>
  );
}