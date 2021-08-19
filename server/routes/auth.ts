import express from 'express';
import joi from 'joi';
import bcrypt from 'bcryptjs';

import { Account } from '../models';

const router = express();

router.get('/check', async (req, res) => {
  if (!req.session || !req.session.info) return res.json({ code: 1 });
  const account = await Account.findById(req.session.info._id, { _id: true, id: true }).lean();

  if (!account) {
    req.session!.destroy(() => {});
    return res.json({ code: 1 });
  }

  req.session.info = {
    _id: account._id,
    id: account.id,
    role: account.role,
  };

  return res.json(account);
});

router.post('/login', async (req, res) => {
  const schema = joi.object().keys({
    id: joi.string().trim().min(3).max(20).required(),
    pw: joi.string().trim().min(3).max(20).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) return res.json({ code: 1 });

  const { id, pw } = result.value;

  const account = await Account.findOne({ id }, { _id: true, id: true, pw: true }).lean();
  if (!account) return res.json({ code: 2 });

  if (!bcrypt.compareSync(pw, account.pw)) return res.json({ code: 3 });

  req.session.info = {
    _id: account._id,
    id: account.id,
    role: account.role,
  };

  return res.json();
});

router.post('/register', async (req, res) => {
  const schema = joi.object().keys({
    id: joi.string().trim().min(3).max(20).required(),
    pw: joi.string().trim().min(3).max(20).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) return res.json({ code: 1 });

  const { id, pw } = result.value;

  const account = await Account.findOne({ id });
  if (account) return res.json({ code: 2 });

  const newAccount = new Account({
    id,
    pw: bcrypt.hashSync(pw, 8),
  });

  await newAccount.save();

  req.session.info = {
    _id: newAccount._id,
    id: newAccount.id,
    role: newAccount.role,
  };

  return res.json();
});

export default router;
