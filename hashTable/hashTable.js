class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    let newBucket = [];
    if (currentBucket) {
      let removedItem = null;
      newBucket = currentBucket.filter((item) => {
        if (item[0] !== key) {
          return item;
        } else {
          removedItem = item[0]
        }
      })
      this.data[address] = newBucket;
      return removedItem;
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];
    this.data.map((bucket) => {
      bucket.map((item) => {
        keys.push(item[0])
      })
    });
    return keys;
  }
}

const myHashTable = new HashTable(10);