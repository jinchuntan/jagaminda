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
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Prototype evidence
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.caption}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('img-placeholder')
                    const filename = item.src.split('/').pop()
                    e.target.parentElement.innerHTML =
                      `<div class="text-center p-6"><p class="text-slate-400 text-sm">${item.caption}</p><p class="text-slate-300 text-xs mt-1">${filename}</p></div>`
                  }}
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-medium text-slate-700">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
