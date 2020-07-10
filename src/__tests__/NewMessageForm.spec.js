import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import NewMessageForm from '../NewMessageForm';

describe('<NewMessageForm />', () => {
  let getByRole;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    let sendHandler;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({ getByRole } = render(<NewMessageForm onSend={sendHandler}/>));

      fireEvent.change(
        getByRole('textbox'), { target: { value: 'New message', } });

      fireEvent.click(getByRole('button'));
    });

    it('clears the text field', () => {
      expect(getByRole('textbox').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('New message');
    });
  });
});
