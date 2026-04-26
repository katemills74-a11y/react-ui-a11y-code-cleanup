// assets.jsx
import beforeCode from "../../screenshots/beforeCode.png";
import beforeUi from "../../screenshots/beforeUi.png";
import afterCode from "../../screenshots/afterCode.png";

export const assets = {
  beforeUi: {
    src: beforeUi,
    alt: "Screenshot of the original UI before cleanup",
    className: "image",
  },
  beforeCode: {
    src: beforeCode,
    alt: "Screenshot of the original code before cleanup",
    className: "imageCode",
  },

  afterCode: {
    src: afterCode,
    alt: "Screenshot of the refactored code after cleanup",
    className: "imageCode",
  },
};
