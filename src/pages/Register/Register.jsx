import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { registerThunk } from '../../redux/auth/operation';
import { toast } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then()
      .catch(error => toast.error('Registration failed!'));
    reset();
  };

  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-neutral-content">
        <form className="card-body" onSubmit={handleSubmit(submit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register('name')}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register('password')}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ffd300] hover:bg-[#ffa902] ">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
