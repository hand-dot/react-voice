import speak from "../speak";

const AsyncSpeak = ({ children }) => {
  speak(String(children), { async: true });
  return null;
};

export default AsyncSpeak;
