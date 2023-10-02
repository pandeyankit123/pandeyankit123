export const ProjectData = [
  {
    id: 1,
    title: "Memoite",
    about:
      "A note-taking website built using React and Node.js authenticated with JWT (JSON Web Tokens). It reduces the efforts of storing any notes or important points upto 60% as notes are available on the cloud. Data is currently stored and retrieved from MongoDB database. Login/Signup pages are initiated to grant access of the notes to right user only.",
    tags: ["React.js", "Node.js", "JWT", "bcrypt.js", "MongoDB"],
    github: "https://github.com/pandeyankit123/React-Fullstack-Memoite",
    image: require("../../assets/memoite.JPG"),
  },
  {
    id: 2,
    title: "TextUtils",
    about:
      "A word counter and a character counting utility app with React.js and Bootstrap which can be used to manipulate your text in the way you want, integrated with language translation and alerts. You can remove extra spaces, copy the manipulated text, and convert your text from Uppercase to lowercase and lowercase to uppercase. Website is hosted using Github pages and also has dark mode enabler which is initiated using props and useState. The reduction of efforts in manipulating text is upto 70%.",
    tags: ["React.js", "Bootstap", "Axios"],
    demo: "https://pandeyankit123.github.io/React-TextUtils/",
    github: "https://github.com/pandeyankit123/React-TextUtils",
    image: require("../../assets/TextUtils.JPG"),
  },
  {
    id: 3,
    title: "React-Chatroom",
    about:
      "A chat room created with React.js and Firebase, featuring Google login, is a real-time communication platform that allows users to sign in using their Google accounts and engage in text-based conversations with other users.",
    tags: ["React.js", "GoogleAuthProvider", "Firebase Realtime Database"],
    github: "https://github.com/pandeyankit123/React-Chatroom",
    image: require("../../assets/chatroom.JPG"),
  }
];