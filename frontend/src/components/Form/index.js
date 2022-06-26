import { useState } from "react";
import "./form.css";
import swal from "sweetalert";

//POST to links URL
const linksURL = `http://localhost:5001/links`;

export default function Form({ setFormReturn, categories }) {
  //Category state
  const [Category, setCategory] = useState("");
  function handleCategoryInput(event) {
    setCategory(event.target.value);
    //console.log(Category);
  }
  //Link state
  const [Link, setLink] = useState("");
  function handleLinkInput(event) {
    setLink(event.target.value);
    //console.log(Link);
  }
  //Description state
  const [Description, setDescription] = useState("");
  function handleDescriptionInput(event) {
    setDescription(event.target.value);
    //console.log(Description);
  }
  //Contributor state
  const [Name, setName] = useState("");
  function handleNameInput(event) {
    setName(event.target.value);
    //console.log(Name);
  }

  //Make the POST request
  async function postLink(event) {
    event.preventDefault();
    if (Category === "" || Link === "" || Description === "" || Name === "") {
      swal({
        title: "Error - Form did not submit.",
        text: "Please fill in all of the form fields!",
        icon: "error",
      });
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
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(postBody), // body data type must match "Content-Type" header
    });
    const responseData = await response.json();
    setFormReturn(responseData.payload);
    setCategory("");
    setLink("");
    setDescription("");
    setName("");
    swal({
      title: "Success!",
      text: "Your link has been submitted.",
      icon: "success",
    });
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
