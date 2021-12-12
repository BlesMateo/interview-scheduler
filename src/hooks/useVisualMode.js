export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


/* Function that takes in a new mode and updates the mode state with the new value */
const transition = (newMode, replace = false) => {
  if (!replace) {
    setHistory((prev) => [...prev, newMode]);
  }
  setMode(newMode);
};

/* Function that sets the mode to the previous item in the history array*/
const back = () => {
  if (history.length > 1) history.pop();
  const formerMode = history[history.length - 1];
  return setMode(formerMode)
};

return { mode, transition, back };
};