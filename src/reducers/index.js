import { ADD_REMINDER } from '../constants'

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random(),
    dueDate: action.dueDate,
  }
}

const reminders = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        reminder(action)
      ]
    default:
      return state
  }
}

export default reminders

