let data = ['Original string!', 'Second string!', 'Third string!'];

// eslint-disable-next-line no-unused-vars
class StringData {
  static async findAll() {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        const error = new Error('No strings available');
        error.status = 202;
        reject(error);
      }
      resolve(data);
    });
  }

  static async create(newString) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      data = [newString, ...data];
      resolve(newString);
    });
  }
}

module.exports = StringData;
