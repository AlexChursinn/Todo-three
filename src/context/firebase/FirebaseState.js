import axios from "axios";
import { useReducer } from "react";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";

/* const url = process.env.REACT_APP_DB_URL; */

export const FireBaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(
      `https://react-hooks-6a95f-default-rtdb.firebaseio.com/notes.json`
    );

    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({
      type: FETCH_NOTES,
      payload,
    });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    try {
      const res = await axios.post(
        `https://react-hooks-6a95f-default-rtdb.firebaseio.com/notes.json`,
        note
      );

      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch({
        type: ADD_NOTE,
        payload,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(
      `https://react-hooks-6a95f-default-rtdb.firebaseio.com/notes/${id}.json`
    );

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
