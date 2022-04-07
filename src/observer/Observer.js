class Observer {
  constructor() {
    this.observers = [];
  }

  notify(key, data = undefined) {
    this.observers.forEach((item) => {
      if (item.key === key) {
        item.observer(data);
      }
    });
  }

  subscribe(item) {
    this.observers.push(item);
  }
}

export default Observer;
