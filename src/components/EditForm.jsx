import { useEffect, useRef } from "react";

import PropTypes from "prop-types";

const EditForm = ({ item, index, saveFunc, setEditOpen }) => {
  const wordRef = useRef();
  const startTimeRef = useRef();
  const durationRef = useRef();

  const closeEditForm = () => {
    wordRef.current.value = "";
    startTimeRef.current.value = "";
    durationRef.current.value = "";

    setEditOpen(false);
  };

  const saveData = () => {
    const word =
      wordRef.current.value.length > 0 ? wordRef.current.value : item.word;
    const duration =
      parseInt(durationRef.current.value) > 50
        ? parseInt(durationRef.current.value)
        : parseInt(item.duration);
    const start_time =
      parseInt(startTimeRef.current.value) < parseInt(item.start_time) - 50 ||
      parseInt(startTimeRef.current.value) >
        parseInt(item.start_time) + duration + 50
        ? parseInt(item.start_time)
        : parseInt(startTimeRef.current.value);

    console.log(
      parseInt(startTimeRef.current.value),
      parseInt(item.start_time) + duration + 50
    );

    saveFunc(index, {
      word,
      start_time,
      duration,
    });
    closeEditForm();
  };

  useEffect(() => {
    if (item) {
      wordRef.current.value = item.word;
      startTimeRef.current.value = item.start_time;
      durationRef.current.value = item.duration;
    }
  }, [item]);

  return (
    <div
      style={{ display: "flex" }}
      className="w-full flex flex-row justify-between items-center gap-4 bg-gray-100 border border-solid border-gray-200 rounded-sm p-2 mx-2 shadow-sm"
    >
      <div className="flex flex-row justify-start items-start gap-4">
        <div className="flex flex-row justify-start items-center gap-2">
          <label className="text-[0.9rem] font-medium">Word:</label>
          <input
            type="text"
            placeholder=""
            defaultValue={item?.word}
            ref={wordRef}
            className="w-[8rem] px-2 py-1 text-[0.9rem] font-medium border border-solid border-gray-300 rounded-sm m-0"
          />
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          <label className="text-[0.9rem] font-medium">Start Time:</label>
          <input
            type="number"
            placeholder=""
            defaultValue={item?.start_time}
            ref={startTimeRef}
            className="w-[8rem] px-2 py-1 text-[0.9rem] font-medium border border-solid border-gray-300 rounded-sm m-0"
          />
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
          <label className="text-[0.9rem] font-medium">Duration:</label>
          <input
            type="number"
            placeholder=""
            defaultValue={item?.duration}
            ref={durationRef}
            className="w-[8rem] px-2 py-1 text-[0.9rem] font-medium border border-solid border-gray-300 rounded-sm m-0"
          />
        </div>
      </div>

      <div className="w-fit flex flex-row justify-start items-center gap-2">
        <button
          className="w-fit min-w-40 px-3 py-2 bg-green-300 hover:bg-green-400 rounded-sm shadow-sm hover:shadow-lg transition-all duration-150 order-2"
          onClick={() => saveData()}
        >
          Save
        </button>

        <button
          className="w-fit min-w-40 px-3 py-2 bg-red-200 hover:bg-red-300 rounded-sm shadow-sm hover:shadow-lg transition-all duration-150 order-1"
          onClick={() => closeEditForm()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

EditForm.propTypes = {
  item: PropTypes.shape({
    word: PropTypes.string.isRequired,
    start_time: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  saveFunc: PropTypes.func.isRequired,
  setEditOpen: PropTypes.any.isRequired,
};

export default EditForm;
