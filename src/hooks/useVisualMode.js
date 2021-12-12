export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);


/* Function that takes in a new mode and updates the mode state with the new value */
const transition = function(newMode, replace = false) {
  if (!replace) {
    setHistory((prev) => [...prev, newMode]);
  }
  setMode(newMode);
}


return { mode };
}