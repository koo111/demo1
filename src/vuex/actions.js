 export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: '王瑛健',
        province: '江苏省',
        city: '苏州市',
        area: '常熟市',
        address: '常熟理工',
        phone: '18852937190',
        postalcode: '215500'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};
