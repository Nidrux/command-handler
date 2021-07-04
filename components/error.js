module.exports.error = (error) => {
    console.log("\x1b[31m", error);
    console.log("\x1b[0m", '\r');
} 