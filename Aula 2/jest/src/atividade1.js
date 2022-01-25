module.exports = class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        if (string === '' || string === null || string === undefined) {
            throw new Error('String cannot be empty')
        }
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        const stringToBeMatched = new RegExp(subStr, 'g')
        const isMatched = this.string.match(stringToBeMatched)
        return isMatched ? isMatched[0].substring(0, 1): ''
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        const stringToBeMatched = new RegExp(subStr, 'g')
        const isMatched = this.string.match(stringToBeMatched)
        return isMatched ? isMatched[0].substring(isMatched[0].length -1): ''
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const stringToBeMatched = new RegExp(`${subStr1}(.*)${subStr2}`)
        const isMatched = this.string.match(stringToBeMatched)
        return isMatched ? isMatched[1] : ''
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string.length < 2) return ''
        const newString = this.string.substring(0,2) + this.string.substring(this.string.length - 2)
        return newString
    }

    /**
    Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        const firstChar = str1[0]
        const toMatch = new RegExp(firstChar,"ig");
        const newString = str1.replace(toMatch, (char, index) => {
            return index ?  '*' : char
        })
        return newString
    }

}