const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
};

module.exports.dequeue = () => {
  if (messages === []) {
    return undefined;
  }
  // returns undefined if messages array is empty
  return messages.shift();
};