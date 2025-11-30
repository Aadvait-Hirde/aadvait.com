import RotatingText from '@/components/RotatingText';
import { currentRoles } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-8 py-16">
        <div className="mb-20">
          <h1 className="text-3xl font-bold mb-2">Aadvait Hirde</h1>
          <p className="text-xl text-gray-600 mb-8">
            <RotatingText
              texts={['Software Engineer', 'Founder', 'Researcher']}
              rotationInterval={3000}
              auto={true}
              loop={true}
            />
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            Software Engineer with experience building scalable products and working with early-stage startups. 
            Passionate about learning, experimentation, and driving results through collaboration and technical leadership. 
            Skilled in modern stacks including React, Next.js, Node.js, TypeScript, Python, and AWS.
          </p>

          <p className="text-gray-600 mb-8">
            You can reach me at{' '}
            <a href="mailto:aadvait.cr@gmail.com" className="text-black hover:underline">aadvait.cr@gmail.com</a>
            {' '}or{' '}
            <a href="mailto:ahirde@iu.edu" className="text-black hover:underline">ahirde@iu.edu</a>
            {' '}or find me on{' '}
            <a href="https://linkedin.com/in/aadvait-hirde" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">LinkedIn</a>
            {', '}
            <a href="https://github.com/Aadvait-Hirde" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub</a>
            {', and '}
            <a href="https://twitter.com/aadvaitn" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">X</a>
            .
          </p>

          <div className="flex gap-4">
            <a
              href="/documents/Aadvait-Hirde-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="https://calendly.com/aadvait-hirde"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <span>Book a call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Current Roles */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Current Roles</h2>
          <div className="space-y-6">
            {currentRoles.map((role, index) => (
              <div key={index}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{role.company}</h3>
                    <p className="text-gray-600">{role.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
