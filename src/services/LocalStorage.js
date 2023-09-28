export const set = (key, value) => localStorage.setItem(key, value);
export const get = (key) => localStorage.getItem(key);
export const remove = (key) => localStorage.removeItem(key);
export const clear = () => localStorage.clear();
export const getPlant = () => localStorage.getItem("windlas-plant");
export const setPlant = (value) => localStorage.setItem("windlas-plant", value);
export const clearPlant = () => localStorage.removeItem("windlas-plant");

export const checkUserSession = (authData) => {
  if (authData.token) {
    let data = {
      token: authData.token,
      phone: authData.phone,
      email: authData.email,
      name: authData.name,
      userId: authData.userId,
      role: authData.role,
      seq_no: authData.seq_no,
    };

    return { status: true, data };
  } else {
    return { status: false, data: "" };
  }
};
