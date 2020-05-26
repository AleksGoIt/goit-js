const checkForSpam = function (message) {
  const toLowerCaseMessage = message.toLowerCase();

  return (
    toLowerCaseMessage.includes("sale") || toLowerCaseMessage.includes("spam")
  );
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
