const randomBetweenOneAndFive = () => {
    return 1 + Math.random() * 4;
};

const randomBetweenOneAndSeven = () => {
    return Math.random() * 2 + randomBetweenOneAndFive();
};

randomBetweenOneAndSeven();