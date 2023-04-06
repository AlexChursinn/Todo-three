import { HIDE_ALERT, SHOW_ALERT } from "../types";

/* В payload будут содеражться тип текст алерта и тд */
const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

/* Редьюсер чистая функция которая проверяет action type и в зависимости от него возвращает изменненный state */
export const alertReducer = (state, action) => {
  /* Если action type нет то возращаем просто state */
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
