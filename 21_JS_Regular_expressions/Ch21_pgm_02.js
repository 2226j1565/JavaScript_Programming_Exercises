function tenMostFrequentWords(paragraph, topN = 10) {
    const normalizedText = paragraph.toLowerCase().replace(/[^\w\s]/g, '');
    const words = normalizedText.split(/\s+/);
    const frequencyMap = {};
    words.forEach(word => {
        if (word) { 
            frequencyMap[word] = (frequencyMap[word] || 0) + 1;
        }
    });
    const frequencyArray = Object.entries(frequencyMap).map(([word, count]) => ({ word, count }));
    frequencyArray.sort((a, b) => b.count - a.count);
    return frequencyArray.slice(0, topN);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));


console.log(tenMostFrequentWords(paragraph, 10));
