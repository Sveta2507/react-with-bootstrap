const user = {
  name: "sveta",
  email: "dnsdns.dn@googlemail.com",
  avatar: "#",
};

const delay = 400;

const fetchUser = () => {
  return new Promise((response, reject) => {
    return setTimeout(() => {
      response(user);
    }, delay);
  });
};

export default { fetchUser };
