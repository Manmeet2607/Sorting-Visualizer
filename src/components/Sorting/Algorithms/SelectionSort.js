import AForSelectionSort from "./AForSelectionSort";
import { changeBackgroundColor,
    swapBars,
    resetBarStyleDefault
} from "../../Helper.js";

const SelectionSort = (array, speed) => {
  // Disabling the buttons so that the animation cannot be interrupted.
//   disableButtons();

  // Getting the animations which has been generated in the "getBubbleSortAnimations" function.
  const animations = AForSelectionSort(array);

  for (let i = 0; i < animations.length; i += 6) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      minIndexElement = animations[i + 2],
      doSwap = animations[i + 3],
      isFinalElement = animations[i + 4],
      finalElement = animations[i + 5];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of current elements.
        changeBackgroundColor(minIndexElement, "rgba(0,0,255, 0.9)");
        changeBackgroundColor(comparingElement1, "rgba(0,0,0, 0.9)");
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap === true) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
          swapBars(comparingElement1, minIndexElement);
        }
      }, i * speed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

  

    Promise.all([promise1])
    // Enabling the buttons when both the promises have been resolved.
    .then(console.log("hi"));
      }
  
      // Resetting the color-bar style to default after the animations end.
    resetBarStyleDefault(array, (animations.length + 5) * speed);
};

export default SelectionSort;