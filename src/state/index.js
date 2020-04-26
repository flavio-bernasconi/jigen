import { types as t } from "mobx-state-tree";

export const State = t
  .model("State", {
    searchedWords: t.optional(t.string, ""),
    dataset: t.optional(t.array(t.frozen()), []),
    priceSelected: t.optional(t.number, 0),
    numberSelected: t.optional(t.number, 0),
    stepOne: t.optional(t.boolean, true),
    stepTwo: t.optional(t.boolean, false),
    stepThree: t.optional(t.boolean, false)
  })
  .actions(self => ({
    setDataset(value, filter) {
      const filtered = value.filter(e =>
        e.name.toLowerCase().startsWith(filter)
      );
      self.dataset = filtered;
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
    }
  }))
  .views(self => ({
    get amounts() {
      const day = Number(
        ((self.priceSelected / 20) * self.numberSelected).toFixed(2)
      );
      const multi = n => Number((self.priceSelected * n).toFixed(2));
      return { day, week: multi(7), month: multi(30), year: multi(365) };
    }
  }));
