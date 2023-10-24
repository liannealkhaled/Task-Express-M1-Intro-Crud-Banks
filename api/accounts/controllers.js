const accounts = require("../../accounts");

const getAllAccounts = (req, res) => {
  res.status(200).json(accounts);
};

const addAccount = (req, res) => {
  const username = req.body.username;
  const funds = req.body.funds;
  //   const newAccount = req.body;
  const id = accounts[accounts.length - 1].id + 1;

  if (!username || !funds) {
    return res.status(400).json("please enter name and price");
  }
  const newAccount = { username, funds, id };
  accounts.push(newAccount);
  //   const newAccount2 = accounts.push({ id, ...req.body });
  return res.status(201).json(accounts);
};

const deleteAccount = (req, res) => {
  const { id } = req.params;
  accounts.forEach((account, index) => {
    if (account.id == id) {
      accounts.splice(index, 1);
    }
    res.status(204).end();
  });
};

const updateAccount = (req, res) => {
  const { id } = req.params;
  const { username, funds } = req.body;

  const account = accounts.find((account) => {
    return account.id == id;
  });
  if (username) {
    account.username = username;
  }
  if (funds) {
    account.username = username;
  }
  res.status(200).json(account);
};
module.exports = { getAllAccounts, addAccount, deleteAccount, updateAccount };
