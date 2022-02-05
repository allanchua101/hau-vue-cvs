const resumes = [
  {
    id: 1,
    name: "Chua, Allan Angeles",
    email: "allan.chua@hau.edu.com",
    skills: [
      {
        name: "JavaScript",
        icon: "mdi-language-javascript",
        color: "#d8c547",
      },
      {
        name: "AWS",
        icon: "mdi-aws",
        color: "#37475A",
      },
      {
        name: "Vue JS",
        icon: "mdi-vuejs",
        color: "#41B883",
      },
      {
        name: "React JS",
        icon: "mdi-react",
        color: "#61DBFB",
      },
    ],
    backgroundUrl:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    phone: "098-123-4567",
  },
  {
    id: 2,
    name: "Valencia, Gabrielle",
    email: "gabrielle.valencia@hau.edu.com",
    skills: [
      {
        name: "JavaScript",
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
        name: "Vue JS",
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
