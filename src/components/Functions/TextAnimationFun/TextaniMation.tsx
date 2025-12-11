import  { useState, useEffect } from "react";

type TypewriterTextProps = {
  words: string[];
  loop?: boolean;
  speed?: number; // typing speed in ms
};

const TextaniMation = ({ words,  speed = 150 }: TypewriterTextProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        // Deleting
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed]);

  return <span>{text}<span className="border-r-2 border-white animate-pulse ml-1"></span></span>;
};

export default TextaniMation;
