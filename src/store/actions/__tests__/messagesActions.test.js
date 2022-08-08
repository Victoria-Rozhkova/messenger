import {
  getMessages,
  getMessagesThunk,
  GET_MESSAGES,
} from "../messages/messagesActions";

describe("getMessages tests", () => {
  it("returns obj with type and payload", () => {
    const payload = {};
    const expected = {
      type: GET_MESSAGES,
      payload,
    };

    const received = getMessages(payload);
    expect(expected).toEqual(received);
  });
});

describe("getMessagesThunk tests", () => {
  it("calls fn passed as an arg with getMessages", () => {
    const mockDispatch = jest.fn();
    getMessagesThunk()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getMessages());
  });
});
