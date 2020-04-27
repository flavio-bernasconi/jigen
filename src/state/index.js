import { types as t } from "mobx-state-tree";

export const State = t
  .model("State", {
    filter: t.optional(t.string, ""),
    dataset: t.optional(t.array(t.frozen()), []),
    priceSelected: t.optional(t.number, 0),
    numberSelected: t.optional(t.number, 0),
    stepOne: t.optional(t.boolean, true),
    stepTwo: t.optional(t.boolean, false),
    stepThree: t.optional(t.boolean, false),
  })
  .actions((self) => ({
    setDataset(value) {
      if (self.filter !== "") {
        const clone = value.slice();
        const filtered = clone.filter((e) =>
          e.name.toLowerCase().startsWith(self.filter)
        );
        self.dataset = filtered;
      } else {
        self.dataset = value;
      }
    },
    getPrice(price) {
      self.priceSelected = Number(price);
    },
    setCurrentStep(nameStep, prevStep) {
      self[prevStep] = false;
      self[nameStep] = true;
    },
    setNumber(num) {
      self.numberSelected = Number(num);
    },
    filterDataset(filter) {
      self.filter = filter;
    },
  }))
  .views((self) => ({
    get amounts() {
      const day = Number(
        ((self.priceSelected / 20) * self.numberSelected).toFixed(2)
      );
      const multi = (n) => Number((day * n).toFixed(2));

      console.log(multi);

      return { day, week: multi(7), month: multi(30), year: multi(365) };
    },
  }));
