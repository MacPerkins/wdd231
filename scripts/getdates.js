const yearSpan = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");
const courseDetails = document.querySelector('#course-details');

const today = new Date();
const currentYear = today.getFullYear();

yearSpan.textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = `Last Modified on: ${formattedDate}`;

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  const credits = document.querySelector('.credits');  
  const coursesList = document.querySelector('.courses ul');
  const courses = [
    {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: ['Python'],
      completed: true
    },
    {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: ['HTML', 'CSS'],
      completed: true
    },
    {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: ['Python'],
      completed: true
    },
    {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: ['C#'],
      completed: true
    },
    {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: false
    },
    {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: ['HTML', 'CSS', 'JavaScript'],
      completed: false
    }
  ];

  function displayCourses(filter) {
    coursesList.innerHTML = '';
    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject === filter);
    filteredCourses.forEach(course => {
      const courseItem = document.createElement('li');
      const courseButton = document.createElement('button');
      courseButton.textContent = `${course.subject} ${course.number}`;
      courseButton.addEventListener('click', () => displayCourseDetails(course));
      if (course.completed) {
        courseButton.style.backgroundColor = '#508a91a6';
      }
      courseItem.appendChild(courseButton);
      coursesList.appendChild(courseItem);
    });
    totalCredits(filteredCourses);
  }

  function totalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    credits.textContent = `${totalCredits}`;
  }

  displayCourses('all');

  const filterButtons = document.querySelectorAll('.filter button');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      displayCourses(filter);
    });
  });
});

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  const closeModal = document.getElementById('closeModal');
  closeModal.addEventListener('click', () => {
    courseDetails.close();
  });
}