import { workExperiences } from '@/lib/data';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-12">Work</h2>
        
        <div className="space-y-8">
          {workExperiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6">
              <div className="mb-2">
                <h3 className="font-semibold text-lg">{exp.company}</h3>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.startDate} - {exp.endDate} • {exp.location}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

