import { Schema } from "mongoose";

export default new Schema({
  profile: {
    type: String,
    valiadte: {
      validator: function (v: string) {
        return /data:image\/[a-zA-Z]*;base64,[^\"]*/g.test(v);
      },
      message: "Profile is not valid name",
    },
  },
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9-_]+/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9-_]+/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g.test(v);
      },
      message: "{VALUE} is not valid email",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9~`!@#$%^&*()_+-={}|[\]\\:";'<>?,./]{8,}/g.test(v);
      },
      message: "not valid password",
    },
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9~`!@#$%^&*()_+-={}|[\]\\:";'<>?,./]{8,}/g.test(v);
      },
      message: "not valid password",
    },
  },
  accNo: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: function (v: string) {
        return /\d+/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
  bankName: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /\w+/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
  ifscCode: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[A-Z0-9]+/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
  upiId: {
    type: String,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /[0-9a-zA-Z@]+/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
  fundId: {
    type: Object,
    required: true,
  },
  image: {
    type: String,
    required: true,
    valiadte: {
      validator: function (v: string) {
        return /data:image\/[a-zA-Z]*;base64,[^\"]*/g.test(v);
      },
      message: "Image is not valid image",
    },
  },
  title: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9].*/g.test(v);
      },
      message: "{VALUE} is not valid title",
    },
  },
  location: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9-_ ]+/g.test(v);
      },
      message: "{VALUE} is not valid location",
    },
  },
  date: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /\d\/\d\/\d+/g.test(v);
      },
      message: "{VALUE} is not valid date",
    },
  },
  need: {
    type: Number,
    required: true,
    validate: {
      validator: function (v: string) {
        return /\d+/g.test(v);
      },
      message: "{VALUE} is not valid need",
    },
  },
  overview: [String],
  updates: [String],
  fromId: {
    type: String,
  },
  toId: {
    type: String,
  },
  amount: {
    type: String,
  },
  message: {
    type: String,
    validate: {
      validator: function (v: string) {
        return /\w.*/g.test(v);
      },
      message: "{VALUE} is not valid name",
    },
  },
});
