import * as asyncSay from "async-sayjs";
import say from "say";

const speak = (str = "", option = {}) =>
  option.async ? asyncSay.speak(str) : say.speak(str);

export default speak;
