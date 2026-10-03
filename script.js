const myTestimonials = [
    {
        quote: "working on the website project was a great experience. I learned a lot about web development and design.",
        role: "Web Developer"
    },
    {
        quote: "I really enjoyed collaborating with the team on this project. It was a great opportunity to learn and grow.",
        role: "Project Manager"
    },
    {
        quote: "The website project allowed me to showcase my skills and creativity. I'm proud of the final result.",
        role: "UI/UX Designer"
    }
];

const container = document.getElementById("testimonial-container");

myTestimonials.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.innerHTML = `
        <p class="quote">"${item.quote}"</p>
        <span class="role">- ${item.role}</span>
    `;
    container.appendChild(card);
});
const myProjects = [
    {
        tag: "HTML, CSS, Git",
        title: "Bakhita Portfolio",
        description: "A personal portfolio website showcasing my skills and projects.",
    },
    {
        tag: "JavaScript",
        title: "Dynamic Testimonial Component",
        description: "An interactive section that renders testimonials dynamically using JavaScript.",
    }
];
const projectContainer = document.getElementById("project-container");

myProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <span class="tag">${project.tag}</span>
        <h3 class="title">${project.title}</h3>
        <p class="description">${project.description}</p>
    `;
    projectContainer.appendChild(projectCard);
});
