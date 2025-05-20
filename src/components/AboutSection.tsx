export default function AboutSection() {
  return (
    <section id="sobre" className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">About me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="w-48 h-48 bg-[#141625] rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl text-[#7C5DFA] font-bold">BV</span>
          </div>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="mb-4">
            I'm a Full Stack developer building my path in this field. I love
            seeing how code transforms into something real and useful! What
            fascinates me is having control over the entire process — from
            organizing the logic behind applications to creating interfaces that
            are pleasant and intuitive.
          </p>
          <p className="mb-6">
            As a junior, I'm always looking to learn more and improve my skills.
            I've discovered that working in a team is something that motivates
            me immensely. There's always that good feeling when we solve
            challenges together, and I learn much faster when I'm collaborating
            with other people.
          </p>
          <p className="mb-4">
            I always try to unite the functional side with the aesthetic in my
            projects. For me, the small details make all the difference in the
            final experience. Each new project is an opportunity to learn
            something new and grow as a professional.
          </p>
          <p className="mb-4">
            Beyond code, photography is my passion. I like to capture memories,
            places, and especially take photos of the people I love.
          </p>
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <div className="mb-4">
            <h4 className="text-lg font-bold">
              Freelancer Project - JobFinder
            </h4>
            <p className="text-gray-600">2024</p>
            <p>
              I developed a job search with search functionalities, filtering,
              and much more. I used React, Node.js and PostgreSQL to create a
              responsive and intuitive application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
