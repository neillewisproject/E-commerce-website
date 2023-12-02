import mongoose from "mongoose";

const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    // await mongoose.disconnect();
  }
  const db = await mongoose.connect('mongodb://monogdbdemo:11pbF2CmFjUoxXcRK47S4WIymqz26eiCmqHBstq89sZ2PiYs0jp83K2a5gnvTjdkdxZlXFEc5P4ZACDbVKzJAA%3D%3D@monogdbdemo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@monogdbdemo@');

  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      // await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
