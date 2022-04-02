const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let crypto = require("crypto");

exports.hashString = (string) => {
  return bcrypt.hashSync(string, Number.parseInt(process.env.SALT_ROUND));
};

exports.compareString = (string, hashString) =>
  bcrypt.compareSync(string, hashString);

exports.currentDateFullString = function () {
  var d = new Date(),
    dformat =
      [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
  return dformat;
};

exports.formatDate = function (date = new Date().now()) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

exports.generateUID = function () {
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

exports.extractString = (str) => {
  return str.substring(str.lastIndexOf("<#>") + 3, str.lastIndexOf("</#>"));
};

exports.randomToken = (length = 48) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, function (err, buffer) {
      var token = buffer.toString("hex");
      if (err) reject(err);
      else resolve(token);
    });
  });
};

exports.generateAccessToken = (data) => {
  return jwt.sign(data.toJSON(), process.env.TOKEN_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

exports.splitArray = (arr, length) => {
  let newArray = [];
  let noOfArrays = Math.ceil(arr.length / length);

  if (!length) {
    return arr;
  }

  let startIndex = 0;
  for (let i = 0; i < noOfArrays; i++) {
    newArray = [
      ...newArray,
      arr.slice(startIndex, startIndex + parseInt(length)),
    ];
    startIndex += parseInt(length);
  }

  return newArray;
};
