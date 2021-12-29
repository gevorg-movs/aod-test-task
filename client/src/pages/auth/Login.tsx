import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";

const Login: FC = () => {
  const { errors } = useTypedSelector((state) => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(AuthActionCreators.login(form));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={form.email}
            onChange={changeHandler}
          />

          {errors?.email?.msg && (
            <div className="invalid-feedback d-block">{errors?.email?.msg}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={form.password}
            onChange={changeHandler}
          />
          {errors?.password?.msg && (
            <div className="invalid-feedback d-block">
              {errors?.password?.msg}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;