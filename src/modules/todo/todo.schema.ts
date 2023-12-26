import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  id: String,
  title: String,
  status: {type: String, enum: ['todo', 'done', 'in progress']},
});