//Test out if date is in the format of "YYYY-MM-DD HH:MM:SS am"

function testPattern(input){
    const pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} (AM|PM|am|pm)$/;
    return pattern.test(input)
}

console.log(testPattern("2024-05-31 12:23:00 am"));
