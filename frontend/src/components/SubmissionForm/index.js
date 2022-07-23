import { useState } from "react";
import "./submissionForm.css";

const linksURL = `https://revision-app-backend.herokuapp.com/links`;

export default function SubmissionForm({ setFormReturn, categories }) {
  const [Category, setCategory] = useState("");
  function handleCategoryInput(event) {
    setCategory(event.target.value);
  }
  const [Link, setLink] = useState("");
  function handleLinkInput(event) {
    setLink(event.target.value);
  }
  const [Description, setDescription] = useState("");
  function handleDescriptionInput(event) {
    setDescription(event.target.value);
  }
  const [Name, setName] = useState("");
  function handleNameInput(event) {
    setName(event.target.value);
  }

  async function postLink(event) {
    event.preventDefault();
    if (Category === "" || Link === "" || Description === "" || Name === "") {
      alert("Please fill in all form fields!");
      return;
    }
    const postBody = {
      category: Category,
      link: Link,
      description: Description,
      contributor: Name,
    };
    console.log(`Calling fetch with ${JSON.stringify(postBody)}`);

    const response = await fetch(linksURL, {
      method: "POST",
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(postBody),
    });
    const responseData = await response.json();
    console.log(responseData.payload);
    setFormReturn(responseData.payload);
    setCategory("");
    setLink("");
    setDescription("");
    setName("");
  }

  return (
    <div className="form-container">
      <form>
        <label htmlFor="category-input">
          Select a category or type a new one{" "}
        </label>
        <input
          id="category-input"
          type="text"
          placeholder="Category"
          list="links-category"
          required
          onChange={handleCategoryInput}
          value={Category || ""}
        />
        <datalist id="links-category">
          {categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </datalist>
        <label htmlFor="link-input">URL </label>
        <input
          id="link-input"
          type="text"
          placeholder="including http://"
          required
          value={Link || ""}
          onChange={handleLinkInput}
        />
        <label htmlFor="description-input">Description </label>
        <input
          id="description-input"
          type="text"
          placeholder="Description"
          required
          value={Description || ""}
          onChange={handleDescriptionInput}
        />
        <label htmlFor="name-input">Name </label>
        <input
          id="name-input"
          type="text"
          placeholder="Name"
          value={Name || ""}
          required
          onChange={handleNameInput}
        />
        <button onClick={postLink}>Submit</button>
      </form>
    </div>
  );
}
