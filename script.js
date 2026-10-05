
// all the content for the testimonials and projects sections
const siteData = {
  testimonials: [
    {
      text: "Working on the website project was a great experience. I learned a lot about web development and design.",
      role: "Web Developer"
    },
    {
      text: "I really enjoyed collaborating with the team on this project. It was a great opportunity to learn and grow.",
      role: "Project Manager"
    },
    {
      text: "The website project allowed me to showcase my skills and creativity. I'm proud of the final result.",
      role: "UI/UX Designer"
    }
  ],

  projects: [
    {
      title: "Bakhita Portfolio",
      description: "A personal portfolio website showcasing my skills and projects.",
      tech: ["HTML", "CSS", "Git"]
    },
    {
      title: "Dynamic Testimonial Component",
      description: "An interactive section that renders testimonials dynamically using JavaScript.",
      tech: ["JavaScript"]
    }
  ]
};


// show the testimonials
const testimonialList = document.getElementById("testimonial-list");

for (let i = 0; i < siteData.testimonials.length; i++) {
  const item = siteData.testimonials[i];

  testimonialList.innerHTML += `
    <div class="testimonial">
      <p class="quote">${item.text}</p>
      <p class="role">${item.role}</p>
    </div>
  `;
}


// show the projects
const projectList = document.getElementById("project-list");

for (let i = 0; i < siteData.projects.length; i++) {
  const project = siteData.projects[i];

  let tags = "";
  for (let j = 0; j < project.tech.length; j++) {
    tags += `<span class="tag">${project.tech[j]}</span>`;
  }

  projectList.innerHTML += `
    <div class="project">
      <p class="project-number">0${i + 1}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${tags}</div>
    </div>
  `;
}


// footer year
document.getElementById("year").textContent = new Date().getFullYear();