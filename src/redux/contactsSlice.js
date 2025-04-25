import { createSlice } from "@reduxjs/toolkit";

// 1 Початкові рамки, в яких працює слайс.
const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  ],
};

// 2 Викликаємо createSlice функцію, яку треба налаштувати. Поверне {} з екшенами
// та редьюсером
const slice = createSlice({
  // 3. ім'я слайсу
  name: "contacts",
  // 4 передаємо початковий стан (описуємо тут)
  initialState,
  // 5 створюємо редьюсери (міні Функції, які працюють зі станом), де будуть описані екшени

  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// 6.Експортуємо всі екшени (функції з редьюсера) до зовншінього світу
export const { addContact, deleteContact } = slice.actions;

// 7 .Повертаємо для стору редьюсер зі слайсу
const contactsReducer = slice.reducer;
export default contactsReducer;
