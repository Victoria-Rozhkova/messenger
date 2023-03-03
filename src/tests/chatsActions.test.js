const { GET_CHATS, getChats, getChatsThunk } = require("store/actions/chatsActions");

describe("getChats tests", () => {
  it("returns obj with type and payload", () => {
    const payload = {};
    const expected = {
      type: GET_CHATS,
      payload,
    };

    const received = getChats(payload);
    expect(expected).toEqual(received);
  });
});

describe("getChatsThunk tests", () => {
  it("calls fn passed as an arg with getChats", () => {
    const mockDispatch = jest.fn();
    getChatsThunk()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getChats());
  });
});