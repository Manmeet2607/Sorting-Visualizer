import AForInsertionSort from "./AForInsertionSort.js";
import {
  changeBackgroundColor,

  swapBars,
  resetBarStyleDefault,

} from "../../Helper.js";

const InsertionSort = (array, speed) => {
  // Disabling the buttons so that the animation cannot be interrupted.
  // disableButtons();

  // Getting the animations which has been generated in the "getInsertionSortAnimations" function.
  const animations = AForInsertionSort(array);

  for (let i = 0; i < animations.length; i += 4) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      doSwap = animations[i + 2],
      sortedTill = animations[i + 3];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of comparing elements.
        changeBackgroundColor(comparingElement1, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap === true) {
            // Changing the color-bar of elements which has to be swapped.
            changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
            changeBackgroundColor(comparingElement2, "rgba(144,238,144, 0.9)");
            // Actually swapping the elements (heights).
            swapBars(comparingElement1, comparingElement2);
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
  
  export default InsertionSort;