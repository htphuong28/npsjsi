import { create } from 'zustand'

const useModal = create((set) => ({
  profile: {
    name: 'Admin',
    age: 20,
    gender: 'male',
    phoneNum : '123456789',
  },

  details: {
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    address: '',
    coverUrl: 'https://images.template.net/wp-content/uploads/2014/11/HD-LANDSCAPE-WALLPAPER-FACEBOOK-COVER.jpg',
  },


  setProfile : (newProfile) => set({profile : newProfile}),

  setDetails : (newDetails) => set({details: newDetails})
}))

export default useModal