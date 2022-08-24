console.log("Hello World!\n==========\n");

// Exercise 1 Section

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum (arr) {
    let sum = 0;

    arr.forEach ((number) => {
        sum += number;
    })

    return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "The Lies of Lamora Locke";
favBook.author = "Scott Lynch";
favBook.pageCount = 650;
favBook.readCount = 1;

console.log(favBook);

function info() {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;

}

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "Red Seas Under Red Skies",
    author: "Scott Lynch",
    pageCount: 700,
    readCount: 1,
    info,
};

console.log(favBook2.info());

//Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords (sentence) {
    let result = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord); 
    }

    return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Lucas"));

// exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    let headers = data.slice(0, data.indexOf("\n")).split(",");
    let valuesLists = data.slice(data.indexOf("\n") + 1).split ("\n");

    const customArr = valuesLists.map((row) => {
        let values = row.split(",")
        let obj = {}
        values.forEach((col, idx) => {
            if(idx < headers.length) {
            obj[headers[idx]] = col;
        } else {
            obj[`misc ${idx}`] = col;
        }
    });
    return obj;
});

    return customArr;

}

console.log(csvConverter(csvData));