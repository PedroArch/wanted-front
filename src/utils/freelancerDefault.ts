import FreelancerType from '../types/FreelancerType';

export const freelancerDefault: FreelancerType = {
    id: 0,
    about: '',
    latitude: 0,
    longitude: 0,
    mobile: '(00)0 0000-0000',
    open_on_weekends: true,
    opening_hours: '',
    portfolio: '',
    type: '',
    images: [
      {id:0, url:''}
    ],
    user: {
      id: 0,
      first_name: '',
      last_name: '',
      avatar: '/assets/userdefault.png',
      birthday: '',
      city: '',
      email: '',
      password: "admin",
      state: 'NY'
    }
  }
