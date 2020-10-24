const fetch = require("node-fetch");
const { uniqueNamesGenerator, names } = require("unique-names-generator");
const randomstring = require("randomstring");
const count = process.argv.slice(2);

genertator();

function genertator() {
  if (count.length > 0 && count[0] > 1) {
    for (let i = 0; i < count[0]; i++) {
      accountGenerator();
    }
  } else {
    console.log("Count parameter is missing!");
  }
}

function responsesGenerator(username) {
  fetch(
    `https://patient-prep.firebaseio.com/answers/${username}/responses.json`,
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PATCH",
      body: JSON.stringify(getResponsesData()),
    }
  );
}

function accountGenerator() {
  let username = nameGenerator();
  fetch(`https://patient-prep.firebaseio.com/users/auth/${username}.json`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "PATCH",
    body: JSON.stringify({
      fullname: `${username} ${nameGenerator()}`.replace(/\b\w/g, (l) =>
        l.toUpperCase()
      ),
      password: randomstring.generate(7),
      age: Math.floor(Math.random() * 95) + 25,
    }),
  }).then(() => {
    responsesGenerator(username);
    console.log(
      `username ${username} created on ${new Date()
        .toJSON()
        .slice(0, 19)
        .replace(/[-T]/g, ":")} `
    );
  });
}

function getResponsesData() {
  const data = {
    A: {
      ans: "Yes",
    },
    B: {
      ans: "Yes",
    },
    C: {
      ans: "Yes",
    },
    D: {
      ans: "Yes",
    },
    E: {
      ans: "Yes",
    },
    F: {
      ans: "Yes",
    },
  };
  return data;
}

function nameGenerator() {
  const shortName = uniqueNamesGenerator({
    dictionaries: [names],
    style: "lowerCase",
  });
  return shortName;
}
