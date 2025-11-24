export default function ServicesGrid() {
  const services = [
    { title: "Turbine Maintenance", desc: "Scheduled, corrective, and major component repairs." },
    { title: "Blade Inspection", desc: "Drone and manual inspections for blade health." },
    { title: "Field Diagnostics", desc: "Electrical, mechanical, and hydraulic troubleshooting." },
    { title: "Emergency Support", desc: "Rapid response for downed or stalled turbines." },
  ];

  return (
    <section className="py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white shadow rounded">
            <h4 className="font-bold text-xl mb-2">{s.title}</h4>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
