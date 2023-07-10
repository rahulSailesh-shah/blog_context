import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: payload.title,
          content: payload.content,
        },
      ];

    case "edit_post":
      return state.map((blog) => {
        if (blog.id === payload.id) {
          return payload;
        } else {
          return blog;
        }
      });

    case "delete_post":
      return state.filter((post) => post.id !== payload);

    default:
      return state;
  }
};

const addPost = (dispatch) => {
  return ({ title, content }, callback) => {
    dispatch({ type: "add_post", payload: { title, content } });
    callback();
  };
};

const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id });
  };
};

const editPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_post", payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addPost, deletePost, editPost },
  []
);
