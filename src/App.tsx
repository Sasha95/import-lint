import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { batch } from "react-redux";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { map } from "lodash";

import classNames from "classnames";
import styles from "./app.module.scss";
import Picture from "./PiefEpAYraE.jpg";

import Header from "./header/Header";
import Layout from "./Layout";

const Schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive(),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const arr = [1, 2, 3, 4];
  axios.create();
  batch(() => {});
  const t = map(arr);
  return (
    <Fragment>
      <div className={classNames(styles.app)}>text</div>
      <img src={Picture} alt="" />
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", { required: true, maxLength: 30 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        <input type="submit" />
      </form>
      <Header />
      <Layout />
    </Fragment>
  );
}

export default App;
