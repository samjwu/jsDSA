function rot13(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (c >= 'A' && c <= 'Z') {
            let asciiValue = c.charCodeAt(0);
            let alphabetValue = asciiValue - 65; // A = 65
            let shifted = (alphabetValue + 13) % 26;
            ans += String.fromCharCode(shifted + 65);
        } else {
            ans += c;
        }
    }

    return ans;
}
