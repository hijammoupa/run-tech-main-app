interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  export default function ServiceCard({ number, title, description, icon }: ServiceCardProps) {
    return (
      <div className="group relative flex flex-col min-h-[340px] rounded-3xl p-9 bg-gradient-to-br from-[#1b8a78] via-[#12705f] to-[#09332d] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#22e2b8]/40">
        <div className="flex items-start justify-between">
          <span className="text-5xl font-extrabold text-white">{number}</span>
          <div className="w-11 h-11 rounded-xl border border-white/25 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#22e2b8] group-hover:text-[#050d0a] group-hover:border-transparent transition-colors">
            {icon}
          </div>
        </div>
        <div className="mt-auto pt-16">
          <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
          <p className="text-sm text-white/75 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }
