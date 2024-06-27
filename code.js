const returnFirstWord = () => {
    const firstWord = ['Always', 'Forever', 'Continually', 'Consistently', 'Repeatedly', 'Invariably']
    return firstWord[Math.floor(Math.random() * 6)]
  };

const returnSecondWord = () => {
    const secondWord = ['be', 'remain', 'stay']
    return secondWord[Math.floor(Math.random() *  3)]
};

const returnThirdWord = () => {
    const thirdWord = ['real.', 'humble.', 'honest.', 'kind.', 'true.', 'exceptional.', 'sensational.', 'good.', 'great.']
    return thirdWord[Math.floor(Math.random() * 9)]
};

//Generate a sentence
const sentence = () => {
    console.log(`${returnFirstWord()} ${returnSecondWord()} ${returnThirdWord()}`)
};

sentence();