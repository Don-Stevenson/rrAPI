// rrAPI-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "rrApi";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        first: {
          type: String,
          required: [true, "First Name is required"],
        },
        last: {
          type: String,
          required: false,
        },
      },
      task: {
        taskName: {
          type: String,
          required: [false],
        },
        taskType: {
          type: String,
          required: [
            true,
            "Task Type required. Choose: PickUp, DropOff, Other",
          ],
          // validate: {
          //   validator: (v) => {
          //     if (v === 'PickUp' || 'DropOff' || 'Other') {
          //       return true;
          //     }
          //   },
          //   message: '{VALUE} is not a validate task!',
          // },
        },
        taskStartTime: {
          type: String,
          required: [true, "Task Start time is required"],
        },
        taskEndTime: {
          type: String,
          required: [true, "Task End time is required"],
        },
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
