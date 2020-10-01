module.exports = (mongoose) => {
  const kittenSchema = new mongoose.Schema({
    name: String
  });

  const kittenModel = mongoose.model('kitten', kittenSchema);

  async function getKittens() {
    try {
      return await kittenModel.find();
    } catch (error) {
      console.error("getKitten:", error.message);
      return {};
    }
  }

  async function getKitten(id) {
    try {
      return await kittenModel.findById(id);
    } catch (error) {
      console.error("getKitten:", error.message);
      return {};
    }
  }

  async function createKitten(text) {
    let kitten = new kittenModel({name: text});
    return kitten.save();
  }

  async function bootstrap(count = 10) {
    let l = (await getKittens()).length;
    console.log("Kitten collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newKitten = new kittenModel({name: `Kitten number ${i}`});
        promises.push(newKitten.save());
      }
      return Promise.all(promises);
    }
  }

  return {
    getKittens,
    getKitten,
    createKitten,
    bootstrap
  }
}