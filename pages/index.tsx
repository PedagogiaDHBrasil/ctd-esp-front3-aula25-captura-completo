import type { NextPage } from "next";
import Head from "next/head";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import UserProfiles from "../components/UserProfiles";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const methods = useForm({ mode: "onChange" });
  const onSubmit = methods.handleSubmit((data) => {
    alert("Sua conta foi registrada com sucesso!");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <h1>Crie seu usuário para iniciar sua associação.</h1>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <InputField
            name="Email"
            autocomplete={["@gmail.com", "@hotmail.com"]}
          />
          <InputField name="Nome" />
          <InputField name="Sobrenome" />
          <SelectField name="plan" options={["Básico", "Padrão", "Premium"]} />
          {/* Adicionamos o componente ao formulário */}
          <UserProfiles />
          <button disabled={!methods.formState.isValid}>Próximo</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Home;
