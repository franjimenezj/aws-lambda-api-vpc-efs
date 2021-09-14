const fs = require("fs").promises;

const TIMESTAMP_FILE_PATH = "/mnt/efs/content";

module.exports.hello = async function (event) {

  console.log("start lambda function");

  await addNewTimeStamp(new Date().getTime());

  return sendRes(200, await getTimeStamps());

};

const addNewTimeStamp = async (timeStamp) => {
  try {
    await fs.appendFile(TIMESTAMP_FILE_PATH, timeStamp + "\n");
  } catch (error) {
    console.log(error);
  }
};

const getTimeStamps = async () => {
  try {
    return await fs.readFile(TIMESTAMP_FILE_PATH, "utf8");
  } catch (error) {
    console.log(error);
  }
};

const sendRes = (status, body) => {
  return {
    statusCode: status,
    body: JSON.stringify({
      message: body
      })
  };
};
