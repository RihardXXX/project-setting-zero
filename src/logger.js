const logger = () => {
  const log = (item) => {
    console.log('======');
    console.log(item);
    console.log('======');
  };
  return Object.freeze({
    log,
  });
};

export default logger;
