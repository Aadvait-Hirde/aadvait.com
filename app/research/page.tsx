import { researchProjects } from '@/lib/data';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-12">Research</h2>
        
        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.duration}</p>
              <p className="text-gray-700 text-sm mb-3">{project.description}</p>
              <div className="flex gap-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-black underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

