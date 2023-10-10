import React from "react";
import hideView from "../assets/hide.svg";
import showView from "../assets/view.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../features/preview";

const PreviwButton = () => {
  const previewData = useSelector((state) => state.preview);
  console.log(previewData);

  const dispatch = useDispatch();

  return (
    previewData && (
      <button
        onClick={() => dispatch(togglePreview())}
        className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center  text-slate-50"
      >
        <img
          className="w-5 mr-3"
          src={previewData.preview ? hideView : showView}
          alt=""
        />
        <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
      </button>
    )
  );
};

export default PreviwButton;
