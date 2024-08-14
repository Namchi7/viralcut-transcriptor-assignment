import { useEffect, useState } from "react";
import EditForm from "./EditForm";

const transcript = [
  { word: "This", start_time: 0, duration: 400 },
  { word: "is", start_time: 400, duration: 300 },
  { word: "a", start_time: 700, duration: 200 },
  { word: "sample", start_time: 900, duration: 500 },
  { word: "transcript", start_time: 1400, duration: 600 },
  { word: "that", start_time: 2000, duration: 300 },
  { word: "demonstrates", start_time: 2300, duration: 500 },
  { word: "how", start_time: 2800, duration: 300 },
  { word: "to", start_time: 3100, duration: 200 },
  { word: "create", start_time: 3300, duration: 400 },
  { word: "longer", start_time: 3700, duration: 400 },
  { word: "transcripts", start_time: 4100, duration: 500 },
  { word: "with", start_time: 4600, duration: 300 },
  { word: "more", start_time: 4900, duration: 200 },
  { word: "complex", start_time: 5100, duration: 400 },
  { word: "data", start_time: 5500, duration: 500 },
  { word: "structures", start_time: 6000, duration: 600 },
  { word: "to", start_time: 6600, duration: 200 },
  { word: "handle", start_time: 6800, duration: 400 },
  { word: "longer", start_time: 7200, duration: 400 },
  { word: "sentences", start_time: 7600, duration: 500 },
  { word: "and", start_time: 8100, duration: 200 },
  { word: "ensure", start_time: 8300, duration: 400 },
  { word: "they", start_time: 8700, duration: 300 },
  { word: "are", start_time: 9000, duration: 200 },
  { word: "handled", start_time: 9200, duration: 500 },
  { word: "correctly", start_time: 9700, duration: 600 },
  { word: "in", start_time: 10300, duration: 200 },
  { word: "a", start_time: 10500, duration: 100 },
  { word: "systematic", start_time: 10600, duration: 500 },
  { word: "and", start_time: 11100, duration: 200 },
  { word: "organized", start_time: 11300, duration: 400 },
  { word: "way", start_time: 11700, duration: 300 },
  { word: "for", start_time: 12000, duration: 200 },
  { word: "various", start_time: 12200, duration: 300 },
  { word: "applications", start_time: 12500, duration: 500 },
  { word: "like", start_time: 13000, duration: 200 },
  { word: "captioning", start_time: 13200, duration: 600 },
  { word: "subtitles", start_time: 13800, duration: 400 },
  { word: "and", start_time: 14200, duration: 200 },
  { word: "speech-to-text", start_time: 14400, duration: 800 },
  { word: "conversion", start_time: 15200, duration: 500 },
  { word: "services", start_time: 15700, duration: 400 },
  { word: "in", start_time: 16100, duration: 200 },
  { word: "a", start_time: 16300, duration: 100 },
  { word: "seamless", start_time: 16400, duration: 500 },
  { word: "and", start_time: 16900, duration: 200 },
  { word: "efficient", start_time: 17100, duration: 400 },
  { word: "manner", start_time: 17500, duration: 300 },
  { word: "to", start_time: 17800, duration: 200 },
  { word: "facilitate", start_time: 18000, duration: 500 },
  { word: "better", start_time: 18500, duration: 300 },
  { word: "understanding", start_time: 18800, duration: 600 },
  { word: "and", start_time: 19400, duration: 200 },
  { word: "interaction", start_time: 19600, duration: 500 },
  { word: "with", start_time: 20100, duration: 300 },
  { word: "various", start_time: 20400, duration: 300 },
  { word: "types", start_time: 20700, duration: 200 },
  { word: "of", start_time: 20900, duration: 100 },
  { word: "media", start_time: 21000, duration: 400 },
  { word: "and", start_time: 21400, duration: 200 },
  { word: "content", start_time: 21600, duration: 400 },
  { word: "in", start_time: 22000, duration: 200 },
  { word: "a", start_time: 22200, duration: 100 },
  { word: "way", start_time: 22300, duration: 300 },
  { word: "that", start_time: 22600, duration: 200 },
  { word: "is", start_time: 22800, duration: 200 },
  { word: "both", start_time: 23000, duration: 200 },
  { word: "user-friendly", start_time: 23200, duration: 700 },
  { word: "and", start_time: 23900, duration: 200 },
  { word: "technically", start_time: 24100, duration: 500 },
  { word: "robust", start_time: 24600, duration: 400 },
  { word: "in", start_time: 25000, duration: 200 },
  { word: "the", start_time: 25200, duration: 100 },
  { word: "context", start_time: 25300, duration: 400 },
  { word: "of", start_time: 25700, duration: 100 },
  { word: "modern", start_time: 25800, duration: 300 },
  { word: "digital", start_time: 26100, duration: 400 },
  { word: "communication", start_time: 26500, duration: 600 },
  { word: "and", start_time: 27100, duration: 200 },
  { word: "information", start_time: 27300, duration: 500 },
  { word: "processing.", start_time: 27800, duration: 700 },
];

const Transcriptor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState();
  const [editIndex, setEditIndex] = useState();

  const editWord = (index) => {
    setEditIndex(index);
    setEditData(transcript[index]);
    setEditOpen(true);
  };

  const saveEditedData = (index, item) => {
    console.log(item);
    transcript[index] = { ...item };

    console.log(transcript[index]);
  };

  const getHighlightedWordIndex = (time) => {
    return transcript.findIndex(
      (item) =>
        time >= item.start_time && time < item.start_time + item.duration
    );
  };

  const highlightedIndex = getHighlightedWordIndex(currentTime);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const newTime = prevTime + 50;

        return newTime;
        // return newTime >
        //   transcript[transcript.length - 1].start_time +
        //     transcript[transcript.length - 1].duration
        //   ? 0
        //   : newTime;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <>
      <div className="w-full max-w-[75rem] h-fit grid grid-cols-2 gap-4 p-4">
        <div className="aspect-[16/9] flex flex-col justify-center items-center gap-2 border border-solid border-black">
          <button
            className="w-max min-w-40 px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-sm shadow-sm hover:shadow-lg transition-all duration-150"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            className="w-max min-w-40 px-3 py-2 bg-red-200 hover:bg-red-300 rounded-sm shadow-sm hover:shadow-lg transition-all duration-150"
            onClick={() => setCurrentTime(0)}
          >
            Reset
          </button>
        </div>

        <div className="aspect-[16/9] border border-solid border-black p-2">
          {transcript.map((item, index) => (
            <span
              key={index}
              style={{
                backgroundColor:
                  index === highlightedIndex ? "yellow" : "transparent",
                transition: "background-color 0.1s ease-in-out",
              }}
              onClick={() => editWord(index)}
            >
              {item.word}{" "}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{ display: editOpen ? "flex" : "none" }}
        className="w-full max-w-[75rem] p-2"
      >
        <EditForm
          index={editIndex}
          item={editData}
          saveFunc={saveEditedData}
          setEditOpen={setEditOpen}
        />
      </div>
    </>
  );
};

export default Transcriptor;
