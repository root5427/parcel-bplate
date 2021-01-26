import axios from "axios";

const User = async () => {
  const res = await axios.get("https://randomuser.me/api");
  const user = res.data.results[0];

  const template = `
    <div class="card">
        <img src="${user.picture.large}" />
        <div class="card__body">
            <h1>${user.name.first} ${user.name.last}</h1>
            <ul>
                <li>${user.email}</li>
                <li>${user.cell}</li>
                <li>${user.location.city}</li>
            </ul>
        </div>
    </div>
  `;

  console.log(user);

  return template;
};

export default User;
