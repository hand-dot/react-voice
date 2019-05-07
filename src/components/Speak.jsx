import speak from "../speak";

const Speak = ({ children }) => {
  speak(String(children));
  return null;
};

export default Speak;
