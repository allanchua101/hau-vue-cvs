const resumes = [
  // Allan
  {
    id: 1,
    name: "Chua, Allan Angeles",
    firstName: "Allan",
    lastName: "Chua",
    email: "allan.chua@hau.edu.com",
    birthDay: "1990-01-20",
    address: "1178 Del Pilar Street, Cabanatuan Nueva Ecija",
    github: "",
    linkedin:"",
    twitter:"",

    skills: [
      {
        name: "JS",
        icon: "mdi-language-javascript",
        color: "#d8c547",
      },
      {
        name: "AWS",
        icon: "mdi-aws",
        color: "#37475A",
      },
      {
        name: "Vue",
        icon: "mdi-vuejs",
        color: "#41B883",
      },
      {
        name: "React",
        icon: "mdi-react",
        color: "#61DBFB",
      },
    ],
    backgroundUrl:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    phone: "098-123-4567",
  },
  // Gabrielle
  {
    id: 2,
    name: "Valencia, Gabrielle",
    firstName: "Gabrielle",
    lastName: "Valencia",
    email: "gabrielle.valencia@hau.edu.com",
    birthDay: "1992-06-12",
    address: "168 Maysan Road,, Metro Manila NCR",
    github: "github.com/GabrielleValencia",
    linkedin:  "linkedin.com/in/GabrielleValencia",
    twitter: "https://twitter.com/gabvalencia",
    Getting: "Getting out of Safe Zone",
    Challenges: "Challenges",
    Cycling: "Cycling",
    nature: "Nature",
    sports: "Basketball",
    music: "Music",
    english: "English",
    filipino: "Filipino",
    skills: [
      {
        name: "JS",
        icon: "mdi-language-javascript",
        color: "#d8c547",
      },
      {
        name: "HTML",
        icon: "mdi-language-html5",
        color: "#e34c26",
      },
      {
        name: "CSS",
        icon: "mdi-language-css3",
        color: "#264de4",
      },
      {
        name: "Vue",
        icon: "mdi-vuejs",
        color: "#41B883",
      },
    ],
    backgroundUrl:
      "https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106?k=20&m=1295900106&s=612x612&w=0&h=hDkQP1a9dUo4Esv8iMyVlEnP4nfN2mwM5LdtPW9M8zo=",
    phone: "098-123-4567",
  },
];

export function getResumes() {
  return resumes;
}

export function getResumeByID(id) {
  return resumes.find((r) => r.id === id);
}
