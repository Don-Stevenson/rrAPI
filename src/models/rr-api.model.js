// rrAPI-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

// Route is
// http://localhost:3030/rr-api
//*****************************/
module.exports = function (app) {
  const modelName = "rrApi";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      taskId: {
        type: Number,
        required: [true, "Task id is required"],
      },
      driverName: {
        first: {
          type: String,
          required: [true, "First Name is required"],
        },
        last: {
          type: String,
          required: [true, "Last Name is required"],
        },
      },
      location: {
        type: String,
        required: [true, "Task location is required"],
      },
      taskType: {
        type: String,
        required: [true, "Task type is required: drop off, pick up or other"],
      },
      date: {
        type: Date,
        required: [true, "A date is required"],
      },
      startTime: {
        type: String,
        required: [
          true,
          "Start time is required. Please use 24 hour clock format",
        ],
      },
      stopTime: {
        type: String,
        required: [
          true,
          "Stop time is required. Please use 24 hour clock format",
        ],
      },
    },

    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
