const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const userSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  surnames: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 1, // 0: gerente, 1: user
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: "Es necesario un e-mail válido para registrarse",
    match: [/.+\@.+\..+/, "Pro favor, ingrese un correo electrónico válido"],
    unique: [true, "Este e-mail ya está registrado"],
  },
  hashed_password: {
    type: String,
  },
  salt: {
    type: String,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  }
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) == this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log(err);
      return "none";
    }
  },
};

module.exports = mongoose.model("User", userSchema);