// code your solution here

function superbowlWin(record) {

    function isTrue(element) {
        return(element.result === "W")
    }//return record.find(isTrue)
    const result = record.find(isTrue)
    if (result === undefined) {
        return undefined
    } else {
        return result.year;
    }
}
superbowlWin(record)


