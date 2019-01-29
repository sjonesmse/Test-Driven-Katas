

const wrap = (line, maxLen) => {

    if ((line.length <= maxLen) || (maxLen === 0)) {
        return line;
    }

    const indexOfBlank = line.lastIndexOf(' ', maxLen);
    let split;
    let offset;
    if (indexOfBlank > -1) {
        split = indexOfBlank;
        offset = 1;
    } else {
        split = maxLen;
        offset = 0;
    }
    return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);

}// line = '\n'

//move to the (maxLen-1) index location
//if str.charAt(maxLen) !== ' '
//then look for lastIndexOf (' ')
//insert \n 

module.exports = wrap;
