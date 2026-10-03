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
    },

];
const container = document.getElementById("testimonial-container");
myTestimonials.forEach(testimonial => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.innerHTML = `
        <p class="quote">"${testimonial.quote}"</p>
        <span class="role">- ${testimonial.role}</span>
    `;
    container.appendChild(card);
});
