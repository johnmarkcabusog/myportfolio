import React, { useEffect, useState } from "react";
import "./style.css";

const work_excerpts = [
  {
    id: 1,
    title: "Love Spoke to Me",
    excerpt:
      " Love spoke to me of fragrant flowers blooming \n from the dead promises of the distant past,\n It spoke to me of rainbows, \n Of hopes, dawning from yesterday's dolorous cries, \nOf heroes, whose names engraved in the tomb of atrocities and injustices.",
  },
  {
    id: 2,
    title: "Blur",
    excerpt:
      "The sky is clear, but I see a blur \nIs the world slowly fading? it will, for sure \nColors slowly melt, as a wave of water runs through my vision \nCould this be a dream, could this be an illusion?",
  },
  {
    id: 3,
    title: "Intertwining Ironies",
    excerpt:
      "A beautiful couple sleeps in the calm, comforting night \n A homeless child lays in the street, hugging his mother tight \nRipples in lake shimmer under the moonlight's embrace \nBut the hungry child's flowing tears are full of might and grace",
  },
];
const CreativeWorks = () => {
  const [currentPoem, setSelectCurrentPoem] = useState(1);
  const [interrupted, setInterrupted] = useState(false);

  useEffect(() => {
    let interval_id = setInterval(() => {
      if (!interrupted) {
        if (currentPoem === work_excerpts.length) {
          setSelectCurrentPoem(1);
        } else {
          setSelectCurrentPoem(currentPoem + 1);
        }
      }
    }, 6000);
    return () => clearInterval(interval_id);
  }, [currentPoem,interrupted]);

  return (
    <div id="creative-works">
      <div className="creative-intro">
        Beneath the systematic world of coding, lies a true soul that knows how
        to live and express. <br />
        Outside work, I enjoy writing poetry. Visit my{" "}
        <a
          href="https://hubpages.com/@johnmarkcabusog"
          target="_blank"
          rel="noreferrer"
        >
          hubpages profile
        </a>{" "}
        now!
      </div>
      <div className="create-bullet-section">
        {work_excerpts.map((w, index) => {
          return (
            <div
              key={index}
              className={`creative-bullet ${
                w.id === currentPoem ? "selected" : ""
              }`}
              onClick={() => {
                setSelectCurrentPoem(w.id);
                setInterrupted(true);
              }}
            ></div>
          );
        })}
      </div>

      {work_excerpts.map((w, index) => {
        return (
          <div
            key={index}
            className={`poem-accordion ${
              w.id === currentPoem ? "selected-excerpt" : ""
            }`}
          >
            {w.excerpt}
            <div className="piece-title">- {w.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CreativeWorks;
