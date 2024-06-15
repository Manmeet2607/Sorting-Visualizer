import getBubbleSortAnimations from "./AForBubbleSort";
import { changeBackgroundColor,
    swapBars,
    resetBarStyleDefault
} from "../../Helper.js";

const BubbleSort = (array, speed) => {

     // Getting the animations which has been generated in the "getBubbleSortAnimations" function.
  const animations = getBubbleSortAnimations(array);
  for (let i = 0; i < animations.length; i += 5) {
    const comparingElement1 = animations[i];
    const comparingElement2 = animations[i + 1];
    const doSwap = animations[i + 2];
    const isFinalElement = animations[i + 3];
    const finalElement = animations[i + 4];


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
}

export default BubbleSort;