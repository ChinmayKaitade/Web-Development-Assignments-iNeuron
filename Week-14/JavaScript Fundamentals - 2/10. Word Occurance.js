/*10. As a web developer, your task is to build a function that examines a sentence and counts 
how many times each unique word appears in it. Using a Map, the function efficiently keeps track
of the occurrence of each word in the sentence.*/

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);

// OUTPUT:

// Map(9) {
//     'please' => 2,
//     'submit' => 1,
//     'your' => 2,
//     'assignment' => 1,
//     'on' => 1,
//     'time' => 1,
//     'assignments' => 1,
//     'are' => 1,
//     'important' => 1
//   }

