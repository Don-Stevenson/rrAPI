// rrAPI-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

// Route is
// http://localhost:3030/rr-api
//*****************************/
module.exports = function (app) {
  const modelName = 'rrApi';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    
    taskInfo: {
      driverName : {
        first: {
          type: String,
          required: [true, 'First Name is required']
        },
        last: {
          type: String,
          required: false
        }
      },
      type: {
        type: String,
        required: [true, 'Task type is required: drop off, pick up or other']
      },
      date: {
        type: String,
        required: false
      },
      startTime: {
        type: String,
        required: false
      },
      stopTime: {
        type: String,
        required: false
      }
    }
    
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
