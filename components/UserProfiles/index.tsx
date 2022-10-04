import { useFieldArray } from "react-hook-form";
import InputField from "../InputField";
import styles from "./UserProfiles.module.css";

const UserProfiles = () => {
  // Inicializa o hook e obtém a propriedade "fields", que
  // conterá um array com nossos campos
  const { fields, append, remove } = useFieldArray({
    name: "userProfiles",
  });

  // Criamos uma função para adicionar um novo perfil
  const addProfile = () => append({ value: "" });

  // Criamos uma função para remover o perfil com base no index
  const removeProfile = (index: number) => remove(index);

  return (
    <div className="inputContainer">
      <p>Perfis de usuário:</p>
      {/* Adicione um botão que nos permita adicionar um novo perfil de usuário e passar nossa função dentro do evento onClick.
       */}
      <button
        id="add-profile-btn"
        type="button"
        onClick={addProfile}
        className={styles.addButton}
      >
        +
      </button>
      {/* Fazemos um mapa do array que está armazenado em
          a propriedade "fields" e para cada um renderizamos a entrada
          junto com o botão para removê-lo
        */}
      {fields.map((field, index) => (
        // Adicionamos a chave usando o id de cada campo que é atribuído por
        // a livraria
        <div className={styles.profilesContainer} key={field.id}>
          {/* Atribuímos dinamicamente o nome usando o mesmo valor
             que usamos como propriedade do hook, mais o índice e a propriedade
             "value" que cada elemento tem. Adicionamos um placeholder genérico para todos
             os casos
             */}
          <InputField
            name={`userProfiles.${index}.value`}
            placeholder="Nome do perfil"
            data-testid="add-profile-input"
          />
          {/* Adicionamos um botão ao lado da entrada e chamamos a função
               passando o índice do elemento para remover */}
          <button
            type="button"
            className={styles.removeButton}
            onClick={() => removeProfile(index)}
          >
            x
          </button>
        </div>
      ))}
      <br />
    </div>
  );
};

export default UserProfiles;
