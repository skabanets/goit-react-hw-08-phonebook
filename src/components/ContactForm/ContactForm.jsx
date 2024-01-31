import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { findContact } from 'helpers/findContact';
import { selectContacts } from '../../redux/contacts/slice';
import { addContact } from '../../redux/contacts/operation';

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const submit = data => {
    if (findContact(data.name, contacts)) return;
    dispatch(addContact(data));
    reset();
  };

  return (
    <form className="card-body" onSubmit={handleSubmit(submit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white font-bold">Email</span>
        </label>
        <input
          {...register('name')}
          type="text"
          placeholder="Enter contact name"
          className="input input-bordered"
          minLength={3}
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white font-bold">Password</span>
        </label>
        <input
          {...register('number')}
          type="tel"
          minLength={9}
          maxLength={13}
          placeholder="Enter phone number"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#ffd300] hover:bg-[#ffa902]">Add contact</button>
      </div>
    </form>
  );
};
