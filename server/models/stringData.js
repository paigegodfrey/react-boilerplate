let data = ['Original string!', 'Second string!', 'Third string!'];

// eslint-disable-next-line no-unused-vars
class StringData {
  static async findAll() {
    if (data.length === 0) {
      const error = new Error('No strings available');
      error.status = 202;
      throw error;
    } else {
      return data;
    }
  }

  static async create(newString) {
    data = [newString, ...data];
    return newString;
  }
}

module.exports = StringData;
