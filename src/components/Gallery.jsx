const galleryItems = [
  {
    src: '/images/jagaminda-goggles-hero.jpg',
    alt: 'Completed smart goggles prototype showing the final wearable form with integrated sensing hardware',
    caption: 'Completed smart goggles prototype',
  },
  {
    src: '/images/jagaminda-system-flow.png',
    alt: 'System flow diagram showing data path from wearable sensing to caregiver support and alerts',
    caption: 'System flow from wearable sensing to caregiver support',
  },
  {
    src: '/images/custom-sensor-development-process-infographic.png',
    alt: 'Custom sensor development process infographic showing the stages of building the graphene oxide coated Aluminium Nitride sensor',
    caption: 'Custom sensor development process',
  },
  {
    src: '/images/sensor-fabrication-and-testing-overview.png',
    alt: 'Sensor fabrication and testing overview showing wire bonding, PCB assembly and validation results',
    caption: 'Sensor fabrication and validation',
  },
  {
    src: '/images/jagaminda-caregiver-app-and-dashboard-overview.png',
    alt: 'Caregiver app and dashboard overview showing alert cards, readings and the user interface design',
    caption: 'Caregiver app and dashboard overview',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-slate-100 pt-24 md:pt-32">
          <span className="section-label">Evidence</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight leading-snug max-w-xl">
            Prototype evidence
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={item.caption}
                className={`group ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className={`${i === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'} rounded-xl overflow-hidden bg-slate-50`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.01] transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('img-placeholder')
                      const filename = item.src.split('/').pop()
                      e.target.parentElement.innerHTML =
                        `<div class="text-center p-6"><p class="text-slate-300 text-sm">${filename}</p></div>`
                    }}
                  />
                </div>
                <p className="mt-3 text-[13px] text-slate-400">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
